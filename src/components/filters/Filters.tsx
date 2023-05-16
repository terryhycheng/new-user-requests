import { useRef } from "react";
import { Data } from "../../../types/data";

interface Props {
  fields: string[];
  data: Data[];
  setFilterData: React.Dispatch<React.SetStateAction<Data[]>>;
}

const Filters = ({ fields, data, setFilterData }: Props) => {
  const fieldFilterRef = useRef<HTMLSelectElement>(null);

  const fieldFilterOnChangeHandler = () => {
    const selected = fieldFilterRef.current?.value;
    if (!selected) {
      setFilterData(data);
      return;
    }
    const filteredData = data.filter(
      (record) => record.businessArea === selected
    );
    setFilterData(filteredData);
  };

  const statusFilterOnChangeHandler = () => {
    console.log("status changed!");
  };

  return (
    <section className="border-b py-6 px-4">
      <div className="max-w-[1200px] mx-auto flex items-center gap-8">
        <h3 className="font-semibold text-lg">Filters</h3>
        <div className="flex gap-4 flex-1">
          {/* Field Filter */}
          <select
            name="fieldFilter"
            defaultValue=""
            className="flex-1"
            ref={fieldFilterRef}
            onChange={fieldFilterOnChangeHandler}
          >
            <option value="" disabled>
              Please select field
            </option>
            <option value="">All</option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          {/* Status Filter */}
          <select
            name="statusFilter"
            className="flex-1"
            onChange={statusFilterOnChangeHandler}
          >
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
