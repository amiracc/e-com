import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedProductState {
  productId: number | null;
}

const initialState: SelectedProductState = {
  productId: null,
};

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<number>) {
      state.productId = action.payload;
    },
    clearSelectedProduct(state) {
      state.productId = null;
    },
  },
});

export const { selectProduct, clearSelectedProduct } =
  selectedProductSlice.actions;
export default selectedProductSlice.reducer;
