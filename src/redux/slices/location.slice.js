import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {locationService} from "../../services";

const initialState = {
    loading: true,
    error: null,
    pages: null,
    prev: null,
    next: null,
    location: {},
    locations: [],
};

const getAll = createAsyncThunk(
    'locationSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await locationService.getAll(page);
            return data;
        } catch (err) {
            return rejectWithValue({status: err.message});
        }
    },
);

const getById = createAsyncThunk(
    'locationSlice/getById',
    async ({id}) => {
        const {data} = await locationService.getById(id);
        return data;
    },
);

const locationSlice = createSlice({
    name: 'locationSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info:{pages, prev, next}, results} = action.payload;
                state.pages = pages;
                state.prev = prev;
                state.next = next;
                state.locations = results;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                const {status} = action.payload;
                state.error = status;
                state.loading = false;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.location = action.payload;
            })
    }
});

const {reducer: locationReducer} = locationSlice;

const locationAction = {
    getAll,
    getById,
};

export {locationReducer, locationAction};