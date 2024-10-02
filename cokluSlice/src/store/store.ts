import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./clises/formSlice";
import { courseReducer } from "./clises/courseSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    courses: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
