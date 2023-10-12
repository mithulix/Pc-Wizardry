import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <Head>
                <title>Next Login</title>
            </Head>
            <div>
                <h3>LOGIN</h3>
                <div className=" flex  justify-center">
                    <GoogleOutlined onClick={() => signIn("google", {
                        callbackUrl: "http://localhost:3000/",
                    })} />
                    <GithubOutlined onClick={() => signIn("github", {
                        callbackUrl: "http://localhost:3000/",
                    })} />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;