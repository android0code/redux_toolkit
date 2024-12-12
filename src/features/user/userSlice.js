// write by "Amrik"
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  user: null,
  users: [],
  posts: [],
};

// Async Thunk to fetch user data from an API
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async userId => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const data = await response.json();
    return data;
  },
);

export const fetchAllUserData = createAsyncThunk(
  'user/fetchAllUserData',
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    return data;
  },
);

export const fetchUserPosts = createAsyncThunk(
  'user/fetchUserPosts',
  async userId => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    return response.json();
  },
);

const handleAsyncThunk = (builder, thunk, stateKey) => {
  builder
    .addCase(thunk.pending, state => {
      state.status = 'loading';
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state[stateKey] = action.payload;
    })
    .addCase(thunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAge: (state, action) => {
      state.user.age = action.payload;
    },
    updateUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },
    clearUser: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    // Use the helper function to manage thunks
    handleAsyncThunk(builder, fetchUserData, 'user');
    handleAsyncThunk(builder, fetchAllUserData, 'users');
    handleAsyncThunk(builder, fetchUserPosts, 'posts');
  },
});

// Action creators are generated for each case reducer function
export const {updateUser, updateAge, clearUser} = userSlice.actions;

export default userSlice.reducer;
