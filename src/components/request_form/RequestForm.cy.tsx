import RequestForm from "./RequestForm";

describe("<RequestForm />", () => {
  beforeEach(() => {
    const fakeSetRefresh = cy.stub().as("set-refresh");
    const fakeFields = ["testing", "cypress"];
    cy.window().then((win) => {
      cy.stub(win.console, "log").as("consoleLog");
    });
    cy.mount(<RequestForm setRefresh={fakeSetRefresh} fields={fakeFields} />);
  });

  it("should display all input fields", () => {
    cy.get('[data-cy="first-name-input"]').should("be.visible");
    cy.get('[data-cy="last-name-input"]').should("be.visible");
    cy.get('[data-cy="job-title-input"]').should("be.visible");
    cy.get('[data-cy="line-manager-input"]').should("be.visible");
    cy.get('[data-cy="field-input"]').should("be.visible");
    cy.get('[data-cy="date-input"]').should("be.visible");
    cy.get('[data-cy="submit-button"]').should("be.visible");
  });

  it("should prevent users from submitting if some fields are empty", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get("@set-refresh").should("not.have.been.called");
  });

  it("should handle a submission correctly", () => {
    cy.intercept("POST", "http://localhost:5050/staff", { statusCode: 201 });
    cy.get('[data-cy="first-name-input"]').type("terry");
    cy.get('[data-cy="last-name-input"]').type("cheng");
    cy.get('[data-cy="job-title-input"]').type("random title");
    cy.get('[data-cy="line-manager-input"]').type("manager");
    cy.get('[data-cy="field-input"]').select("testing");
    cy.get('[data-cy="date-input"]').type("2023-05-17");
    cy.get('[data-cy="submit-button"]').click();
    cy.get("@set-refresh").should("have.been.calledOnce");
  });

  it("should throw an error if submission fails", () => {
    cy.intercept("POST", "http://localhost:5050/staff", {
      forceNetworkError: true,
    });
    cy.get('[data-cy="first-name-input"]').type("terry");
    cy.get('[data-cy="last-name-input"]').type("cheng");
    cy.get('[data-cy="job-title-input"]').type("random title");
    cy.get('[data-cy="line-manager-input"]').type("manager");
    cy.get('[data-cy="field-input"]').select("testing");
    cy.get('[data-cy="date-input"]').type("2023-05-17");
    cy.get('[data-cy="submit-button"]').click();
    cy.get("@consoleLog").should(
      "be.calledWith",
      "Failed to add record: Network Error"
    );
  });
});
