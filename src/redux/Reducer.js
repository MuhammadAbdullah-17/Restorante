import { LEADERS } from "../Data/leaders";
import { PROMOTIONS } from "../Data/promotions";
import { DISHES } from "../Data/dishes";
import { COMMENTS } from "../Data/comments";

export const initialState = {
  comments: COMMENTS,
  dishes: DISHES,
  leaders: LEADERS,
  promotions: PROMOTIONS,
};
export const Reducer = (state = initialState, action) => {
  return state;
};
