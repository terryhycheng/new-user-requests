import { Data } from "../../../types/data";
import RequestCard from "./RequestCard";

describe("<RequestCard />", () => {
  it("renders", () => {
    const fakeData: Data = {
      id: "8fd4cd9c-027d-4225-acf1-6f133b10cdd0",
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
