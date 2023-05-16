import { Data } from "../../../types/data";
import RequestList from "./RequestList";

describe("<RequestList />", () => {
  it("should display a message when the data is empty", () => {
    const fakeData: Data[] = [];
    const fakeSetRefresh = cy.stub().as("set-refresh");
    cy.mount(<RequestList data={fakeData} setRefresh={fakeSetRefresh} />);
  });

  it("should display request cards", () => {});
});
