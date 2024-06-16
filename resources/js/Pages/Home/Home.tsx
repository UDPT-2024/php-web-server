import MainLayout from "src/Layouts/MainLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import authApi from "src/apis/auth.api";
import { RatingPersonalConcert } from "../RatingPersonalConcert/RatingPersonalConcert";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const testQuery = useQuery({
        queryKey: ["test"],
        queryFn: () => authApi.test(),
    });

    const test = testQuery.data?.data;

    console.log(test);

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
        </MainLayout>
    );
};

export default Home;
