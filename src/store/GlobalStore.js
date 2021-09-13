import {configureStore} from '@reduxjs/toolkit';

import globalData from '../feature/dataStore/globalData';

export const store = configureStore({
  reducer: {
    data: globalData,
  },
});
