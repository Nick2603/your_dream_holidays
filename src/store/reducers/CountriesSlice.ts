import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/fetchStatus",
  async () => {
    const response = await axios.get("http://localhost:8080/countries");
    return response.data;
  }
);

interface ICountryState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  countries: readonly string[];
  error: null | SerializedError;
}

const initialState: ICountryState = {
  loading: "idle",
  countries: [],
  error: null,
};

export const CountriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.countries = action.payload;
          state.error = null;
        }
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

export default CountriesSlice.reducer;
