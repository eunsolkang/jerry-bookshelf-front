import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const name = 'modal';

type stateType = {
    title: string,
    description: string;
    positiveText: string;
    negativeText: string;
    isShow: boolean;
}

const initialState: stateType = {
    isShow: false,
    title: '',
    description: '',
    positiveText: '',
    negativeText: '',
}

export const modalSlice = createSlice({
    name,
    initialState,
    reducers: {
        openModal : (
            state,
            action: PayloadAction<{title: string, description: string, positiveText: string, negativeText: string}>
        ) =>{
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.positiveText = action.payload.positiveText;
            state.negativeText = action.payload.negativeText;
            state.isShow = true;
        },
        closeModal: (
            state,
            action: PayloadAction<void>
        ) => {
            state.isShow = false;
        }
    }
});

export const modalState = (state: RootState) => state.modal;
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;