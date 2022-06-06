import {
    createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from '..';

const name = 'search';

type stateType = {
    value: string;
};

const initialState: stateType = {
    value: "",
};

export const searchSlice = createSlice({
    name,
    initialState,
    reducers: {
        changeValue: (
            state, 
            action: PayloadAction<string>
        ) => {
            state.value = action.payload;
        },
    },
    extraReducers: {},
});

export const searchState = (state: RootState) => state.search.value;
export const {changeValue} = searchSlice.actions;

export default searchSlice.reducer;