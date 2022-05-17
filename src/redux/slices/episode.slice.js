import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeService} from "../../services";

const initialState = {
    loading: true,
    error: null,
    pages: null,
    prev: null,
    next: null,
    episode: {},
    episodes: [],
};

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data;
        } catch (err) {
            return rejectWithValue({status: err.message});
        }
    },
);

const getById = createAsyncThunk(
    'episodeSlice/getById',
    async ({id}) => {
        const {data} = await episodeService.getById(id);
        return data;
    },
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {pages, prev, next}, results} = action.payload;
                state.pages = pages;
                state.prev = prev;
                state.next = next;
                state.episodes = results;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                const {status} = action.payload;
                state.error = status;
                state.loading = false;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.episode = action.payload;
            })
    }
});

const {reducer: episodeReducer} = episodeSlice;

const episodeActions = {
    getAll,
    getById,
};

export {episodeReducer, episodeActions};