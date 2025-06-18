import { useEffect, useState } from "react";
import Select from "react-select";
import SearchField from "../../components/SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getLocations,
  getNotices,
  getNoticesSex,
  getPetSpecies,
} from "../../redux/notices/operations";
import { setSearchQuery } from "../../redux/notices/slice";

export default function NoticesFilters() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sellCategory, setSellCategory] = useState("");
  const [sex, setSex] = useState("");
  const [type, setType] = useState("");
  const [sorted, setSort] = useState("");

  const categories = useSelector((state) => state.notices.categories);
  const genders = useSelector((state) => state.notices.sex);
  const petSpecies = useSelector((state) => state.notices.species);
  const locations = useSelector((state) => state.notices.locations);
  const keyword = useSelector((state) => state.notices.searchQuery);

  const isNoticesActive = true;

  const dispatch = useDispatch();

  const cityList = locations.map((city) => ({
    value: city.cityEn,
    label: city.cityEn,
  }));

  const handleSortChange = (evt) => {
    setSort(evt.target.value);
  };

  console.log("sorted", sorted);

  const sortByPrice = sorted === "Cheap" ? true : false;
  console.log("sortByPrice", sortByPrice);

  const sortByPopularity = sorted === "Popular" ? false : true;

  console.log("sortByPopularity", sortByPopularity);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      appearance: "none",
      border: "none",
      borderRadius: "30px",
      padding: "12px 12px 12px 12px",
      width: "295px",
      height: "42px",
      overflow: "visible",
      textAling: "left",
    }),
    dropdownIndicator: () => ({
      display: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      fontFamily: "Manrope, sans-serif",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "1.28571",
      letterSpacing: "-0.03em",
      color: "#262626",
      border: "none",
    }),
  };

  const handleChange = (value) => {
    console.log("value", value);

    dispatch(setSearchQuery(value));
  };

  const handleSearch = () => {
    dispatch(getNotices({ keyword }));
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getNoticesSex());
    dispatch(getPetSpecies());
    dispatch(getLocations());
    const params = { keyword: keyword, category: sellCategory, species: type };
    if (sorted === "Cheap" || sorted === "Expensive") {
      params.byPrice = sortByPrice;
    } else if (sorted === "Popular" || sorted === "Unpopular") {
      params.byPopularity = sortByPopularity;
    }

    dispatch(getNotices(params));
  }, [keyword, sellCategory, type, sorted]);

  return (
    <div className={css.container}>
      <SearchField
        isNoticesActive={isNoticesActive}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      <div className={css.categoryAndGender}>
        <select
          className={css.category}
          value={sellCategory}
          onChange={(evt) => setSellCategory(evt.target.value)}
        >
          <option className={css.option} value="" disabled hidden>
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
        <select
          className={css.gender}
          value={sex}
          onChange={(evt) => setSex(evt.target.value)}
        >
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
      <select
        className={css.byType}
        value={type}
        onChange={(evt) => setType(evt.target.value)}
      >
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
          styles={customStyles}
        />
      </div>
      <div className={css.line}></div>
      <div className={css.containerRadioBtn}>
        <label className={css.radioBtn} htmlFor="">
          <input
            className={css.radioInput}
            placeholder="Popular"
            type="radio"
            name="Sorted"
            value="Popular"
            checked={sorted === "Popular"}
            onChange={handleSortChange}
          />
          Popular
        </label>
        <label className={css.radioBtn} htmlFor="">
          <input
            className={css.radioInput}
            type="radio"
            name="Sorted"
            value="Unpopular"
            checked={sorted === "Unpopular"}
            onChange={handleSortChange}
          />
          Unpopular
        </label>
        <label className={css.radioBtn} htmlFor="">
          <input
            className={css.radioInput}
            type="radio"
            name="Sorted"
            value="Cheap"
            checked={sorted === "Cheap"}
            onChange={handleSortChange}
          />
          Cheap
        </label>
        <label className={css.radioBtn} htmlFor="">
          <input
            className={css.radioInput}
            type="radio"
            name="Sorted"
            value="Expensive"
            checked={sorted === "Expensive"}
            onChange={handleSortChange}
          />
          Expensive
        </label>
      </div>
    </div>
  );
}
