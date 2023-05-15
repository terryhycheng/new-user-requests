import RequestForm from "./RequestForm";

describe("<RequestForm />", () => {
  it("renders", () => {
    const fakeFetchData = cy.stub().as("fetch-data");

    cy.mount(<RequestForm fetchData={fakeFetchData} />);
  });
});
