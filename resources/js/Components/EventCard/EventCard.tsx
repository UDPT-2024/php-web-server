import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { EventType } from "src/types/event.type";
import { getDay, getMonth, getYear } from "src/utils/utils";

interface EventCardProps {
    event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
    return (
        <Link href={`/event/${event.id}`}>
            <div className="w-[290px] group cursor-pointer transition-transform duration-300 transform hover:scale-110">
                <div className="border border-white rounded-b-lg h-[86px] w-[66px] flex flex-col justify-center items-center absolute text-white ml-4 mt-[2px] bg-[rgba(5,6,8,0.2)]">
                    <span className="text-[12px]">
                        Tháng {getMonth(event.startedOnUtc)}
                    </span>
                    <span className="text-[37px] font-semibold leading-10">
                        {getDay(event.startedOnUtc)}
                    </span>
                    <span className="text-[12px]">
                        {getYear(event.startedOnUtc)}
                    </span>
                </div>

                <div className="border border-gray-400 rounded-b-lg">
                    <img className="h-[145px]" src={event.logoImage} />
                    <div className="h-10 flex items-center ">
                        <div className="flex-1 border-r border-red-500 text-center">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                color="#FF6B00"
                            />{" "}
                            Tp.Hồ Chí Minh
                        </div>

                        <div className="flex-1 text-center text-primary">
                            250.000 <span className="text-xs">VNĐ</span>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="text-xs ml-1"
                            />
                        </div>
                    </div>
                </div>
                <span className="w-full text-center mt-1 font-bold text-[15px] group-hover:text-primary h-auto max-h-[26px] line-clamp-1 break-words">
                    {event.name}
                </span>
            </div>
        </Link>
    );
};

export default EventCard;
