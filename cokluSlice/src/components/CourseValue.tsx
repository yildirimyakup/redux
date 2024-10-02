import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const CourseValue: React.FC = () => {
  const totalCost = useSelector((state: RootState) =>
    state.courses.data
      .filter((course) =>
        course.name
          .toLowerCase()
          .includes(state.courses.searchTerm.toLowerCase())
      )
      .reduce((acc, course) => acc + course.cost, 0)
  );

  return <div className="coursePrice">Toplam Tutar: {totalCost} TL</div>;
};

export default CourseValue;
