import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "./formSlice";

interface CourseState {
  searchTerm: string;
  data: FormState[];
}

const initialState: CourseState = {
  searchTerm: "",
  data: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<FormState>) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
      });
    },
    removeCourse(state, action: PayloadAction<string>) {
      state.data = state.data.filter((course) => course.id !== action.payload);
    },
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCourse, removeCourse, changeSearchTerm } =
  courseSlice.actions;

export const courseReducer = courseSlice.reducer;
