import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import todosReducer from '../features/todosSlice';
import listsReducer from '../features/listSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    lists: listsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
