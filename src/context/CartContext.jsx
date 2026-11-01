import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.id === action.payload.id && item.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'LOAD_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

const initialState = { items: [] };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('krushnai_cart');
      if (savedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
      }
    } catch {
      console.error('Error loading cart from localStorage');
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem('krushnai_cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product, variant = 'Standard', quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, variant, quantity },
    });
  };

  const removeFromCart = (id, variant = 'Standard') => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, variant } });
  };

  const updateQuantity = (id, variant = 'Standard', quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const isInCart = (id, variant = 'Standard') =>
    state.items.some(item => item.id === id && item.variant === variant);

  const getItemQuantity = (id, variant = 'Standard') => {
    const item = state.items.find(i => i.id === id && i.variant === variant);
    return item ? item.quantity : 0;
  };

  const cartTotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = state.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export default CartContext;
