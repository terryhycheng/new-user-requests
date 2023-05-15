import { Data } from "../../../types/data";
import RequestList from "./RequestList";

describe("<RequestList />", () => {
  it("renders", () => {
    const fakeData: Data[] = [];
    const fakeFetchData = cy.stub().as("fetch-data");
    cy.mount(<RequestList data={fakeData} fetchData={fakeFetchData} />);
  });
});
