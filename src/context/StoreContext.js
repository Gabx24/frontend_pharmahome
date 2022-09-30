import { createContext, useReducer } from "react";
export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      // add to cart
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload],
        },
      };
    case "INCREASE_PRODUCT":
      return {
        ...state,
        cart: {
          cartItems: state.cart.cartItems.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        },
      };

    /* 
      const decrease = (sku) =>
    setCart((prev) => {
      const article = prev.find((item) => item.sku === sku);
      return article && article.qty === 1
        ? prev.filter((item) => item.sku !== article.sku)
        : prev.map((item) =>
            item.sku === sku ? { ...item, qty: item.qty - 1 } : item
          );
    });
      */
    case "DECREASE_PRODUCT":
      const article = state.cart.cartItems.find(
        (item) => action.payload === item.id
      );
      let cartItems = [];
      if (article && article.quantity === 1) {
        cartItems = state.cart.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        cartItems = state.cart.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return {
        ...state,
        cart: {
          cartItems,
        },
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: {
          cartItems: state.cart.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children}</Store.Provider>;
}

export default StoreProvider;
