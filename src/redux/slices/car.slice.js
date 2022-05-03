import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    loading: true,
    status: null,
    formErrors: {},
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (err) {
            return rejectWithValue({status: err.message, formErrors: err.response.data})
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'load';
        },
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = 'completed';
            state.cars = action.payload;
        },
        [getAll.rejected]: (state) => {
            state.status = 'error';
        },

        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload);
        },
        [create.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors;
        },
    },
});

const {reducer: carReducer, actions: {}} = carSlice;

const carActions = {
    getAll,
    create,
};

export {carReducer, carActions};

