import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const name = 'modal';

type stateType = {
    isShow: boolean;
    contents: {
        title: string,
        description: string;
        positiveText: string;
        negativeText: string;
        positiveAction?: () => void;

    }
}

const initialState: stateType = {
    isShow: false,
    contents: {
        title: '',
        description: '',
        positiveText: '',
        negativeText: '',
        positiveAction: () => {},

    }
}

export const modalSlice = createSlice({
    name,
    initialState,
    reducers: {
        openModal : (
            state,
            action: PayloadAction<{title: string, description: string, positiveText?: string, negativeText?: string, positiveAction?: ()=>void}>
        ) =>{
            state.contents.title = action.payload.title;
            state.contents.description = action.payload.description;
            state.contents.positiveText = action.payload.positiveText ?? state.contents.positiveText;
            state.contents.negativeText = action.payload.negativeText ?? state.contents.negativeText;
            state.contents.positiveAction = action.payload.positiveAction;
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