import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const LoginPage = () => {
    return (
        <div className="sm:mt-[5rem] flex flex-col justify-center items-center">
            <Head>
                <title>Next Login</title>
            </Head>
            <div className="bg-white p-4 shadow-md sm:min-w-[400px]  rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4 text-center">Login</h3>
                <div className="flex flex-col gap-4 p-10 ">
                    <div
                        onClick={() =>
                            signIn("google", {
                                callbackUrl: "http://localhost:3000/",
                            })
                        }
                        className="flex text-emerald-500 hover:text-emerald-700 cursor-pointer  p-2 justify-center items-center rounded-lg hover:shadow-md border transition duration-300">
                        <span className="text-2xl px-3">
                            Login with Google
                        </span>
                        <button>
                            <GoogleOutlined className="text-2xl px-3 flex justify-center items-center" />
                        </button>
                    </div>

                    <div
                        onClick={() =>
                            signIn("github", {
                                callbackUrl: "http://localhost:3000/",
                            })
                        }
                        className="flex text-indigo-500 hover:text-indigo-700 cursor-pointer p-2 justify-center items-center rounded-lg hover:shadow-md border transition duration-300">
                        <span className="text-2xl px-3">
                        Login with Github
                        </span>
                        <button>
                            <GithubOutlined className="text-2xl px-3 flex justify-center items-center" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
