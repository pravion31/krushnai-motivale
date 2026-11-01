import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.items.find(item => item.id === action.payload.id)) return state;
      return { ...state, items: [...state.items, action.payload] };

    case 'REMOVE_FROM_WISHLIST':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };

    case 'TOGGLE_WISHLIST': {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
      }
      return { ...state, items: [...state.items, action.payload] };
    }

    case 'CLEAR_WISHLIST':
      return { ...state, items: [] };

    case 'LOAD_WISHLIST':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

const initialState = { items: [] };

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('krushnai_wishlist');
      if (saved) dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(saved) });
    } catch {
      console.error('Error loading wishlist from localStorage');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('krushnai_wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addToWishlist = (product) =>
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });

  const removeFromWishlist = (id) =>
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });

  const toggleWishlist = (product) =>
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product });

  const clearWishlist = () => dispatch({ type: 'CLEAR_WISHLIST' });

  const isInWishlist = (id) => state.items.some(item => item.id === id);

  const wishlistCount = state.items.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: state.items,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};

export default WishlistContext;
