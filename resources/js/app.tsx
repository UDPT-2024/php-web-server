import "./bootstrap";
import "../css/app.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import AppProvider from "./contexts/app.context";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

// Tắt tự động fetch api khi focus vào window
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0,
        },
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            createRoot(el).render(
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            <AppProvider>
                                <App {...props} />
                                <ToastContainer />
                            </AppProvider>
                        </PersistGate>
                    </Provider>
                </QueryClientProvider>
            );
            return;
        }

        hydrateRoot(el, <App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
