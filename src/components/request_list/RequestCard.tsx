import { ReactComponent as PersonLogo } from "../../assets/person.svg";
import { ReactComponent as DateLogo } from "../../assets/date.svg";
import { ReactComponent as TickLogo } from "../../assets/tick.svg";
import { type Data } from "../../../types/data";
import axios, { AxiosError } from "axios";

interface Props {
  data: Data;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestCard = ({ data, setRefresh }: Props) => {
  const {
    id,
    firstName,
    lastName,
    jobTitle,
    completed,
    lineManager,
    businessArea,
    startDate,
  } = data;
  const fullName = `${firstName} ${lastName}`;

  const handleToggleStatus = async () => {
    const newData = { ...data, completed: !completed };
    try {
      await axios.put(`http://localhost:5050/staff/${id}`, newData);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log("Failed to change status: " + (error as AxiosError).message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5050/staff/${id}`);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log("Failed to delete record: " + (error as AxiosError).message);
    }
  };

  return (
    <div
      className="p-8 rounded-lg border flex flex-col gap-4 font-light h-full"
      data-cy="request-card"
    >
      <div className="flex justify-between">
        <div>
          <h3 data-cy="full-name" className="font-bold text-xl capitalize">
            {fullName}
          </h3>
          <p data-cy="job-title">{jobTitle}</p>
        </div>
        <p
          data-cy="business-area"
          className="rounded-full text-sm px-4 py-1 bg-[#F1F1F1]"
        >
          {businessArea}
        </p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-4 flex-col lg:flex-row gap-2 lg:gap-0">
        <div className="flex gap-3 items-center">
          <PersonLogo className="fill-black" />
          <p data-cy="line-manager">{lineManager}</p>
        </div>
        <div className="flex gap-3 items-center">
          <DateLogo className="fill-black" />
          <p data-cy="start-date">{startDate}</p>
        </div>
        <div className="flex gap-3 items-center">
          <TickLogo className={`${completed ? "fill-main" : "fill-error"}`} />
          <p
            data-cy="status"
            className={`${completed ? "text-main" : "text-error"}`}
          >
            {completed ? "Completed" : "Incomplete"}
          </p>
        </div>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <button
          data-cy="status-button"
          type="button"
          className={`p-4 py-3 border flex-1 rounded-lg ${
            completed
              ? "text-gray-200 border-gray-200"
              : "text-secondary border-secondary"
          }`}
          onClick={handleToggleStatus}
        >
          {completed ? "Undo" : "Mark as Completed"}
        </button>
        <button
          data-cy="delete-button"
          type="button"
          className="p-4 py-3 border flex-1 rounded-lg text-error border-error"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
