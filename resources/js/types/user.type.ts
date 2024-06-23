import * as yup from "yup";

export const userSchema = yup.object({
    id: yup.number(),
    email: yup
        .string()
        .matches(
            /^[A-Za-z0-9]{1,30}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,3}$/,
            "Vui lòng nhập lại địa chỉ email hợp lệ."
        )
        .required(
            "Bạn sẽ sử dụng thông tin này khi đăng nhập và khi bạn cần đặt lại mật khẩu của mình."
        ),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu của bạn")
        .min(6, "Nhập mật khẩu có ít nhất 6 ký tự.")
        .matches(/(?=.*[A-Z])/, "Mật khẩu phải có ít nhất một ký tự viết hoa.")
        .matches(/(?=.*[0-9])/, "Mật khẩu phải có ít nhất một chữ số."),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp.")
        .required("Vui lòng xác nhận mật khẩu của bạn."),
    lastName: yup.string().required("Tên của bạn là gì?"),
    firstName: yup.string().required("Họ của bạn là gì?"),
    fullName: yup
        .string()
        .required("Họ và tên của bạn là gì?")
        .min(6, "Họ và tên phải có ít nhất 6 ký tự"),
    phoneNumber: yup
        .string()
        .required("Hãy nhập số điện thoại")
        .min(10, "Số điện thoại phải có 10 chữ số")
        .max(10, "Số điện thoại phải có 10 chữ số")
        .matches(/^0[0-9]+$/, "Số điện thoại không hợp lệ"),
    gender: yup.string(),
    avatar: yup.object().shape({
        url: yup.string(),
    }),
    role: yup.string(),
    address: yup.string(),
    cmnd: yup
        .string()
        .nullable()
        .min(9, "Số CMND phải có 9 chữ số")
        .max(9, "Số CMND phải có 9 chữ số"),
    dateOfBirth: yup.date(),
    timeCreated: yup.date(),
});

export const updateInforSchema = yup.object({
    email: yup
        .string()
        .matches(
            /^[A-Za-z0-9]{1,30}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,3}$/,
            "Vui lòng nhập lại địa chỉ email hợp lệ."
        )
        .required(
            "Bạn sẽ sử dụng thông tin này khi đăng nhập và khi bạn cần đặt lại mật khẩu của mình."
        ),
    lastName: yup.string().required("Tên của bạn là gì?"),
    firstName: yup.string().required("Họ của bạn là gì?"),
    phone: yup
        .string()
        .required("Hãy nhập số điện thoại")
        .min(10, "Số điện thoại phải có 10 chữ số")
        .max(10, "Số điện thoại phải có 10 chữ số")
        .matches(/^0[0-9]+$/, "Số điện thoại không hợp lệ"),
    gender: yup.string(),
    avatar: yup.object().shape({
        url: yup.string(),
    }),
    address: yup.string(),
    cmnd: yup
        .string()
        .nullable()
        .min(9, "Số CMND phải có 9 chữ số")
        .max(9, "Số CMND phải có 9 chữ số"),
    birthday: yup
        .date()
        .max(
            new Date(2019, 1, 1),
            "Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh thật của mình nhé."
        ),
});

export type User = yup.InferType<typeof userSchema>;

export type UserInfor = Pick<
    User,
    | "email"
    | "lastName"
    | "firstName"
    | "avatar"
    | "phoneNumber"
    | "gender"
    | "role"
    | "dateOfBirth"
    | "timeCreated"
    | "address"
    | "cmnd"
>;
