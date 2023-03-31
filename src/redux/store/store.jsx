import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
/* import headerReducer from "../features/header/headerSlice";
 */
const store = configureStore({
    reducer: {
        user: userReducer,
        /* header: headerReducer */
    }
})


export default store;