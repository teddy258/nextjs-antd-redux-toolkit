import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  value: number;
}

export const initialState: IState = {
  value: 0,
};

export const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export default slice.reducer;
