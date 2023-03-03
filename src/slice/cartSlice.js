import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let product = state.cart.find(
        (product) => product.Id == action.payload.Id
      );

      return product
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.Id === action.payload.Id
                ? { ...product, Cantidad: product.Cantidad + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, Cantidad: 1 }],
          };
    },

    incrementCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.Id === action.payload.Id
            ? { ...item, Cantidad: item.Cantidad + 1 }
            : item
        ),
      };
    },
    clearItem: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.Id !== action.payload.Id),
      };
    },
    clearCart: (state, action) => {
      return initialState;
    },
    GetTotals: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (acc, product) => {
          const { Precio, Cantidad } = product;
          const itemTotal = Precio * Cantidad;

          (acc.total += itemTotal), (acc.quantity += Cantidad);

          return acc;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalAmount = total.toFixed(3);
      state.cartTotalQuantity = quantity;
    },
  },
});
export const {
  addToCart,
  decrementCart,
  incrementCart,
  clearCart,
  GetTotals,
  clearItem,
} = cartSlice.actions;

export default cartSlice.reducer;
