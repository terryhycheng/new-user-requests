import RequestList from "./RequestList";

describe("<RequestList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RequestList />);
  });
});
