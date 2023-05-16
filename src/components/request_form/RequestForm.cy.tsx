import RequestForm from "./RequestForm";

describe("<RequestForm />", () => {
  it("renders", () => {
    const fakeSetRefresh = cy.stub().as("set-refresh");
    const fakeFields = ["testing", "cypress"];

    cy.mount(<RequestForm setRefresh={fakeSetRefresh} fields={fakeFields} />);
  });
});
