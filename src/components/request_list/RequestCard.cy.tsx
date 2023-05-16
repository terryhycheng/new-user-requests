import { Data } from "../../../types/data";
import RequestCard from "./RequestCard";

describe("<RequestCard />", () => {
  beforeEach(() => {
    const fakeData: Data = {
      id: "123",
      firstName: "Testing",
      lastName: "Component",
      jobTitle: "Cypress tester",
      lineManager: "Terry Cheng",
      startDate: "2023-05-16",
      businessArea: "IT",
      completed: false,
      createdAt: 12345,
    };

    const fakeSetRefresh = cy.stub().as("set-refresh");

    cy.mount(<RequestCard data={fakeData} setRefresh={fakeSetRefresh} />);
  });

  it("should display all info correctly", () => {});

  it("should handle toggle status", () => {});

  it("should handle delete a request", () => {});

  it("should throw errors when something goes wrong", () => {});
});
