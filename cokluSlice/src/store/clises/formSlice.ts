import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

export interface FormState {
  id: string;
  name: string;
  description: string;
  cost: number;
}

const initialState: FormState = {
  id: "1",
  name: "",
  description: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.cost = 0;
      state.description = "";
      state.name = "";
    });
  },
});

export const { changeName, changeCost, changeDescription } = formSlice.actions;
export const formReducer = formSlice.reducer;
