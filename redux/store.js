import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./slices/playerSlice";

const combineReducer = {
  // auth: authSlice,
  // customer: customerSlice,
  // products: productSlice,
  // voucher: voucherSlice,
  // company: companySlice,
  // benifits: benifitsSlice,
  // proposals: proposalsSlice,
  players: playersSlice,
};

export default configureStore({
  reducer: combineReducer,
});
