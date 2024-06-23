export type EventType = {
    id: string;
    name: string;
    description: string;
    logoImage: string;
    status: string;
    startedOnUtc: string;
    endedOnUtc: string;
    publishedOnUtc: string;
    eventType: string;
    capacity: number;
    isDeleted: boolean;
};

export type EventDetailType = {
    id: string;
    name: string;
    description: string;
    categoryName: string;
    eventType: string;
    organizationName: string;
    logoImage: string;
    layoutImage: string;
    status: string;
    startedOnUtc: string;
    endedOnUtc: string;
    publishedOnUtc: string;
    capacity: number;
    meetUrl: string;
    addrees: string | null;
    district: string;
    city: string;
    country: string;
    tickets: [];
};
