import { SuccessResponseData } from "./utils.type";

type LoginResponseValue = {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiryTime: Date;
};

export type LoginResponse = {
    value: LoginResponseValue;
    isSuccess: boolean;
    isFailure: boolean;
    error: {
        code: string;
        message: string;
    };
};

export type Token = Pick<LoginResponseValue, "accessToken" | "refreshToken">;

export type RefreshTokenResponse = SuccessResponseData<{
    access_token: {
        token: string;
        created: string;
        expiry: number;
    };
}>;
