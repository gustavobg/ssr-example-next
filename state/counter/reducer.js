import {COUNTER} from "./types";

export default function counter(state = 0, action) {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return state + 1;
    case COUNTER.DECREMENT:
      return state - 1;
    default:
      return state
  }
}