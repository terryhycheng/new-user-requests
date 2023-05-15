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

    const fakeFetchData = cy.stub().as("fetch-data");

    cy.mount(<RequestCard data={fakeData} fetchData={fakeFetchData} />);
  });
});
