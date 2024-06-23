import { EventDetailType, EventType } from "src/types/event.type";
import { DetailResponse, PageResponse } from "src/types/utils.type";
import http from "src/utils/http";

const URL_GET_NEW_EVENT = "/catalog-api/v1/events";

const URL_GET_DETAIL_EVENT = "/catalog-api/v1/events";

const eventApi = {
    getNewEvents: (pageIndex: number, pageSize: number) => {
        return http.get<PageResponse<EventType>>(
            `${URL_GET_NEW_EVENT}?pageIndex=${pageIndex}&pageSize=${pageSize}`
        );
    },
    getDetailEvent: (id: string) => {
        return http.get<DetailResponse<EventDetailType>>(
            `${URL_GET_DETAIL_EVENT}/${id}`
        );
    },
};

export default eventApi;
