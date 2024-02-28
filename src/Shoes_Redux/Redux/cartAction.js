import { DECREASE_QUANTITY, INCREASE_QUANTITY } from "./constant";

export const increaseQuantity = (itemId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: itemId,
  };
};

export const decreaseQuantity = (itemId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: itemId,
  };
};
