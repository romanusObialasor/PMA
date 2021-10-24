import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
};

const Reducer = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    addMember: (state, { payload }) => {
      const checkMember = state.members.findIndex((el) => el.id === payload.id);

      if (checkMember >= 0) {
      } else {
        state.members.push({ ...payload });
      }
    },
  },
});

export const { addMember } = Reducer.actions;
export default Reducer.reducer;
