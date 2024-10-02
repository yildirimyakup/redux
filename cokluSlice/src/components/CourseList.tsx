import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FormState } from "../store/clises/formSlice";
import { removeCourse } from "../store/clises/courseSlice";

const CourseList: React.FC = () => {
  const courses: FormState[] = useSelector((state: RootState) =>
    state.courses.data.filter((course) =>
      course.name.toLowerCase().includes(state.courses.searchTerm.toLowerCase())
    )
  );
  const dispatch = useDispatch();

  const renderedCourses = courses.map((course: FormState) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          onClick={(e) => dispatch(removeCourse(course.id))}
          className="button is-danger"
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
