import RequestForm from "./RequestForm";

describe("<RequestForm />", () => {
  beforeEach(() => {
    const fakeSetRefresh = cy.stub().as("set-refresh");
    const fakeFields = ["testing", "cypress"];
    cy.mount(<RequestForm setRefresh={fakeSetRefresh} fields={fakeFields} />);
  });

  it("should display all input fields", () => {});

  it("should prevent users from submitting if some fields are empty", () => {});

  it("should handle a submission correctly", () => {});

  it("should throw an error if submission fails", () => {});
});
