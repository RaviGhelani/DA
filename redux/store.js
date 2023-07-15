import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./slices/playerSlice";
import guildSlice from "./slices/guildSlice";

const combineReducer = {
  // auth: authSlice,
  // customer: customerSlice,
  // products: productSlice,
  // voucher: voucherSlice,
  // company: companySlice,
  // benifits: benifitsSlice,
  guild: guildSlice,
  players: playersSlice,
};

export default configureStore({
  reducer: combineReducer,
});
