import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/clises/courseSlice";
import { RootState } from "../store/store";

const CourseSearch: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm: string = useSelector(
    (state: RootState) => state.courses.searchTerm
  );
  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field is-horizontal">
        <label className="label">Ara</label>
        <input
          className="input"
          onChange={(event) => {
            dispatch(changeSearchTerm(event.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default CourseSearch;
