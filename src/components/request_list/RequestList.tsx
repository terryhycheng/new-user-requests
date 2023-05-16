import { Data } from "../../../types/data";
import RequestCard from "./RequestCard";

interface Props {
  data: Data[];
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestList = ({ data, setRefresh }: Props) => {
  return (
    <div className="grid gap-4 mb-10 flex-1 h-full">
      {!data.length && (
        <div className="border h-full p-4 rounded-lg min-h-[20vh] flex items-center justify-center">
          <p className="text-center">There is no matched data</p>
        </div>
      )}
      {!!data.length &&
        data.map((data) => (
          <RequestCard key={data.id} data={data} setRefresh={setRefresh} />
        ))}
    </div>
  );
};

export default RequestList;
