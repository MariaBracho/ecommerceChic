import { createAsyncThunk } from "@reduxjs/toolkit";
import getProducts from "../../../api/getProducts";
import addProducts from "../../../api/addProduct";
import getShoppingCart from "../../../api/getShoppingCart";
import { ShoppingCartTypes } from "../../../models/FetchProduct";

export const fetchProductGroup = createAsyncThunk(
  "product/getProductGroup",
  async (_, { rejectWithValue }) => {
    try {
      return await getProducts();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchShoppingCart = createAsyncThunk(
  "product/getShoppingCart",
  async (_, { rejectWithValue }) => {
    try {
      return await getShoppingCart();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (
    { productName, price, productImg }: ShoppingCartTypes,
    { rejectWithValue }
  ) => {
    try {
      await addProducts({ productName, price, productImg });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
