import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
