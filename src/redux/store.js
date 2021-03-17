import thunk from "redux-thunk";
import reducer from "./reducers";
const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
  ...reducer,
}
const store = configureStore({
  reducer: reducer,
  middleware: [thunk]
});


export default store;
