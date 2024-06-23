import MainLayout from "src/Layouts/MainLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EventCard from "src/Components/EventCard";
import { useQuery } from "@tanstack/react-query";
import eventApi from "src/apis/event.api";
import { EventType } from "src/types/event.type";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    const getNewEvent = useQuery({
        queryKey: [`get-new-event`],
        queryFn: () => eventApi.getNewEvents(1, 10),
    });

    const insurancePlanList = getNewEvent.data?.data.value.items as EventType[];

    if (getNewEvent.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout>
            <div className="mb-20">
                <Slider {...settings}>
                    <img
                        src="https://ticketgo.vn/uploads/images/event-gallery/event_gallery-b39b89bb480cffeb3394d937525f5773.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://ticketgo.vn/uploads/images/event-gallery/event_gallery-0dc328016627513f305b38031d5b2e1e.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://ticketgo.vn/uploads/images/event-gallery/event_gallery-e40fc6fc2ae6625b8faca0e4ae7bddb6.jpg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Slider>
            </div>
            <div className="px-[130px]">
                {/* BEGIN: sự kiện nổi bật */}
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-1 h-6"></div>
                    <span className="text-2xl font-medium">
                        Sự kiện nổi bật
                    </span>
                </div>
                <div className="grid grid-cols-2 mt-4 gap-3 w-full">
                    <div className="grid gap-2">
                        <img
                            className="rounded-lg object-cover object-center cursor-pointer w-full"
                            src="https://ticketgo.vn/uploads/images/event-logo/event_logo-8f3364181c609ea9333af44549115f76.jpg"
                        ></img>
                        <div className="grid grid-cols-2 gap-2 w-full">
                            <img
                                className="rounded-lg object-cover object-center cursor-pointer"
                                src="https://ticketgo.vn/uploads/images/event-logo/event_logo-8f3364181c609ea9333af44549115f76.jpg"
                            ></img>
                            <img
                                className="rounded-lg object-cover object-center cursor-pointer"
                                src="https://ticketgo.vn/uploads/images/event-logo/event_logo-8f3364181c609ea9333af44549115f76.jpg"
                            ></img>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <img
                            className="rounded-lg object-cover object-center cursor-pointer w-full"
                            src="https://ticketgo.vn/uploads/images/event-logo/event_logo-8f3364181c609ea9333af44549115f76.jpg"
                        ></img>
                        <div className="grid grid-cols-2 gap-2 w-full">
                            <img
                                className="rounded-lg object-cover object-center cursor-pointer"
                                src="https://ticketgo.vn/uploads/images/event-logo/event_logo-8f3364181c609ea9333af44549115f76.jpg"
                            ></img>
                            <img
                                className="rounded-lg object-cover object-center cursor-pointer"
                                src="https://ticketgo.vn/uploads/images/event-logo/event_logo-8f3364181c609ea9333af44549115f76.jpg"
                            ></img>
                        </div>
                    </div>
                </div>

                {/* END: Sự kiện nổi bật */}

                {/* BEGIN: Sự kiện sắp diễn ra */}
                <div className="flex items-center gap-2 mt-10">
                    <div className="bg-primary w-1 h-6"></div>
                    <span className="text-2xl font-medium">
                        Sự kiện sắp diễn ra
                    </span>
                </div>

                <div className="mt-4 mb-10 grid grid-cols-4 w-full gap-8">
                    {insurancePlanList?.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
                    {/* {Array.from({ length: 15 }).map((_, index) => (
                        <EventCard key={index} />
                    ))} */}
                </div>
                {/* END: Sự kiện sắp diễn ra */}
            </div>
        </MainLayout>
    );
};

export default Home;
