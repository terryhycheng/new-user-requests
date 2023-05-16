import RequestForm from "./RequestForm";

describe("<RequestForm />", () => {
  it("renders", () => {
    const fakeFetchData = cy.stub().as("fetch-data");
    const fakeFields = ["testing", "cypress"];

    cy.mount(<RequestForm fetchData={fakeFetchData} fields={fakeFields} />);
  });
});
