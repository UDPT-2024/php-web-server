import "./bootstrap";
import "../css/app.css";
import "react-toastify/dist/ReactToastify.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import AppProvider from "./contexts/app.context";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-tailwind/react";

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

//custom material-tailwind theme
const theme = {
    dialog: {
        styles: {
            base: {
                backdrop: {
                    backgroundColor: "bg-[#f3f3f4]",
                    backgroundOpacity: "bg-opacity-80",
                    backdropFilter: "",
                },
                container: {
                    fontFamily: "ui-sans-serif",
                    color: "",
                },
            },
            sizes: {
                xs: {
                    width: "",
                    minWidth: "",
                    maxWidth: "",
                },
                sm: {
                    width: "w-full md:w-2/3 lg:w-2/4 2xl:w-1/3",
                    minWidth:
                        "min-w-[80%] md:min-w-[66.666667%] lg:min-w-[10%] 2xl:min-w-[10%]",
                    maxWidth:
                        "max-w-[80%] md:max-w-[66.666667%] lg:max-w-[33.3%] 2xl:max-w-[28%]",
                },
            },
        },
    },
    dialogBody: {
        defaultProps: {
            className: "",
            divider: false,
        },
        styles: {
            base: {
                initial: {
                    color: "",
                    fontSmoothing: "antialiased",
                    fontFamily: "ui-sans-serif",
                    fontWeight: "font-normal",
                    lineHeight: "leading-relaxed",
                },
            },
        },
    },
    dialogFooter: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                fontSmoothing: "antialiased",
                fontFamily: "font-sans",
                fontSize: "text-base",
                fontWeight: "font-light",
                lineHeight: "leading-relaxed",
                flexShrink: "shrink",
            },
        },
    },
    input: {
        styles: {
            base: {
                container: {
                    position: "relative",
                    width: "w-full",
                    minWidth: "min-w-[100px]",
                },
            },
        },
    },
    cardBody: {
        styles: {
            base: {
                p: "p-4",
            },
        },
    },
    menu: {
        styles: {
            base: {
                menu: {
                    minWidth: "min-w-[50px]",
                },
            },
        },
    },
    select: {
        styles: {
            base: {
                container: {
                    minWidth: "min-w-[50px]",
                },
            },
        },
    },
    tab: {
        styles: {
            base: {
                tab: {
                    initial: {
                        width: "w-full",
                        height: "h-full",
                        position: "relative",
                        bg: "bg-transparent",
                        py: "",
                        px: "",
                        color: "text-blue-gray-900",
                        fontSmoothing: "antialiased",
                        fontFamily: "font-sans",
                        fontSize: "text-base",
                        fontWeight: "font-normal",
                        lineHeight: "leading-relaxed",
                        userSelect: "select-none",
                        cursor: "cursor-pointer",
                    },
                },
            },
        },
    },
    tabsHeader: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                display: "flex",
                position: "relative",
                bg: "bg-blue-gray-50",
                bgOpacity: "bg-opacity-60",
                borderRadius: "rounded-lg",
                p: "p-1",
            },
            horizontal: {
                flexDirection: "flex-row",
            },
            vertical: {
                flexDirection: "flex-col",
            },
        },
    },

    breadcrumbs: {
        styles: {
            base: {
                item: {
                    initial: {
                        hover: "hover:text-primary",
                    },
                },
                separator: {
                    color: "text-white",
                    zIndex: "z-10",
                },
            },
        },
    },
};

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
                                <ThemeProvider value={theme}>
                                    <App {...props} />
                                </ThemeProvider>

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
