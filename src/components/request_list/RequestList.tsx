import RequestCard from "./RequestCard";
import dataList from "../../data/data.json";
import { type Data } from "../../../types/data";
import { useState } from "react";

const RequestList = () => {
  const [data, setData] = useState(dataList as Data[]);

  const handleToggleStatus = async (id: number) => {
    const newData = data.map((record) => {
      if (record.id === id) {
        record = { ...record, completed: !record.completed };
      }
      return record;
    });
    setData(newData);
  };

  const handleDelete = async (id: number) => {
    const newData = data.filter((record) => record.id !== id);
    setData(newData);
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
