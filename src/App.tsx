import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import RequestForm from "./components/request_form/RequestForm";
import RequestList from "./components/request_list/RequestList";
import { Data } from "../types/data";
import axios, { AxiosError } from "axios";

const baseUrl = "http://localhost:5050/staff";

function App() {
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
    <>
      <Header />
      <main className="mx-auto px-4 max-w-[1200px]">
        <h2 className="text-center text-2xl text-main font-bold my-10">
          New Starter Requests
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <RequestForm fetchData={fetchData} />
          <RequestList data={data} fetchData={fetchData} />
        </div>
      </main>
    </>
  );
}

export default App;
