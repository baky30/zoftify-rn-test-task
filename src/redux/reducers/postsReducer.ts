import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../commonInterfaces";

interface IInitialState {
  posts: IPost[];
}

const initialState: IInitialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<IPost>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;
