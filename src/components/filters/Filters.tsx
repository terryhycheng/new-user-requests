import { useCallback, useEffect, useRef } from "react";
import { Data } from "../../../types/data";

interface Props {
  fields: string[];
  data: Data[];
  refresh: boolean;
  setFilterData: React.Dispatch<React.SetStateAction<Data[]>>;
}

const Filters = ({ fields, data, refresh, setFilterData }: Props) => {
  const fieldFilterRef = useRef<HTMLSelectElement>(null);
  const statusFilterRef = useRef<HTMLSelectElement>(null);

  const onChangeHandler = useCallback(() => {
    const filteredData = fieldFilter(statusFilter(data));
    setFilterData(filteredData);
  }, [data, setFilterData]);

  // Filter the data again when `refresh` changed
  useEffect(() => {
    onChangeHandler();
  }, [refresh, onChangeHandler]);

  const fieldFilter = (inputData: Data[]) => {
    const selected = fieldFilterRef.current?.value;
    if (!selected) {
      return inputData;
    }
    const filteredData = inputData.filter(
      (record) => record.businessArea === selected
    );
    return filteredData;
  };

  const statusFilter = (inputData: Data[]) => {
    const selected = statusFilterRef.current?.value;
    if (selected === "") {
      return inputData;
    }
    const option = selected === "completed" ? true : false;
    const filteredData = inputData.filter(
      (record) => record.completed === option
    );

    return filteredData;
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
            ref={statusFilterRef}
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
