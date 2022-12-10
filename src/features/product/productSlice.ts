import { createSlice } from "@reduxjs/toolkit";
import { InitialStateTypes } from "../../shared/interfaces/FetchProduct";
import { fetchProductGroup, addProduct, fetchShoppingCart } from "./thunk";
import { FetchStatus } from "../../shared/enums/fetchStatus";

const initialState: InitialStateTypes = {
  status: FetchStatus.IDLE,
  products: [],
  cartList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // get products
    builder
      .addCase(fetchProductGroup.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchProductGroup.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchProductGroup.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.products = [];
      });
    // add product
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.status = FetchStatus.SUCCEEDED;
      })
      .addCase(addProduct.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.cartList = [];
      });
    // get shopping cart
    builder
      .addCase(fetchShoppingCart.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchShoppingCart.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.cartList = action.payload;
      })
      .addCase(fetchShoppingCart.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.cartList = [];
      });
  },
});

export default productSlice.reducer;
