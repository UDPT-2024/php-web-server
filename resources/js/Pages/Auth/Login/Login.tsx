import {
    Button,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import authApi from "src/apis/auth.api";
// import userAccountApi from "src/apis/userAccount.api";
import { AppContext } from "src/contexts/app.context";
import { setUserAccountAction } from "src/redux/actions/userAccountAction";
import { toast } from "react-toastify";
import { encodeBase64, isAxiosBadRequestError } from "src/utils/utils";
import { ErrorResponse } from "src/types/utils.type";
import { Link } from "@inertiajs/react";

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Login = () => {
    const queryClient = useQueryClient();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setIsAuthenticated } = useContext(AppContext);

    const signInAccountMutation = useMutation({
        mutationFn: (body: { email: string; password: string }) =>
            authApi.logIn(body),
    });

    //gọi api lấy thông tin user
    // const profileQuery = useQuery({
    //     queryKey: ["profile"],
    //     queryFn: () => userAccountApi.getUserInfor(),
    //     enabled: signInAccountMutation.isSuccess,
    //     onSuccess: (data) => {
    //         const profile = data.data;
    //         dispatch(setUserAccountAction(profile));
    //         setIsAuthenticated(true);
    //         if (profile.role === "ROLE_ADMIN") {
    //             navigate(routes.dashboard);
    //         } else {
    //             navigate(routes.home);
    //         }
    //     },
    //     onError: (error) => {
    //         console.log(error);
    //     },
    // });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: async (data) => {
            await signInAccountMutation.mutate(data, {
                onSuccess: (data) => {
                    // Khi login thành công thì sẽ gọi api get profile
                    // Query key của hàm invalidateQueries match với query key của useQuery trên => Gọi API trên
                    // queryClient.invalidateQueries({
                    //     queryKey: ["profile"],
                    // });

                    console.log(data.data);
                },
                onError: () => {
                    toast.error("Tài khoản hoặc mật khẩu không đúng", {
                        autoClose: 2000,
                    });
                },
            });
        },
    });

    return (
        <div>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="mb-10 flex flex-col justify-center items-center gap-2 place-items-center mt-10"
            >
                <Typography variant="h4" className="text-[#0c2964]">
                    WELLCOME
                </Typography>
                <span className="text-[#0c2964]">
                    Đăng Nhập Vào{" "}
                    <button className="text-orange-400">
                        The Music Concert
                    </button>
                </span>
            </CardHeader>
            <CardBody className="mb-6">
                <form
                    id="form-login"
                    className="flex flex-col gap-4"
                    onSubmit={formik.handleSubmit}
                >
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        color="blue"
                        label="Email"
                        size="lg"
                        crossOrigin={undefined}
                        required
                    />
                    <Input
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        color="blue"
                        label="Mật khẩu"
                        size="lg"
                        crossOrigin={undefined}
                        type="password"
                        required
                    />
                </form>
                <div className="flex justify-end mt-2">
                    <Link
                        href="/forgot-password"
                        className="text-[13px] text-orange-400"
                    >
                        Quên mật khẩu ?
                    </Link>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                {/* {!profileQuery.isInitialLoading && (
                    <Button
                        form="form-login"
                        type="submit"
                        variant="gradient"
                        color="blue"
                        className="text-lg leading-5"
                        fullWidth
                    >
                        Đăng nhập
                    </Button>
                )} */}
                <Button
                    form="form-login"
                    type="submit"
                    variant="gradient"
                    color="orange"
                    className="text-lg leading-5"
                    fullWidth
                >
                    Đăng nhập
                </Button>
            </CardFooter>
        </div>
    );
};

export default Login;
