import { Data } from "../../../types/data";
import RequestCard from "./RequestCard";

interface Props {
  data: Data[];
  fetchData: () => Promise<void>;
}

const RequestList = ({ data, fetchData }: Props) => {
  return (
    <div className="grid gap-4 mb-10 flex-1">
      {data.map((data) => (
        <RequestCard key={data.id} data={data} fetchData={fetchData} />
      ))}
    </div>
  );
};

export default RequestList;
