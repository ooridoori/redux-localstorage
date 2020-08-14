import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

//Load from localStorage

const loadFromLocalStorage = () => {
    //depending on the browser settings (i.e privacy mode) it wont store to local storage so we need to catch the error
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState)
    } catch (e) {
      console.log(e)
      return undefined;
    }
  }

// will overwrite existing key in rootReducer
const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

export default store;