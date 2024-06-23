import {
    faCalendarDays,
    faClock,
    faLocationDot,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react";
import { Breadcrumbs } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import OrderModal from "src/Components/OrderModal";
import MainLayout from "src/Layouts/MainLayout";
import eventApi from "src/apis/event.api";
import { EventDetailType } from "src/types/event.type";
import { formatDate, getTime } from "src/utils/utils";

const EventDetail = () => {
    const { eventId } = usePage().props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const getDetailEvent = useQuery({
        queryKey: [eventId],
        queryFn: () => eventApi.getDetailEvent(eventId as string),
    });

    const event = getDetailEvent.data?.data.value as EventDetailType;

    if (getDetailEvent.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <MainLayout>
                <Breadcrumbs className=" z-[9] absolute w-fit bg-transparent">
                    <Link
                        href="/"
                        className="opacity-90 flex gap-2 text-white hover:text-primary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Trang chủ
                    </Link>
                    <Link
                        href="/event"
                        className="opacity-90 text-white hover:text-primary"
                    >
                        <span>Sự kiện</span>
                    </Link>
                    <Link
                        href={`/event/${eventId}`}
                        className="opacity-90 text-white hover:text-primary"
                    >
                        <span>{event.name}</span>
                    </Link>
                </Breadcrumbs>
                <div className="flex justify-center">
                    <img className="center w-full" src={event.logoImage} />
                </div>
                <div className="px-[130px] ">
                    {/* BEGIN: thông tin chung*/}
                    <div className="w-full h-[200px] bg-white mt-10 rounded-md shadow-md flex justify-between px-6 py-4">
                        <div className="flex flex-col gap-4">
                            <span className="text-2xl font-bold text-center block">
                                {event.name}
                            </span>
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faClock}
                                />
                                <span className="text-xl block">
                                    {getTime(event.startedOnUtc)}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faCalendarDays}
                                />
                                <span className="text-xl block">
                                    {formatDate(event.startedOnUtc)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faLocationDot}
                                />
                                <span className="text-xl block">
                                    {event.addrees +
                                        ", " +
                                        event.district +
                                        ", " +
                                        event.city}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col w-[300px] justify-between">
                            <button
                                onClick={handleOpen}
                                type="button"
                                className="transition text-2xl text-center border rounded-[10px] px-3 bg-primary text-white hover:bg-green-500 py-2"
                            >
                                Mua Ngay / Buy Now
                                <FontAwesomeIcon
                                    className="text-white ml-2"
                                    icon={faPaperPlane}
                                />
                            </button>
                            <div className="text-[14px] text-center">
                                Liên hệ bộ phận chăm sóc khách hàng
                                <br /> Email:{" "}
                                <span className="font-bold">
                                    ticketgo.vn@gmail.com
                                </span>
                                <br /> Vui lòng gọi:{" "}
                                <span className="font-bold">
                                    08.999.80.818 - 0243.788.00.99
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* END: thông tin giá */}

                    {/* BEGIN: thông tin giá */}
                    <div className="w-full min-h-[100px] bg-white mt-4 rounded-md shadow-md flex flex-col items-center px-6 py-4">
                        <div className="text-xl text-primary font-medium">
                            THÔNG TIN GIÁ VÉ
                        </div>

                        <div className="flex flex-col justify-between w-full mt-4 gap-2 text-white">
                            <div className="bg-primary h-8 w-full cursor-pointer flex justify-between items-center px-2">
                                <div>
                                    <FontAwesomeIcon
                                        className="text-white mr-2"
                                        icon={faPaperPlane}
                                    />{" "}
                                    Hạng vé Star
                                </div>
                                <span>250.000 VNĐ</span>
                            </div>

                            <div className="bg-primary h-8 w-full cursor-pointer flex justify-between items-center px-2">
                                <div>
                                    <FontAwesomeIcon
                                        className="text-white mr-2"
                                        icon={faPaperPlane}
                                    />{" "}
                                    Hạng vé Star
                                </div>
                                <span>250.000 VNĐ</span>
                            </div>

                            <div className="bg-primary h-8 w-full cursor-pointer flex justify-between items-center px-2">
                                <div>
                                    <FontAwesomeIcon
                                        className="text-white mr-2"
                                        icon={faPaperPlane}
                                    />{" "}
                                    Hạng vé Star
                                </div>
                                <span>250.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                    {/* END: thông tin giá */}

                    {/* BEGIN: thông tin chi tiết*/}
                    <div className="w-full min-h-[100px] bg-white mt-4 rounded-md shadow-md flex flex-col items-center px-6 py-4">
                        <div className="text-xl text-primary font-medium">
                            THÔNG TIN CHI TIẾT
                        </div>
                        <div className="mt-4">
                            Tháng sáu, tháng của những tiếng ve khắc khoải, của
                            nhành bằng lăng tím, của những con mưa mùa hè hối hả
                            chợt đến, chợt đi như những tháng năm tuổi trẻ chẳng
                            thể kéo dài mãi. Trong không gian đầy cảm xúc ấy,
                            xin hân hạnh mang đến Quý khán thính giả chương
                            trình minishow Tình em là đại dương với sự góp mặt
                            của ca sỹ Duy Mạnh và Lương Bích Hữu. Một minishow
                            được hứa hẹn mang lại một bữa tiệc âm nhạc lắng đọng
                            và chữa lành tâm hồn giữa không gian mát mẻ và thanh
                            khiết giữa rừng thông cổ thụ của Harmony Hill Tuần
                            Châu.
                            <span className="text-primary font-bold">
                                Sơ đồ chỗ ngồi sự kiện
                            </span>
                            <img src={event.layoutImage} />
                        </div>
                    </div>
                    {/* END: thông tin chi tiết */}

                    {/* BEGIN: thông tin đơn vị tổ chức*/}
                    <div className="w-full min-h-[100px] bg-white mt-4 rounded-md shadow-md flex flex-col items-center px-6 py-4">
                        <div className="text-xl text-primary font-medium">
                            THÔNG TIN ĐƠN VỊ TỔ CHỨC
                        </div>
                        <div className="mt-4">
                            Tháng sáu, tháng của những tiếng ve khắc khoải, của
                            nhành bằng lăng tím, của những con mưa mùa hè hối hả
                            chợt đến, chợt đi như những tháng năm tuổi trẻ chẳng
                            thể kéo dài mãi. Trong không gian đầy cảm xúc ấy,
                            xin hân hạnh mang đến Quý khán thính giả chương
                            trình minishow Tình em là đại dương với sự góp mặt
                            của ca sỹ Duy Mạnh và Lương Bích Hữu. Một minishow
                            được hứa hẹn mang lại một bữa tiệc âm nhạc lắng đọng
                            và chữa lành tâm hồn giữa không gian mát mẻ và thanh
                            khiết giữa rừng thông cổ thụ của Harmony Hill Tuần
                            Châu.
                        </div>
                    </div>
                    {/* END: thông tin đơn vị tổ chức */}

                    {/* BEGIN: sự kiện liên quan*/}
                    <div className="w-full min-h-[100px] bg-white mt-4 rounded-md shadow-md flex flex-col items-center px-6 py-4 mb-10">
                        <div className="text-xl text-primary font-medium">
                            SỰ KIỆN LIÊN QUAN
                        </div>
                        <div className="mt-4">
                            Tháng sáu, tháng của những tiếng ve khắc khoải, của
                            nhành bằng lăng tím, của những con mưa mùa hè hối hả
                            chợt đến, chợt đi như những tháng năm tuổi trẻ chẳng
                            thể kéo dài mãi. Trong không gian đầy cảm xúc ấy,
                            xin hân hạnh mang đến Quý khán thính giả chương
                            trình minishow Tình em là đại dương với sự góp mặt
                            của ca sỹ Duy Mạnh và Lương Bích Hữu. Một minishow
                            được hứa hẹn mang lại một bữa tiệc âm nhạc lắng đọng
                            và chữa lành tâm hồn giữa không gian mát mẻ và thanh
                            khiết giữa rừng thông cổ thụ của Harmony Hill Tuần
                            Châu.
                        </div>
                    </div>
                    {/* END: sự kiện liên quan */}
                </div>
            </MainLayout>

            <OrderModal open={open} handleOpen={handleOpen} />
        </>
    );
};

export default EventDetail;
