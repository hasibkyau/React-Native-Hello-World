import { rootReducer } from "./reducer";
import { createStore } from "redux";
import { exp } from "react-native/Libraries/Animated/Easing";

const store = createStore(rootReducer);

export default store;