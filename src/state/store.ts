/**
 * @packageDocumentation
 * @module State/store
 * Contains the store for state.
 */

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '~/state/features/counterSlice';
import formReducer from '~/state/features/formSlice';
import nasaApodReducer from '~/state/features/nasaApodSlice';
import todosReducer from '~/state/features/todoSlice';
import uploaderReducer from '~/state/features/uploaderSlice';

const reducer = {
  counter: counterReducer,
  todos: todosReducer,
  nasaApod: nasaApodReducer,
  form: formReducer,
  uploader: uploaderReducer,
};

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
