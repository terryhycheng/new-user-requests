import RequestCard from "./RequestCard";
import { type Data } from "../../../types/data";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const baseUrl = "http://localhost:5050/staff";

const RequestList = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get<Data[]>(baseUrl);
      setData(res.data);
    } catch (error) {
      console.log("Failed to fetch data" + (error as AxiosError).message);
    }
  };

  const handleToggleStatus = async (id: string) => {
    const selected = data.filter((record) => record.id === id)[0];
    if (!selected) {
      console.error("Invalid ID. Please try again.");
      return;
    }
    selected.completed = !selected.completed;
    try {
      await axios.put(`${baseUrl}/${id}`, selected);
      await fetchData();
    } catch (error) {
      console.error(
        "Failed to change status: " + (error as AxiosError).message
      );
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      await fetchData();
    } catch (error) {
      console.error(
        "Failed to delete record: " + (error as AxiosError).message
      );
    }
  };

  return (
    <div className="grid gap-4 my-10">
      {data.map((data) => (
        <RequestCard
          key={data.id}
          data={data}
          handleToggleStatus={handleToggleStatus}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default RequestList;
