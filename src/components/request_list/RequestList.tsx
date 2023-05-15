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
      throw Error("Failed to fetch data" + (error as AxiosError).message);
    }
  };

  return (
    <div className="grid gap-4 my-10">
      {data.map((data) => (
        <RequestCard key={data.id} data={data} fetchData={fetchData} />
      ))}
    </div>
  );
};

export default RequestList;
