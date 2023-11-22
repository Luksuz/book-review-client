import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
    addPost: (state, action) => {
      return [...state, action.payload];
    },
    addComment: (state, action) => {
      const newComment = {
        id: action.payload.id,
        post: action.payload.post,
        author: action.payload.author,
        author_username: action.payload.author_username,
        content: action.payload.content,
        post_title: action.payload.post_title,
        post_content: action.payload.post_content,
        created_at: action.payload.created_at
      };
      return state.map(post => post.id === action.payload.post ?
        { ...post, comments: [...post.comments, newComment] } : post);
    },
    removeComment: (state, action) => {
      return state.map(post => post.id === action.payload.post ?
        { ...post, comments: post.comments.filter(comment => comment.id !== action.payload.commentId) } : post);
    },
    changeComment: (state, action) => {
      return state.map(post => post.id === action.payload.post ?
        {
          ...post, 
          comments: post.comments.map(comment => comment.id === action.payload.commentId ?
            { ...comment, content: action.payload.newContent } : comment)
        } : post);
    }
  }
});

export const { setPosts, addPost, addComment, removeComment, changeComment } = postSlice.actions;

export default postSlice.reducer;
