import { legacy_createStore as createStore, combineReducers } from "redux";
import { Comments } from "./Comments";
import { Dishes } from "./Dishes";
import { Leaders } from "./Leaders";
import { Promotions } from "./Promotions";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
    })
  );
  return store;
};
