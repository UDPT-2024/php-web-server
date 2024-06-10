import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { decryptData, encryptData } from "src/utils/utils";

import userAccountReducer from "./reducers/userAccountReducer";
import tokenReducer from "./reducers/tokenReducer";

const persistConfig = {
    key: "root", // Khóa lưu trạng thái
    storage, // Sử dụng localStorage,
    whitelist: ["userAccountReducer", "tokenReducer"],
    transforms: [
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            in: (state: any) => {
                // Mã hóa trạng thái trước khi lưu
                const encryptedState = encryptData(state);
                return encryptedState;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            out: (state: any) => {
                // Giải mã trạng thái khi khôi phục
                const decryptedState = decryptData(state);
                return decryptedState;
            },
        },
    ],
};

const rootReducer = combineReducers({
    userAccountReducer: userAccountReducer,
    tokenReducer: tokenReducer,
});

const pRootReducer = persistReducer(persistConfig, rootReducer);

export interface RootState {
    rootReducer: ReturnType<typeof pRootReducer>;
}

const store = configureStore<RootState>({
    reducer: {
        rootReducer: pRootReducer,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: (getDefaultMiddleware): any =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);
export { store, persistor };
export type AppDispatch = typeof store.dispatch;
