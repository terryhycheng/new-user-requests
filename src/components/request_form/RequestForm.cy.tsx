import RequestForm from "./RequestForm";

describe("<RequestForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RequestForm />);
  });
});
