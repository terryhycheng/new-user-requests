import Filters from "./Filters";
import { Data } from "../../../types/data";

describe("<Filters />", () => {
  it("renders", () => {
    const fakeFields = ["testing", "cypress"];
    const fakeData: Data[] = [];
    const fakeSetRefresh = cy.stub().as("set-refresh");

    cy.mount(
      <Filters
        fields={fakeFields}
        refresh={true}
        data={fakeData}
        setFilterData={fakeSetRefresh}
      />
    );
  });
});
