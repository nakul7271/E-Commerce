import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [
    {
      id: "p1",
      imageUrl: "images/cartImages/cart01.jpg",
      productName: "Mobile",
      quantity: 2,
      price: 60.00,
    },
    {
      id: "p2",
      imageUrl: "images/cartImages/cart02.jpg",
      productName: "Speaker",
      quantity: 2,
      price: 60.00,
    },
    {
      id: "p3",
      imageUrl: "images/cartImages/cart03.jpg",
      productName: "Gaming Remote",
      quantity: 2,
      price: 60.00,
    },
  ],
  totalQuantity: 6,
  totalPrice: 360.00,
  change: false,
};
const initialWishlistState = {
  wishlistItems: [
    {
      id: "p1",
      imageUrl: "images/cartImages/cart01.jpg",
      productName: "Mobile",
      quantity: 2,
      price: 60,
    },
    {
      id: "p2",
      imageUrl: "images/cartImages/cart02.jpg",
      productName: "Speaker",
      quantity: 2,
      price: 60,
    },
    {
      id: "p3",
      imageUrl: "images/cartImages/cart03.jpg",
      productName: "Gaming Remote",
      quantity: 2,
      price: 60,
    },
  ],
  totalQuantity: 6,
  change: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    fetchCart(state, action) {
      state.cartItems = action.payload.cartItems || [];
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
      state.change = true;

      const found = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (found) {
        found.quantity++;
        
        return;
      }

      state.cartItems.push({
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        productName: action.payload.productName,
        quantity: action.payload.quantity,
        totalAmount: action.payload.totalAmount,
        price: action.payload.price,
      });
    },

    removeFromCart(state, action) {
      state.totalQuantity--;
      state.totalPrice -= action.payload.price;
      state.change = true;

      const found = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (found.quantity > 1) {
        found.quantity--;

        return;
      }
      state.cartItems = state.cartItems.filter((item) => {
        return item !== found;
      });
    },
    removeCartItemFully(state, action) {
      
      state.change = true;

      const found = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      
      state.totalQuantity -= found.quantity;
      state.totalPrice -= (found.quantity * found.price);

      state.cartItems = state.cartItems.filter((item) => {
        return item !== found;
      });
    },
  },
});


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    fetchWishlist(state, action) {
      state.wishlistItems = action.payload.wishlistItems || [];
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToWishlist(state, action) {
      state.totalQuantity++;
      state.change = true;

      const found = state.wishlistItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (found) {
        found.quantity++;
        return;
      }

      state.wishlistItems.push({
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        productName: action.payload.productName,
        quantity: action.payload.quantity,
        totalAmount: action.payload.totalAmount,
        price: action.payload.price,
      });
    },

    removeFromWishlist(state, action) {
      state.totalQuantity--;
      state.change = true;

      const found = state.wishlistItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (found.quantity > 1) {
        found.quantity--;

        return;
      }
      state.wishlistItems = state.wishlistItems.filter((item) => {
        return item !== found;
      });
    },
    removeWishlistItemFully(state, action) {
      
      state.change = true;

      const found = state.wishlistItems.find((item) => {
        return item.id === action.payload.id;
      });
      
      state.totalQuantity -= found.quantity ;

      state.wishlistItems = state.wishlistItems.filter((item) => {
        return item !== found;
      });
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, wishlist: wishlistSlice.reducer },
});


export const cartActions = cartSlice.actions;
export const wishlistActions = wishlistSlice.actions;

export default store;
