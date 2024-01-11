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
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
