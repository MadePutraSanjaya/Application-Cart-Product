import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '@/types/products.type';
import Cookies from 'js-cookie';

interface CartState {
  products: IProduct[];
}

const getInitialCartState = (): CartState => {
  const cookieCart = Cookies.get('cart');
  if (cookieCart) {
    try {
      return JSON.parse(cookieCart) as CartState;
    } catch (e) {
      console.error('Failed to parse cart cookie:', e);
    }
  }
  return { products: [] };
};

const initialState: CartState = getInitialCartState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.products.push(action.payload);
        Cookies.set('cart', JSON.stringify(state), { expires: 7 });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      Cookies.set('cart', JSON.stringify(state), { expires: 7 });
    },
    clearCart: (state) => {
      state.products = [];
      Cookies.remove('cart');
    },
    setCart: (state, action: PayloadAction<CartState>) => {
      state.products = action.payload.products;
    },
  },
});

export const { addProduct, removeProduct, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
