import React, { useReducer } from "react";
import { useRouter } from "next/router";

const initialState = {
  outfitPictureUrl: null,
  selectedPartId: null,
  parts: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setOutfitPictureUrl":
      return { ...state, outfitPictureUrl: action.payload };
    case "setSelectedPartId":
      return { ...state, selectedPartId: action.payload };
    case "setParts":
      return { ...state, parts: action.payload };
    default:
      return { ...state };
  }
};

const StateContext = React.createContext(initialState);

const useRedirection = state => {
  const router = useRouter();
  if (typeof window === "undefined") return;
  if (!state.outfitPictureUrl && router.route !== "/outfit-picker") {
    router.push("/outfit-picker");
  } else if (
    state.outfitPictureUrl &&
    !state.selectedPartId &&
    router.route !== "/part-picker"
  ) {
    router.push("/part-picker");
  } else if (
    state.outfitPictureUrl &&
    state.selectedPartId &&
    router.route !== "/cart"
  ) {
    router.push("/cart");
  }
};

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useRedirection(state);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
