import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  changeCost,
  changeDescription,
  changeName,
} from "../store/clises/formSlice";
import { addCourse } from "../store/clises/courseSlice";

const CourseForm: React.FC = () => {
  const { name, description, cost } = useSelector((state: RootState) => ({
    name: state.form.name,
    description: state.form.description,
    cost: state.form.cost,
  }));

  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(addCourse({ id: "", name, description, cost }));
  }

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={(e) => dispatch(changeName(e.target.value))}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              value={description}
              onChange={(e) => dispatch(changeDescription(e.target.value))}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost}
              onChange={(e) =>
                dispatch(changeCost(parseInt(e.target.value) || 0))
              }
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-primary">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
