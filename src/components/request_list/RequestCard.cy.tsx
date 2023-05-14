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
    cy.mount(<RequestCard {...fakeData} />);
  });
});
