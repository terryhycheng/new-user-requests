import Filters from "./Filters";
import { Data } from "../../../types/data";

describe("<Filters />", () => {
  it("renders", () => {
    const fakeFields = ["testing", "cypress"];
    const fakeData: Data[] = [];
    const fakeSetData = cy.stub().as("set-data");

    cy.mount(
      <Filters fields={fakeFields} data={fakeData} setData={fakeSetData} />
    );
  });
});
