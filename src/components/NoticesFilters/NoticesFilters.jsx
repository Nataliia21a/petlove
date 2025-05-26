import React, { useState } from "react";
import Select from "react-select";
import SearchField from "../../components/SearchField/SearchField";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function NoticesFilters() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [category, setCategory] = useState("");
  const [sex, setSex] = useState("");
  return (
    <div>
      <p>NoticesFilters</p>
      <SearchField />
      <div>
        <label htmlFor="category"></label>
        <select
          id="category"
          value={category}
          onChange={(evt) => setCategory(evt.target.value)}
        >
          <option value="" disabled hidden>
            Category
          </option>
          <option value="sell">Sell</option>
          <option value="free">Free</option>
        </select>
        <select value={sex} onChange={(evt) => setSex(evt.target.value)}>
          <option value="">By gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
}
