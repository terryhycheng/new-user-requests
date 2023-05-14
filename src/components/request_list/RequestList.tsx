import RequestCard from "./RequestCard";
import dataList from "../../data/data.json";
import { type Data } from "../../../types/data";

const RequestList = () => {
  return (
    <div className="grid gap-4 my-10">
      {(dataList as Data[]).map((data) => (
        <RequestCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default RequestList;
