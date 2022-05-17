import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    loading: true,
    error: null,
    pages: null,
    prev: null,
    next: null,
    character: {},
    characters: [],
};

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await characterService.getAll(page);
            return data;
        } catch (err) {
            return rejectWithValue({status: err.message});
        }
    },
);

const getById = createAsyncThunk(
    'characterSlice/getById',
    async ({id}) => {
        const {data} = await characterService.getById(id);
        return data;
    },
);

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {pages, prev, next}, results} = action.payload;
                state.pages = pages;
                state.prev = prev;
                state.next = next;
                state.characters = results;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                const {status} = action.payload;
                state.error = status;
                state.loading = false;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.character = action.payload;
                state.loading = false;
            })
    },
});

const {reducer: characterReducer} = characterSlice;

const characterActions = {
    getAll,
    getById,
};

export {characterReducer, characterActions};