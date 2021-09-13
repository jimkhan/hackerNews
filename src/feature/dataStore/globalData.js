import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  newItems: null,
  topItems: null,
  bestItems: null,
  jobItems: null,
};

const globalData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setNewItem: (state, action) => {
      state.newItems = action.payload;
    },
    setTopItem: (state, action) => {
      state.topItems = action.payload;
    },
    setBestItem: (state, action) => {
      state.bestItems = action.payload;
    },
    setJobItem: (state, action) => {
      state.jobItems = action.payload;
    },
  },
});

export const {setNewItem, setTopItem, setBestItem, setJobItem} =
  globalData.actions;

export default globalData.reducer;
