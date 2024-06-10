import http from "src/utils/http";
import { LoginResponse } from "src/types/auth.type";
// import { User } from 'src/types/user.type'
import { SuccessResponse } from "src/types/utils.type";
import { User } from "src/types/user.type";

export const URL_SIGNUP = "authenticate/signup";
export const URL_LOGIN = "/identity-api/v1/auth/customer/sign-in";
export const URL_REFRESH_TOKEN = "authenticate/refresh-token";
const URL_CONFIRM = "authenticate/confirm";
const URL_RESEND = "authenticate/resend";

const authApi = {
    test: () => {
        return http.get<SuccessResponse>("authenticate/test");
    },
    // signUp: (body: Pick<User, 'email' | 'password' | 'lastName' | 'firstName' | 'phone' | 'birthday'>) => {
    //   return http.post<SuccessResponse>(URL_SIGNUP, body)
    // },
    logIn: (body: Pick<User, "email" | "password">) => {
        return http.post<LoginResponse>(URL_LOGIN, body);
    },
    // confirmAccount: (body: { email: string; code: string }) => {
    //   return http.post<SuccessResponse>(URL_CONFIRM, body)
    // },
    // resendConfirmCode: (email: string) => {
    //   return http.post<SuccessResponse>(`${URL_RESEND}` + '?email=' + email)
    // },
    // forgotPassword: (email: string) => {
    //   return http.post<SuccessResponse>(`authenticate/forgot-password?email=${email}`)
    // },
    // confirmForgotPassword: (body: { email: string; code: string }) => {
    //   return http.post<SuccessResponse>(`authenticate/confirm-forgot-code`, body)
    // }
};

export default authApi;
