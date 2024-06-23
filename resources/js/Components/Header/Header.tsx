import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    Card,
    CardBody,
    Input,
    Typography,
} from "@material-tailwind/react";
import ProfileMenu from "./components/ProfileMenu";
import HeaderNavList from "./components/HeaderNavList";
import { Link } from "@inertiajs/react";
// import images from "src/assets/images";
// import { AppContext } from "src/contexts/app.context";
import { clearLS } from "src/utils/auth";
import { useQuery } from "@tanstack/react-query";
import {
    faArrowLeft,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import path from "path";

const headerPath = [
    {
        name: "Trang chủ",
        path: "/",
    },
    {
        name: "Sự kiện",
        path: "/event",
    },
    {
        name: "Hỗ trợ",
        path: "/support",
    },
    {
        name: "Liên hệ",
        path: "/register",
    },
];

function Header() {
    const [openNav, setOpenNav] = useState(false);

    const currentPath = window.location.pathname;
    //   const { isAuthenticated, setIsAuthenticated, profile, setProfile } = useContext(AppContext)

    //   const { data: data } = useQuery({
    //     queryKey: ['cart', profile?.cart_id],
    //     queryFn: () => cartApi.getCart(),
    //     keepPreviousData: false,
    //     enabled: isAuthenticated
    //   })

    //   const CartProduct = data?.data.data.cart_products

    //   const handleLogout = () => {
    //     setIsAuthenticated(false)
    //     setProfile(null)
    //     clearLS()
    //   }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <>
            <Navbar className="sticky inset-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link href="/" className="flex cursor-pointer items-center">
                        <span className="hidden md:block">
                            <img
                                src="https://www.october16th.store/assets/logo-3c597220.png"
                                alt="logo"
                                className="h-12 w-12 object-contain "
                            />
                        </span>
                        <div className="text-center">
                            <span className="font-sigmar !mb-0 text-sm text-black">
                                The Music
                            </span>
                            <h1 className="text-orange-500 !mb-0 -mt-2 text-xl">
                                Concert
                            </h1>
                        </div>
                    </Link>

                    <nav className="flex justify-between relative flex-wrap items-center content-between py-3 px-4 bg-transparent text-black -ml-[200px]">
                        <button
                            type="button"
                            className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded xl:hidden"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="px-5 py-1 border border-gray-600 rounded "></span>
                        </button>
                        <div className="my-0" id="navbarCollapse">
                            <div className="flex justify-center items-center gap-6 bg-blue-gray-100/30 rounded px-6 py-3 lg:py-[10px]">
                                {headerPath.map((item, index) => (
                                    <Link
                                        href={item.path}
                                        key={index}
                                        className={` inline-block font-medium hover:text-primary ${
                                            currentPath === item.path
                                                ? "text-primary"
                                                : "text-black"
                                        } `}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">
                            <HeaderNavList
                            // listCartProduct={
                            //     CartProduct as CartProductType[]
                            // }
                            // isAuthenticated={isAuthenticated}
                            />
                        </div>
                        {/* {!isAuthenticated && (
                            <div className="hidden gap-2 lg:flex">
                                <Link to={routes.login}>
                                    <Button
                                        variant="text"
                                        size="sm"
                                        color="blue-gray"
                                    >
                                        Đăng nhập
                                    </Button>
                                </Link>
                                <Link to={routes.register}>
                                    <Button variant="gradient" size="sm">
                                        Đăng kí
                                    </Button>
                                </Link>
                            </div>
                        )} */}

                        <div className="hidden gap-2 lg:flex">
                            <Link href="/">
                                <Button
                                    variant="text"
                                    size="sm"
                                    color="blue-gray"
                                >
                                    Đăng Ký
                                </Button>
                            </Link>
                            <Link href={route("login")}>
                                <Button
                                    variant="gradient"
                                    color="orange"
                                    size="sm"
                                >
                                    Đăng Nhập
                                </Button>
                            </Link>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                        {/* {isAuthenticated && (
                            <ProfileMenu
                                avatarUrl={
                                    profile?.avatar?.url
                                        ? profile.avatar.url
                                        : images.avatar
                                }
                                handleLogout={handleLogout}
                            />
                        )} */}
                    </div>
                </div>
                {/* <Collapse open={openNav}>
                    <HeaderNavList
                        listCartProduct={CartProduct as CartProductType[]}
                        isAuthenticated={isAuthenticated}
                    />
                    {!isAuthenticated && (
                        <div className="hidden gap-2 lg:flex">
                            <Link to={routes.login}>
                                <Button
                                    variant="text"
                                    size="sm"
                                    color="blue-gray"
                                >
                                    Đăng nhập
                                </Button>
                            </Link>
                            <Link to={routes.register}>
                                <Button variant="gradient" size="sm">
                                    Đăng kí
                                </Button>
                            </Link>
                        </div>
                    )}
                </Collapse> */}
            </Navbar>
        </>
    );
}

export default Header;
