import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Slider from "react-slick";
import EventCard from "src/Components/EventCard";
import Litepicker from "src/Components/Litepicker";
import TomSelect from "src/Components/TomSelect";
import MainLayout from "src/Layouts/MainLayout";
import bg1 from "src/../assets/bg1.jpg";
import { random } from "lodash";
import { useQuery } from "@tanstack/react-query";
import eventApi from "src/apis/event.api";
import { EventType } from "src/types/event.type";

const citiesWithConcerts = [
    "Tất cả địa điểm",
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Đà Lạt",
    "Nha Trang",
    "Hải Phòng",
    "Huế",
    "Vũng Tàu",
    "Biên Hòa",
    "Buôn Ma Thuột",
];

const listImage = [
    "https://ticketgo.vn/uploads/images/event-gallery/event_gallery-81bfd4587d9e63870c89d5f71ba3b2f7.png",
    "https://st.ielts-fighter.com/src/ielts-fighter-image/2023/01/09/5e6dbb91-3dab-4500-9a28-b9599aa12949.png",
    "https://statics.vinpearl.com/da-lat-ve-dem-1_1701780759.jpg",
    "https://toquoc.mediacdn.vn/280518851207290880/2023/7/15/ngam-khung-canh-hoang-hon-cuc-lang-man-tai-ho-tay-21-1689399620801208229820.jpg",
];

const EventConcert = () => {
    const [select, setSelect] = useState("1");
    const [daterange, setDaterange] = useState("");

    const getNewEvent = useQuery({
        queryKey: [`get-new-event`],
        queryFn: () => eventApi.getNewEvents(1, 10),
    });

    const insurancePlanList = getNewEvent.data?.data.value.items as EventType[];
    return (
        <MainLayout>
            <div
                style={{ backgroundImage: `url(${listImage[random(0, 3)]})` }}
                className={`z-[0] !absolute bg-cover bg-center bg-no-repeat h-64 w-full`}
            ></div>

            <div className="px-[130px] ">
                <Breadcrumbs className=" z-[9]">
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
                </Breadcrumbs>

                {/* BEGIN: search, filter */}
                <div className="flex justify-center mt-20">
                    <div className="z-[9] flex justify-center items-center bg-white mt-2 mb-6 shadow-lg p-4 rounded-md w-[960px] border-2 border-orange-500">
                        {/* BEGIN: Basic Select */}
                        <div className="">
                            <TomSelect
                                value={select}
                                onChange={setSelect}
                                options={{
                                    placeholder: "Nhập địa điểm",
                                }}
                                className="w-[400px] "
                            >
                                {citiesWithConcerts.map((city, index) => (
                                    <option key={index} value={index + 1}>
                                        {city}
                                    </option>
                                ))}
                            </TomSelect>
                        </div>
                        {/* END: Basic Select */}
                        <Litepicker
                            value={daterange}
                            onChange={setDaterange}
                            options={{
                                autoApply: false,
                                singleMode: false,
                                numberOfColumns: 2,
                                numberOfMonths: 2,
                                showWeekNumbers: true,
                                lang: "vi",
                                dropdowns: {
                                    minYear: 1990,
                                    maxYear: null,
                                    months: true,
                                    years: true,
                                },
                            }}
                            className="block w-56 mx-auto h-10 text-[16px] text-center border z-[99]"
                        />

                        <Button color="orange">
                            <FontAwesomeIcon
                                className="mr-1"
                                icon={faMagnifyingGlass}
                            />
                            Tìm kiếm
                        </Button>
                    </div>
                </div>
                {/* END: search, filter */}

                {/* BEGIN: Sự kiện sắp diễn ra */}
                <div className="flex items-center gap-2 mt-20">
                    <div className="bg-primary w-1 h-6"></div>
                    <span className="text-2xl font-medium">Tất cả sự kiện</span>
                </div>

                <div className="mt-4 mb-10 grid grid-cols-4 w-full gap-8">
                    {insurancePlanList?.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
                </div>
                {/* END: Sự kiện sắp diễn ra */}
            </div>
        </MainLayout>
    );
};

export default EventConcert;
