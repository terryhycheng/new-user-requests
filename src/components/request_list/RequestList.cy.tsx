import { Data } from "../../../types/data";
import RequestList from "./RequestList";

describe("<RequestList />", () => {
  it("should display a message when the data is empty", () => {
    // SET UP
    const fakeData: Data[] = [];
    const fakeSetRefresh = cy.stub().as("set-refresh");
    cy.mount(<RequestList data={fakeData} setRefresh={fakeSetRefresh} />);

    // ASSERT
    cy.get('[data-cy="message"]').should(
      "contain.text",
      "There is no matched data"
    );
  });

  it("should display request cards", () => {
    // SET UP
    const fakeData: Data[] = [
      {
        id: "1",
        firstName: "Testing",
        lastName: "Component One",
        jobTitle: "Cypress tester One",
        lineManager: "Terry Cheng",
        startDate: "2023-05-16",
        businessArea: "IT",
        completed: false,
        createdAt: 12345,
      },
      {
        id: "2",
        firstName: "Testing",
        lastName: "Component Two",
        jobTitle: "Cypress tester Two",
        lineManager: "Terry Cheng",
        startDate: "2023-05-16",
        businessArea: "IT",
        completed: false,
        createdAt: 12345,
      },
    ];
    const fakeSetRefresh = cy.stub().as("set-refresh");
    cy.mount(<RequestList data={fakeData} setRefresh={fakeSetRefresh} />);

    // ASSERT
    cy.get('[data-cy="request-card"]').should("have.length", 2);
  });
});
