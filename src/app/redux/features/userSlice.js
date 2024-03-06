"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  followCount: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementFollowCount: (state) => {
      state.followCount += 1;
    },
    decrementFollowCount: (state) => {
      state.followCount -= 1;
    },
  },
});

export const { incrementFollowCount, decrementFollowCount } = userSlice.actions;
export const selectFollowCount = (state) => state.user.followCount;
export default userSlice.reducer;
