export type ErrorResponse = {
    statusCode: number;
    errorKey: string;
    message: string;
    date: string;
};

export type SuccessResponseData<Data> = {
    data: Data;
};

export type Response = {
    isSuccess: boolean;
    isFailure: boolean;
    error: {
        code: string;
        message: string;
    };
};

export type PageResponse<Data> = {
    value: {
        items: Data[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    };
    isSuccess: boolean;
    isFailure: boolean;
    error: {
        code: string;
        message: string;
    };
};
export type DetailResponse<Data> = {
    value: Data;
    isSuccess: boolean;
    isFailure: boolean;
    error: {
        code: string;
        message: string;
    };
};
