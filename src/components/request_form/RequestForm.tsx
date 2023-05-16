import { FormEvent, useRef } from "react";
import { type Data } from "../../../types/data";
import axios, { AxiosError } from "axios";

interface Props {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  fields: string[];
}

const RequestForm = ({ setRefresh, fields }: Props) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const jobTitleRef = useRef<HTMLInputElement>(null);
  const lineManagerRef = useRef<HTMLInputElement>(null);
  const bussinessFieldRef = useRef<HTMLSelectElement>(null);
  const startDatedRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const data: Data = {
      id: crypto.randomUUID(),
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      jobTitle: jobTitleRef.current!.value,
      lineManager: lineManagerRef.current!.value,
      startDate: startDatedRef.current!.value,
      businessArea: bussinessFieldRef.current!.value,
      completed: false,
      createdAt: new Date().getTime(),
    };
    await saveToDataBase(data);
    setRefresh((prev) => !prev);
    clearFeilds();
  };

  const saveToDataBase = async (data: Data) => {
    try {
      await axios.post("http://localhost:5050/staff", data);
    } catch (error) {
      throw Error("Failed to add record" + (error as AxiosError).message);
    }
  };

  const clearFeilds = () => {
    firstNameRef.current!.value = "";
    lastNameRef.current!.value = "";
    jobTitleRef.current!.value = "";
    lineManagerRef.current!.value = "";
    startDatedRef.current!.value = "";
    bussinessFieldRef.current!.value = "";
  };

  return (
    <div className="w-full lg:w-1/3 px-8 pt-8 pb-2 border rounded-lg h-full">
      <h2 className="font-bold text-xl capitalize">Add New Request</h2>
      <form onSubmit={submitHandler} className="flex flex-col gap-3 my-6">
        <input
          type="text"
          ref={firstNameRef}
          name="firstName"
          placeholder="First name*"
          required
        />
        <input
          type="text"
          ref={lastNameRef}
          name="lastName"
          placeholder="Last name*"
          required
        />
        <input
          type="text"
          ref={jobTitleRef}
          name="jobTitle"
          placeholder="Job title*"
          required
        />
        <input
          type="text"
          ref={lineManagerRef}
          name="lineManager"
          placeholder="Line Manager*"
          required
        />
        <select
          name="bussinessField"
          ref={bussinessFieldRef}
          defaultValue=""
          className="flex-1"
          required
        >
          <option value="" disabled>
            Please select bussiness field*
          </option>
          {fields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
        <div className="flex gap-2 items-center">
          <label htmlFor="startDate">Start Date*</label>
          <input
            type="date"
            ref={startDatedRef}
            name="startDate"
            className="flex-1"
            required
          />
        </div>
        <input
          type="submit"
          value="Add record"
          className="bg-main text-white p-3 rounded-md mt-4"
        />
      </form>
    </div>
  );
};

export default RequestForm;
