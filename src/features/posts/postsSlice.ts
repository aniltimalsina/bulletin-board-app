import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: "1",
      title: "Learning Redux toolkit",
      content: "I am starting to get the importance of Redux toolkit now",
    },
    {
      id: "2",
      title: "slices...",
      content: "The more I say Slice, the more I get confused",
    },
  ],
  reducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
