import Filters from "./Filters";
import { Data } from "../../../types/data";

describe("<Filters />", () => {
  beforeEach(() => {
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

  it("should display 2 select input field", () => {});

  it("should filter the data if one of the fields changes", () => {});
});
