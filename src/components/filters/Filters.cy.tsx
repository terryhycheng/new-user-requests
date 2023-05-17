import Filters from "./Filters";
import { Data } from "../../../types/data";

describe("<Filters />", () => {
  beforeEach(() => {
    const fakeFields = ["IT", "Finance"];
    const fakeData: Data[] = [
      {
        id: "1",
        firstName: "Testing",
        lastName: "Component One",
        jobTitle: "Cypress tester One",
        lineManager: "Terry Cheng",
        startDate: "2023-05-16",
        businessArea: "IT",
        completed: false,
        createdAt: 12345,
      },
      {
        id: "2",
        firstName: "Testing",
        lastName: "Component Two",
        jobTitle: "Cypress tester Two",
        lineManager: "Terry Cheng",
        startDate: "2023-05-17",
        businessArea: "Finance",
        completed: true,
        createdAt: 12345,
      },
    ];
    const fakeSetFilteredData = cy.stub().as("set-filtered-data");

    cy.mount(
      <Filters
        fields={fakeFields}
        refresh={true}
        data={fakeData}
        setFilterData={fakeSetFilteredData}
      />
    );
  });

  it("should display 2 select input field", () => {
    cy.get('[data-cy="title"]').should("contain.text", "Filters");
    cy.get('[data-cy="field-filter"]').should("be.visible");
    cy.get('[data-cy="status-filter"]').should("be.visible");
  });

  it("should filter the data if the field filter changes", () => {
    const expectedData = [
      {
        id: "1",
        firstName: "Testing",
        lastName: "Component One",
        jobTitle: "Cypress tester One",
        lineManager: "Terry Cheng",
        startDate: "2023-05-16",
        businessArea: "IT",
        completed: false,
        createdAt: 12345,
      },
    ];
    cy.get('[data-cy="field-filter"]').select("IT");
    cy.get("@set-filtered-data")
      .should("have.been.called")
      .and("have.been.calledWith", expectedData);
  });

  it("should filter the data if the status filter changes", () => {
    const expectedData = [
      {
        id: "2",
        firstName: "Testing",
        lastName: "Component Two",
        jobTitle: "Cypress tester Two",
        lineManager: "Terry Cheng",
        startDate: "2023-05-17",
        businessArea: "Finance",
        completed: true,
        createdAt: 12345,
      },
    ];
    cy.get('[data-cy="status-filter"]').select("completed");
    cy.get("@set-filtered-data")
      .should("have.been.called")
      .and("have.been.calledWith", expectedData);
  });

  it("should filter correctly when user applied two filters", () => {
    cy.get('[data-cy="field-filter"]').select("IT");
    cy.get('[data-cy="status-filter"]').select("completed");
    cy.get("@set-filtered-data")
      .should("have.been.called")
      .and("have.been.calledWith", []);
  });
});
