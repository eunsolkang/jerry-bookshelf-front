import {
    configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import modalSlice from './slice/modalSlice';
import searchSlice from './slice/searchSlice';

export const store = configureStore({
    reducer: {
        search: searchSlice,
        modal: modalSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

