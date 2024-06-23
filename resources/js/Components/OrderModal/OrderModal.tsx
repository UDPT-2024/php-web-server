import {
    faCircleExclamation,
    faMinus,
    faPlus,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Checkbox,
} from "@material-tailwind/react";

import momoLogo from "src/../assets/momo.png";
import vnpayLogo from "src/../assets/vnpay.png";
import { useFormik } from "formik";
import { useState } from "react";
import { userSchema } from "src/types/user.type";
import CustomInput from "../CustomInput";
interface OrderModelProps {
    open: boolean;
    handleOpen: () => void;
}

export const OrderModal = ({ open, handleOpen }: OrderModelProps) => {
    const [openPopoverFullName, setOpenPopoverFullName] =
        useState<boolean>(false);
    const [openPopoverPhone, setOpenPopoverPhone] = useState<boolean>(false);
    const [openPopoverEmail, setOpenPopoverEmail] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState("momo");

    const handleSelectPaymentMethod = (method: string) => {
        setPaymentMethod(method);
    };

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
        },
        initialTouched: {
            fullName: false,
            email: false,
            phone: false,
        },
        validationSchema: userSchema,
        onSubmit: async (data) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            // await signupMutation.mutate(info);
            console.log(data);
        },
    });

    const handleOrderButton = () => {
        window.location.href = "/momo-payment/100";
    };

    return (
        <Dialog
            size="xs"
            className="w-[1250px]"
            open={open}
            handler={handleOpen}
        >
            <DialogHeader className="border-b">
                <div className="w-full flex justify-center">
                    <span className="text-[20px] text-[#050505] font-bold">
                        MUA VÉ
                    </span>
                </div>

                <div className="absolute w-full flex justify-end -ml-8">
                    <IconButton
                        color="blue-gray"
                        className="h-9 w-9 bg-[#e4e6eb] rounded-full hover:bg-[#d8dadf] p-4"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </IconButton>
                </div>
            </DialogHeader>
            <DialogBody className="grid grid-flow-col gap-8 overflow-y-auto max-h-[600px]">
                <div className="col-span-2 min-w-[380px]">
                    {/* BEGIN: THông tin khách hàng */}
                    <div className="flex items-center gap-2">
                        <div className="bg-primary w-1 h-5"></div>
                        <span className="text-[14px] font-semibold">
                            THÔNG TIN KHÁCH HÀNG / CUSTOMER INFORMATION
                        </span>
                    </div>
                    <form
                        id="form-order"
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col gap-4 mt-4"
                    >
                        {/* full name */}
                        <CustomInput
                            type="text"
                            openPopoverError={openPopoverFullName}
                            setOpenPopoverError={setOpenPopoverFullName}
                            formik={formik}
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            label="Họ tên"
                            id="fullName"
                            boxArrow="arrow_box-left"
                            name="fullName"
                        />
                        {/* email */}
                        <CustomInput
                            type="text"
                            openPopoverError={openPopoverEmail}
                            setOpenPopoverError={setOpenPopoverEmail}
                            formik={formik}
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            label="Email"
                            id="my-email"
                            boxArrow="arrow_box-left"
                            name="email"
                        />
                        {/* phone */}
                        <CustomInput
                            type="text"
                            openPopoverError={openPopoverPhone}
                            setOpenPopoverError={setOpenPopoverPhone}
                            formik={formik}
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            label="Số điện thoại"
                            id="my-phone"
                            name="phone"
                            boxArrow="arrow_box-left"
                        />
                    </form>
                    {/* END: THông tin khách hàng */}

                    {/* BEGIN: phương thức thanh toán */}
                    <div className="flex items-center gap-2 mt-4">
                        <div className="bg-primary w-1 h-5"></div>
                        <span className="text-[14px] font-semibold">
                            LỰA CHỌN THANH TOÁN / PAYMENT METHOD
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 p-4">
                        <button
                            onClick={() => handleSelectPaymentMethod("momo")}
                            className={`${
                                paymentMethod === "momo"
                                    ? "bg-primary text-white"
                                    : ""
                            } rounded-md w-full h-[60px] border-2 cursor-pointer flex items-center px-10 gap-3 border-gray-300`}
                        >
                            <img src={momoLogo} className="h-8" />
                            <span>Ví Momo/ Momo Wallet</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSelectPaymentMethod("vnpay")}
                            className={`${
                                paymentMethod === "vnpay"
                                    ? "bg-primary text-white"
                                    : ""
                            } rounded-md w-full h-[60px] border-2  cursor-pointer flex items-center px-10 border-gray-300 gap-3`}
                        >
                            <img src={vnpayLogo} className="h-8" />
                            <span> Ví Vnpay/ Vnpay Wallet</span>
                        </button>
                    </div>
                    <span className="text-[14px]">
                        <FontAwesomeIcon
                            icon={faCircleExclamation}
                            className="text-primary mr-2"
                        />
                        Lưu ý: Sản phẩm điện tử sẽ được gửi ngay sau khi giao
                        dịch thanh toán thành công.
                    </span>
                    {/* END: phương thức thanh toán */}
                </div>
                <div className="col-span-10">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary w-1 h-5"></div>
                        <span className="text-[14px] font-semibold">
                            GIỎ HÀNG CỦA BẠN / SHOPPING CART
                        </span>
                    </div>

                    <div className="mt-4">
                        <div className="bg-primary text-white h-7 rounded-md grid w-full grid-cols-[270px_130px_170px_175px] px-4 mb-2">
                            <span>Loại vé</span>
                            <span>Số lượng</span>
                            <span>Đơn giá</span>
                            <span></span>
                        </div>

                        {Array.from({ length: 5 }).map((_, index) => (
                            <div className="bg-blue-gray-100/30 grid w-full grid-cols-[270px_130px_170px_175px] px-4 py-6 rounded-md items-center mt-2">
                                <span>Hạng vé STANDARD</span>
                                <span>50</span>
                                <span>300.000 VNĐ</span>
                                <div
                                    color="blue-gray"
                                    className="font-meidum flex items-center"
                                >
                                    <div className="flex w-fit items-center rounded border border-gray-700">
                                        <button
                                            className="rounded-0 flex items-center gap-3 p-2 py-1 hover:rounded hover:bg-[rgb(184,72,68)] bg-[rgb(217,83,79)]"
                                            // onClick={handleMinusButton}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <div className="border-x border-gray-700 px-3 w-20 flex justify-center">
                                            {/* {quantityOrder} */}
                                            <span>0</span>
                                        </div>
                                        <button
                                            className="flex items-center gap-3 p-2 py-1 hover:rounded hover:bg-blue-700 bg-blue-500"
                                            // onClick={handlePlusButton}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="mt-4">
                            <label htmlFor="promo-code">
                                Mã giảm giá / Promo Code:
                            </label>
                            <br />
                            <input
                                id="promo-code"
                                type="text"
                                className="border border-gray-300 rounded-l-md w-[200px] h-8 px-2 focus:outline-blue-500"
                            />
                            <button
                                onClick={handleOpen}
                                type="button"
                                className="transition text-[14px] text-center border px-3 bg-primary text-white hover:bg-green-500 py-1 rounded-r-md"
                            >
                                Áp dụng / Apply
                            </button>
                        </div>

                        <div className="grid grid-flow-col grid-cols-12 mt-4 border px-3 py-1 border-gray-300 items-center">
                            <span className="col-span-8">Tổng cộng/ Total</span>
                            <span className="col-span-4 text-primary font-bold text-end border-l border-gray-300">
                                0 VNĐ
                            </span>
                        </div>

                        <div className="mt-4 flex items-center">
                            <Checkbox
                                color="orange"
                                defaultChecked
                                crossOrigin={undefined}
                            />
                            <div className="text-[14px]">
                                Tôi đồng ý với các{" "}
                                <span className="text-primary cursor-pointer font-bold">
                                    Điều khoản & Chính sách của The music
                                    concert
                                </span>{" "}
                            </div>
                        </div>

                        <button
                            onClick={handleOrderButton}
                            type="button"
                            className="transition text-[14px] text-center border px-3 bg-primary text-white hover:bg-green-500 py-1 rounded-md w-full"
                        >
                            Tiếp tục thanh toán / Continues
                        </button>

                        <button
                            onClick={handleOpen}
                            type="button"
                            className="transition text-[14px] text-center border px-3 bg-gray-200 text-black py-1 rounded-md w-full mt-2"
                        >
                            Đóng / Close
                        </button>
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    );
};

export default OrderModal;
