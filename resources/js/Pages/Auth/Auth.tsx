import Login from "src/Pages/Auth/Login";
import Register from "src/Pages/Auth/Register";
import {
    Card,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";

import logo from "src/../assets/LOGO - light mode 2.png";
import bg1 from "src/../assets/bg1.jpg";
import { useState } from "react";

const Auth = () => {
    const data = [
        {
            label: "Đăng nhập",
            value: "login",
            body: <Login />,
        },
        {
            label: "Đăng ký",
            value: "register",
            body: <Register />,
        },
    ];

    console.log("re-render");

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-white">
            <div
                className="bg-[#ebf0f4] flex-1 h-full flex flex-col justify-center items-center rounded-br-[50px] gap-4 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg1})`,
                }}
            >
                <span className="hidden md:block">
                    <img src={logo} />
                </span>
                <div className="text-center">
                    <span className="font-sigmar !mb-0 text-xl text-black">
                        Tạo Ra Kỷ Niệm, Kết Nối Cảm Xúc
                    </span>
                    <h1 className="text-white !mb-0 -mt-2 text-2xl">
                        Mua Vé - Sống Trọn Đam Mê!
                    </h1>
                </div>
            </div>

            <div
                className={`w-2/5 h-full bg-[#ee6f09] flex justify-center items-center`}
            >
                <div className="w-full h-full bg-white flex justify-center items-center rounded-tl-[50px]">
                    <div
                        className={`transition-[height] duration-150 ease-in-out shadow-lg`}
                    >
                        <Tabs value="login">
                            <TabsHeader className="bg-orange-300">
                                {data.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody className="">
                                <Card className="w-96">
                                    {data.map(({ value, body }) => (
                                        <TabPanel key={value} value={value}>
                                            {body}
                                        </TabPanel>
                                    ))}
                                </Card>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Auth;
