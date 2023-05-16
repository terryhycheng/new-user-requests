import { Data } from "../../../types/data";
import RequestList from "./RequestList";

describe("<RequestList />", () => {
  it("renders", () => {
    const fakeData: Data[] = [];
    const fakeSetRefresh = cy.stub().as("set-refresh");
    cy.mount(<RequestList data={fakeData} setRefresh={fakeSetRefresh} />);
  });
});
