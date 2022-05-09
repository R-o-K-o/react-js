import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    loading: true,
    pages: null,
    prev: null,
    next: null,
    character: {},
    characters: [],
};

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({page}) => {
        const {data} = await characterService.getAll(page);
        return data;
    },
);

const getById = createAsyncThunk(
    'characterSlice/getById',
    async (id) => {
        const {data} = characterService.getById(id);
        return data;
    },
);

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state,action) => {
                state.loading = false;

                const {info:{pages, prev, next}, results} = action.payload;
                state.pages = pages;
                state.prev = prev;
                state.next = next;
                state.characters = results;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.character = action.payload;
            })
    },
});

const {reducer: characterReducer} = characterSlice;

const characterActions = {
    getAll,
    getById,
};

export {characterReducer, characterActions};