import { type AxiosError, isAxiosError, HttpStatusCode } from "axios";
import { ErrorResponse } from "src/types/utils.type";
import { AES, enc } from "crypto-js";

// Kiểm tra lỗi 400
export function isAxiosBadRequestError<FormError>(
    error: unknown
): error is AxiosError<FormError> {
    return (
        isAxiosError(error) &&
        error.response?.status === HttpStatusCode.BadRequest
    );
}

// Kiểm tra lỗi 500
export function isAxiosInternalServerError<FormError>(
    error: unknown
): error is AxiosError<FormError> {
    return (
        isAxiosError(error) &&
        error.response?.status === HttpStatusCode.InternalServerError
    );
}

// Kiểm tra lỗi không xác thực
export function isAxiosUnauthorizedError<FormError>(
    error: unknown
): error is AxiosError<FormError> {
    return (
        isAxiosError(error) &&
        error.response?.status === HttpStatusCode.Unauthorized
    );
}

// Kiểm tra lỗi token hết hạn
export function isAxiosExpiredTokenError<FormError>(
    error: unknown
): error is AxiosError<FormError> {
    return (
        isAxiosUnauthorizedError<ErrorResponse>(error) &&
        error.response?.data.errorKey === "TokenIsExpired"
    );
}

// Hàm định dạng ngày
export const formatDate = (date: string) => {
    const _date = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };
    const formattedDate = _date.toLocaleDateString("en-GB", options);

    return formattedDate;
};

// Hàm định dạng ngày giờ
export const formatDateTime = (date: string) => {
    const now = new Date(date);

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
};

// Hàm định dạng số
export const formatNumber = (num: number) => {
    return Intl.NumberFormat("en-DE").format(num);
};

// Hàm chuyển đổi giây thành phút
export function secondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Hàm giải mã Base64
export function decodeBase64(encodedString: string): string {
    try {
        const decodedString = atob(encodedString);
        return decodedString;
    } catch (error) {
        console.error("Error decoding Base64:", error);
        return ""; // Trả về chuỗi trống nếu có lỗi
    }
}

// Hàm mã hóa chuỗi sang Base64
export function encodeBase64(inputString: string): string {
    try {
        const encodedString = btoa(inputString);
        return encodedString;
    } catch (error) {
        console.error("Error encoding Base64:", error);
        return ""; // Trả về chuỗi trống nếu có lỗi
    }
}

// Hàm mã hóa dữ liệu
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encryptData = (data: any) => {
    const ciphertext = AES.encrypt(
        JSON.stringify(data),
        import.meta.env.VITE_SECRET_KEY as string
    );
    return ciphertext.toString();
};

// Hàm giải mã dữ liệu
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decryptData = (encryptedData: any) => {
    const bytes = AES.decrypt(
        encryptedData,
        import.meta.env.VITE_SECRET_KEY as string
    );
    const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
    return decryptedData;
};

// Hàm tính tuổi
export const calAge = (birthday: string) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};
