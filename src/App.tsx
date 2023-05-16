import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import RequestForm from "./components/request_form/RequestForm";
import RequestList from "./components/request_list/RequestList";
import { Data } from "../types/data";
import axios, { AxiosError } from "axios";
import Filters from "./components/filters/Filters";

const baseUrl = "http://localhost:5050/staff?_sort=createdAt&_order=desc";
const businessFields = ["IT", "Finance", "HR", "Housing", "Care"];

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [filterData, setFilterData] = useState<Data[]>([]);

  // a state to trigger data fetching & filtering
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    try {
      const res = await axios.get<Data[]>(baseUrl);
      setData(res.data);
      setFilterData(res.data);
    } catch (error) {
      throw Error("Failed to fetch data" + (error as AxiosError).message);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Filters
        fields={businessFields}
        data={data}
        refresh={refresh}
        setFilterData={setFilterData}
      />
      <main className="mx-auto px-4 max-w-[1200px]">
        <h2 className="text-center text-2xl text-main font-bold my-10">
          New Starter Requests
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <RequestForm setRefresh={setRefresh} fields={businessFields} />
          <RequestList data={filterData} setRefresh={setRefresh} />
        </div>
      </main>
    </div>
  );
}

export default App;
