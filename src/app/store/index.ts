import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "entities/calculator/model";
import { api } from "features/submit";

export const store = configureStore({
  reducer: {
    calculatorSlice: calculatorSlice.reducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

