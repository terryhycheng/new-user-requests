import { Data } from "../../../types/data";
import RequestCard from "./RequestCard";

describe("<RequestCard />", () => {
  it("renders", () => {
    const fakeData: Data = {
      id: 0,
      firstName: "",
      lastName: "",
      jobTitle: "",
      lineManager: "",
      startDate: "",
      businessArea: "IT",
      completed: false,
    };
    const fakeHandleDelete = cy.stub().as("handle-delete");
    const fakeHandleToggleStatus = cy.stub().as("handle-toggle-status");
    cy.mount(
      <RequestCard
        data={fakeData}
        handleDelete={fakeHandleDelete}
        handleToggleStatus={fakeHandleToggleStatus}
      />
    );
  });
});
