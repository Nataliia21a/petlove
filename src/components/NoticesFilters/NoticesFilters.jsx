import React, { useEffect, useState } from "react";
import Select from "react-select";
import SearchField from "../../components/SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getLocations,
  getNoticesSex,
  getPetSpecies,
} from "../../redux/notices/operations";

export default function NoticesFilters() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sellCategory, setSellCategory] = useState("");
  const [sex, setSex] = useState("");
  const [type, setType] = useState("");
  const [sorted, setSort] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getNoticesSex());
    dispatch(getPetSpecies());
    dispatch(getLocations());
  }, []);

  const categories = useSelector((state) => state.notices.categories);

  const genders = useSelector((state) => state.notices.sex);

  const petSpecies = useSelector((state) => state.notices.species);

  const locations = useSelector((state) => state.notices.locations);

  const cityList = locations.map((city) => ({
    value: city.cityEn,
    label: city.cityEn,
  }));

  const handleSortChange = (evt) => {
    console.log(evt.target.value);

    setSort(evt.target.value);
  };

  console.log(selectedOption && selectedOption.value);

  // const petsList = useSelector((state) => state.notices.items);

  return (
    <div>
      <p>NoticesFilters</p>
      <SearchField />
      <div>
        <select
          value={sellCategory}
          onChange={(evt) => setSellCategory(evt.target.value)}
        >
          <option value="" disabled hidden>
            Category
          </option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <select value={sex} onChange={(evt) => setSex(evt.target.value)}>
          <option value="" disabled hidden>
            By gender
          </option>
          {genders.map((gender) => {
            return (
              <option key={gender} value={gender}>
                {gender}
              </option>
            );
          })}
        </select>
      </div>
      <select value={type} onChange={(evt) => setType(evt.target.value)}>
        <option value="" disabled hidden>
          By type
        </option>
        {petSpecies.map((specie) => {
          return (
            <option key={specie} value={specie}>
              {specie}
            </option>
          );
        })}
      </select>
      <div className={css.location}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={cityList}
          placeholder="Location"
        />
      </div>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="Sorted"
            value="Popular"
            checked={sorted === "Popular"}
            onChange={handleSortChange}
          />
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="Sorted"
            value="Unpopular"
            checked={sorted === "Unpopular"}
            onChange={handleSortChange}
          />
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="Sorted"
            value="Cheap"
            checked={sorted === "Cheap"}
            onChange={handleSortChange}
          />
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="Sorted"
            value="Expensive"
            checked={sorted === "Expensive"}
            onChange={handleSortChange}
          />
        </label>
      </div>
    </div>
  );
}
