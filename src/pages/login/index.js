import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import Image from "next/image";
import brandIcon from "../../../public/images/brandIcon.svg";
import { signIn } from "next-auth/react";

const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Head>
                <title>Login to PC Builder</title>
            </Head>
            <div className="p-20 m-5 bg-white shadow-lg rounded-xl">
                <div className="flex items-center justify-center pb-4">
                    <Image
                        width={80}
                        height={80}
                        src={brandIcon}
                        alt="Brand Icon"
                    />
                </div>
                <h3 className="text-3xl text-gray-700 pb-10 font-bold">
                    PC Builder Login
                </h3>
                <div className="flex flex-col gap-4">
                    <div
                        onClick={() =>
                            signIn("google", { callbackUrl: "/" })
                        }
                        className="flex items-center linkGlobals gap-4 border-2 rounded-full px-4 py-2 cursor-pointer"
                    >
                        <GoogleOutlined />
                        <span>Login with Google</span>
                    </div>
                    <div
                        onClick={() =>
                            signIn("github", { callbackUrl: "/" })
                        }
                        className="flex items-center linkGlobals gap-4 border-2 rounded-full px-4 py-2 cursor-pointer"
                    >
                        <GithubOutlined />
                        <span>Login with GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
