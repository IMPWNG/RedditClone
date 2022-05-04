import { configureStore } from "@reduxjs/toolkit";
import SupabaseProviderReducer from "../../api/SupabaseProvider";

export default configureStore({
  reducer: {
    provider: SupabaseProviderReducer,
  },
});
