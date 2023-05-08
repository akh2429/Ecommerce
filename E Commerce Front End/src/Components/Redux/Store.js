import { createStore } from "redux";
import Reducer from "./ReducerFunction";

const store = createStore(Reducer);

export default store;