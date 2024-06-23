import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faAngleRight,
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "src/../../resources/assets/LOGO - light mode 2.png";

const Footer = () => {
    return (
        <div
            className="max-w-full mx-auto sm:px-4 bg-[#FF6B00] footer pt-[60px] wow fadeIn text-white"
            data-wow-delay="0.1s"
        >
            <div className="container mx-auto sm:px-4 py-5">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4">
                        <h1 className="text-white mb-4 flex items-center">
                            <img
                                className="max-w-full h-auto me-3"
                                src="src/assets/Images/icon/icon-02-light.png"
                                alt=""
                            />
                            <img src={logo} className="w-[150px]"></img>
                        </h1>
                        <p className="font-[Roboto] text-[17px] text-white ">
                            Your Ticket to Music Magic!.{" "}
                        </p>
                        <div className="flex pt-2 mt-4">
                            <button className="flex justify-center items-center bg-white border border-white w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 ml-0 group">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="text-blue-500 group-hover:text-white"
                                />
                            </button>
                            <button className="flex justify-center items-center bg-white border border-[#A7A8B4] w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 group">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="text-blue-500 group-hover:text-white"
                                />
                            </button>
                            <button className="flex justify-center items-center border bg-white border-white w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 group">
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="text-red-500 group-hover:text-white"
                                />
                            </button>
                            <button className="flex justify-center items-center border bg-white border-white w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 group">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className="text-blue-500 group-hover:text-white"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 text-white">
                        <h5 className="text-[20px] text-white font-[Poppins,sans-serif] mb-5 font-bold">
                            Địa chỉ
                        </h5>
                        <p className="font-[Roboto] text-[17px] mb-4">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="mr-2"
                            />
                            Nguyễn Văn Cừ, Quận 5, TP.Hồ Chí Minh, Việt Nam
                        </p>
                        <p className="font-[Roboto] text-[17px]  flex gap-2 items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} />
                            +84 345 678910
                        </p>
                        <p className="font-[Roboto] text-[17px]  flex gap-2 items-center ">
                            <FontAwesomeIcon icon={faEnvelope} />
                            info@example.com
                        </p>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 flex flex-col text-white">
                        <h5 className="text-[20px] text-white font-[Poppins,sans-serif] mb-5 font-bold">
                            Truy cập nhanh
                        </h5>
                        <button className="font-[Roboto] text-[17px] group flex gap-2 items-center">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="h-3 w-3"
                            />
                            <span className="btn btn-link mt-1">
                                Giới thiệu về chúng tôi
                            </span>
                        </button>
                        <button className="font-[Roboto] text-[17px]  group flex gap-2 items-center ">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="h-3 w-3 "
                            />
                            <span className="btn btn-link mt-1">
                                Liên hệ với chúng tôi
                            </span>
                        </button>
                        <button className="font-[Roboto] text-[17px]  group flex gap-2 items-center ">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="h-3 w-3 "
                            />
                            <span className="btn btn-link mt-1">
                                Dịch vụ của chúng tôi
                            </span>
                        </button>
                        <button className="font-[Roboto] text-[17px]  group flex gap-2 items-center ">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="h-3 w-3 "
                            />
                            <span className="btn btn-link mt-1">
                                Điều khoản dịch vụ
                            </span>
                        </button>
                        <button className="font-[Roboto] text-[17px]  group flex gap-2 items-center ">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="h-3 w-3 "
                            />
                            <span className="btn btn-link mt-1">Hổ trợ</span>
                        </button>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 text-white">
                        <h5 className="text-[20px] text-white font-[Poppins,sans-serif] mb-5 font-bold">
                            Liên hệ
                        </h5>
                        <p className="font-[Roboto] text-[17px]">
                            Vui lòng cung cấp email của bạn để chúng tôi có thể
                            hỗ trợ.
                        </p>
                        <div
                            className="relative mx-auto mt-3"
                            style={{ maxWidth: "400px" }}
                        >
                            <input
                                className="focus:ring-4 rounded-[10px] px-2 mb-1 text-base bg-transparent text-white border border-gray-200 w-[300px] py-4 ps-4 pe-5 placeholder:text-white"
                                type="text"
                                placeholder="Nhập email của bạn"
                            />
                            <button
                                type="button"
                                className="transition text-center border rounded-[10px] px-3 bg-[#0dd3f1] text-white hover:bg-[#015fc9] py-2 absolute top-0 end-0 mt-2 -me-3"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 max-w-full mx-auto sm:px-4 copyright">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 mb-3 md:mb-0 text-white">
                            &copy; <a href="#">The Music Concert</a>, Bản quyền
                            đã được đăng ký.
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
