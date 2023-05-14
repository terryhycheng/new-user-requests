import { ReactComponent as PersonLogo } from "../../assets/person.svg";
import { ReactComponent as DateLogo } from "../../assets/date.svg";
import { ReactComponent as TickLogo } from "../../assets/tick.svg";

const RequestCard = () => {
  return (
    <div className="p-8 rounded-lg border flex flex-col gap-4 font-light">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-2xl">Terry Cheng</h3>
          <p>Junior Web Developer</p>
        </div>
        <div>
          <p className="rounded-full text-sm px-4 py-1 bg-[#F1F1F1]">Finance</p>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-4">
        <div className="flex gap-3 items-center">
          <PersonLogo className="fill-black" />
          <p>Richard Griffiths</p>
        </div>
        <div className="flex gap-3 items-center">
          <DateLogo className="fill-black" />
          <p>2023-06-01</p>
        </div>
        <div className="flex gap-3 items-center">
          <TickLogo className="fill-black" />
          <p>Incomplete</p>
        </div>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <button
          type="button"
          className="p-4 py-3 border flex-1 rounded-lg text-secondary border-secondary"
        >
          Make as Completed
        </button>
        <button
          type="button"
          className="p-4 py-3 border flex-1 rounded-lg text-error border-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
