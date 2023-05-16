import { Data } from "../../../types/data";

interface Props {
  fields: string[];
  data: Data[];
}

const Filters = ({ fields, data }: Props) => {
  return (
    <section className="border-b py-6 px-4">
      <div className="max-w-[1200px] mx-auto flex items-center gap-8">
        <h3 className="font-semibold text-lg">Filters</h3>
        <div className="flex gap-4 flex-1">
          <select name="fieldFilter" defaultValue="" className="flex-1">
            <option value="" disabled>
              Please select field
            </option>
            {fields.map((field) => (
              <option value={field}>{field}</option>
            ))}
          </select>
          <select name="statusFilter" className="flex-1">
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filters;
