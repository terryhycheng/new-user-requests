import { Data } from "../../../types/data";
import RequestCard from "./RequestCard";

describe("<RequestCard />", () => {
  beforeEach(() => {
    const fakeData: Data = {
      id: "123",
      firstName: "Testing",
      lastName: "Component",
      jobTitle: "Cypress tester",
      lineManager: "Terry Cheng",
      startDate: "2023-05-16",
      businessArea: "IT",
      completed: false,
      createdAt: 12345,
    };

    const fakeSetRefresh = cy.stub().as("set-refresh");

    cy.window().then((win) => {
      cy.stub(win.console, "log").as("consoleLog");
    });

    cy.mount(<RequestCard data={fakeData} setRefresh={fakeSetRefresh} />);
  });

  it("should display all info correctly", () => {
    cy.get('[data-cy="full-name"]').should("contain.text", "Testing Component");
    cy.get('[data-cy="job-title"]').should("contain.text", "Cypress tester");
    cy.get('[data-cy="line-manager"]').should("contain.text", "Terry Cheng");
    cy.get('[data-cy="start-date"]').should("contain.text", "2023-05-16");
    cy.get('[data-cy="business-area"]').should("contain.text", "IT");
    cy.get('[data-cy="status"]').should("contain.text", "Incomplete");
  });

  it("should contain 2 buttons", () => {
    cy.get('[data-cy="status-button"]').should("exist");
    cy.get('[data-cy="delete-button"]').should("exist");
  });

  it("should handle toggle status", () => {
    cy.intercept("PUT", "http://localhost:5050/staff/123", { statusCode: 200 });
    cy.get('[data-cy="status-button"]').click();
    cy.get("@set-refresh").should("have.been.calledOnce");
  });

  it("should handle delete a request", () => {
    cy.intercept("DELETE", "http://localhost:5050/staff/123", {
      statusCode: 200,
    });
    cy.get('[data-cy="delete-button"]').click();
    cy.get("@set-refresh").should("have.been.calledOnce");
  });

  it("should log the error on console when server goes wrong", () => {
    cy.intercept("PUT", "http://localhost:5050/staff/123", {
      statusCode: 500,
    });
    cy.get('[data-cy="status-button"]').click();
    cy.get("@consoleLog").should(
      "be.calledWith",
      "Failed to change status: Request failed with status code 500"
    );
  });

  it("should log the error on console when network goes wrong", () => {
    cy.intercept("DELETE", "http://localhost:5050/staff/123", {
      forceNetworkError: true,
    });
    cy.get('[data-cy="delete-button"]').click();
    cy.get("@consoleLog").should(
      "be.calledWith",
      "Failed to delete record: Network Error"
    );
  });
});
