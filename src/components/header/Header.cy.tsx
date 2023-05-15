import Header from "./Header";

describe("<Header />", () => {
  beforeEach(() => cy.mount(<Header />));

  it("should render a GitHub logo", () => {
    cy.get('[data-cy="github-logo"]').should("exist");
  });

  it("should have a link to the GitHub repo", () => {
    cy.get('[data-cy="github-link"]')
      .should("exist")
      .and(
        "have.attr",
        "href",
        "https://github.com/terryhycheng/new-user-requests"
      );
  });

  it("should render a Pobl logo", () => {
    cy.get('[data-cy="pobl-logo"]')
      .should("exist")
      .and("have.attr", "src", "/pobl-logo.png");
  });
});
