import Head from "next/head";
import Link from "next/link";
import { FcBrokenLink } from "react-icons/fc";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="flex items-center mt-[3rem] pt-[2rem] justify-center">
        <div className="max-w-screen-md w-full mx-4 sm:mx-auto p-8 rounded bg-white shadow-lg">
          <div className="sm:mb-10 mb-6 text-center">
            <h1 className="flex items-center justify-center font-extrabold my-4 text-6xl text-blue-600">
              4 <FcBrokenLink className="mx-4" /> 4
            </h1>
            <p className="text-xl font-medium text-gray-700">
              Oops! The page you&rsquo;re looking for is missing.
            </p>
            <p className="text-xl font-medium text-gray-700">
              But don&rsquo;t worry, you can go back to our{" "}
              <Link href={"/"} className="text-blue-500 underline">
                homepage
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
