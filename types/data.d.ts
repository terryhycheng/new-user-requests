export interface Data {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  lineManager: string;
  startDate: string;
  businessArea: "IT" | "Finance" | "HR" | "Housing" | "Care";
  completed: boolean;
}
