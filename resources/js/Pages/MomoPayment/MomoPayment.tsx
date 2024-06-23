import momoLogo from "src/../assets/momo.png";
import momoPayment from "src/../assets/momo-payment-fake.png";
import logo from "src/../assets/LOGO - light mode 2.png";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { time } from "console";

function secondsToMinutesAndSeconds(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
}

const MomoPayment = () => {
    let countdown: any; // Đối tượng để theo dõi bộ đếm
    let remainingTime: number = 600; // Thời gian còn lại trong giây
    let counting = false; // Trạng thái bộ đếm (đang đếm hay không)
    const [isCounting, setIsCounting] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    function startCountdown() {
        const timeBoxMinutes = document.getElementById("time-box-minutes");
        const timeBoxSeconds = document.getElementById("time-box-seconds");
        if (!counting) {
            counting = true;
            setIsCounting(true);
            countdown = setInterval(function () {
                remainingTime--;
                // Cập nhật giao diện của button
                if (remainingTime > 0) {
                    const { minutes, seconds } =
                        secondsToMinutesAndSeconds(remainingTime);
                    // Cập nhật văn bản trên button
                    timeBoxMinutes!.textContent =
                        minutes < 10 ? "0" + minutes : minutes.toString();
                    timeBoxSeconds!.textContent = seconds.toString();
                } else {
                    // Dừng bộ đếm và khôi phục trạng thái ban đầu
                    clearInterval(countdown);
                    counting = false;
                    setIsCounting(false);
                    // yourButtonElement.textContent = "Resend";
                }
            }, 1000); // Cứ mỗi giây làm cập nhật
        }
    }

    useEffect(() => {
        startCountdown();
    }, [isLoading]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Thời gian chờ là 3 giây

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <header className="w-full h-[70px] shadow-lg flex gap-4 px-[200px] items-center">
                <img
                    src={momoLogo}
                    alt="momo-logo"
                    className="w-[45px] h-[45px]"
                ></img>
                <div className="text-[16px]">Cổng thanh toán MoMo</div>
            </header>

            {isLoading ? (
                <div className="flex flex-col w-full justify-center items-center h-[620px]">
                    <div className="loader"></div>
                    <div className="mt-8">Đang tải dữ liệu giao dịch</div>
                </div>
            ) : (
                <div className="flex justify-center items-center py-[30px] gap-[30px]">
                    <div className="flex flex-col justify-center gap-4 w-[283px]">
                        <div className="flex flex-col h-[400px] border border-gray-300 rounded-md px-8 py-4">
                            <span className="text-xl font-bold">
                                Thông tin đơn hàng
                            </span>
                            <span className="font-thin text-gray-600 text-[15px] mt-[18px]">
                                Nhà cung cấp
                            </span>
                            <div className="flex items-center mt-2 gap-2 pb-4 border-b border-gray-300">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-[40px] h-[40px] border"
                                />
                                <span className="font-semibold">
                                    {" "}
                                    Công Ty TNHH The Music Concert
                                </span>
                            </div>

                            <span className="font-thin text-gray-600 text-[15px] mt-4">
                                Mã đơn hàng
                            </span>
                            <span className="font-bold pb-4 border-b border-gray-300">
                                TICKETGO26990
                            </span>

                            <span className="font-thin text-gray-600 text-[15px] mt-4">
                                Mô tả
                            </span>
                            <div className="font-bold pb-4 border-b border-gray-300 ">
                                <Tooltip
                                    className="w-[400px] bg-[rgba(0,0,0,0.8)] text-white"
                                    content="Bán vé Liveshow Tình em là đại dương | Duy
                                    Manh - Lương Bích Hữu "
                                >
                                    <span className="h-auto max-h-[26px] line-clamp-1 break-words">
                                        Bán vé Liveshow Tình em là đại dương |
                                        Duy Manh - Lương Bích Hữu
                                    </span>
                                </Tooltip>
                            </div>

                            <span className="font-thin text-gray-600 text-[15px] mt-4">
                                Số tiền
                            </span>
                            <span className="text-3xl">500.000đ</span>
                        </div>
                        <div className="h-[123px] bg-[#FFF0F6] rounded-md flex flex-col items-center py-3">
                            <span className="text-[#c3177d]/90">
                                Đơn hàng sẽ hết hạn sau:
                            </span>
                            <div className="mt-3 flex gap-[14px] text-[#d82d8b]">
                                <div className="w-[44px] h-[62px] bg-[rgb(243,212,230)] rounded-md flex flex-col items-center justify-center">
                                    <span
                                        id="time-box-minutes"
                                        className="font-bold"
                                    ></span>
                                    <span className="text-[13px]">Phút</span>
                                </div>

                                <div className="w-[44px] h-[62px] bg-[rgb(243,212,230)] rounded-md flex flex-col items-center justify-center">
                                    <span
                                        id="time-box-seconds"
                                        className="font-bold"
                                    ></span>
                                    <span className="text-[13px]">Giây</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute text-center w-[283px] bottom-[70px]">
                            <Link href="/event">
                                <button className="text-[#c3177d] font-bold">
                                    Quay về
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[597px] h-[532px] rounded-md bg-[#D8198A] flex justify-center items-center">
                        <img
                            className="w-[590px] h-[525px]"
                            src={momoPayment}
                        ></img>
                        <div className=" w-[250px] h-[250px] absolute -mt-[58px]">
                            <div className="scan"></div>
                        </div>
                    </div>
                </div>
            )}

            <footer
                id="footer"
                className="h-[105px] bg-[#F9F9F9] mt-4 px-[200px] py-4 flex justify-between text-[14px] border-t border-gray-300"
            >
                <span className="text-[#727272]">
                    © 2023 - Cổng thanh toán MoMo
                </span>
                <div className="flex flex-col gap-3 w-[333px]">
                    <span className="text-[#727272]">Hỗ trợ khách hàng:</span>
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                        <a className="text-blue-500 ml-2" href="tel:1900545441">
                            1900 54 54 41 (1000đ/phút)
                        </a>
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a className="text-blue-500 ml-2" href="tel:1900545441">
                            hotro@momo.vn
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default MomoPayment;
