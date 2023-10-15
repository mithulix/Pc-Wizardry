import BuildProduct from "@/components/BuildProduct/BuildProduct";
import { wrapper } from "@/redux/app/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import categoriesApi from "@/redux/features/categories/categoriesApi";
import { clearComponent } from "@/redux/features/pcbuild/pcbuildSlice";
import { FaArrowRight } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { Button, Modal } from "antd";
import { useState } from "react";
import Link from "next/link";
import { FaRegSadTear, FaSadTear } from "react-icons/fa";

const PcBuilder = ({ categories }) => {
  const router = useRouter();
  const pcbuild = useSelector((state) => state.pcbuild);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  // Function to handle printing the build
  const handlePrintBuild = () => {
    window.print();
  };

  const handleCompleteBuild = () => {
    handlePrintBuild();
    dispatch(clearComponent());
  };

  // Function to find the current category in the PC build
  const findCurrentCategory = (category) => {
    category = category?.replace(/\s+/g, "");
    category = category?.toLowerCase();
    return pcbuild[category];
  };


  return (
    <>
      <Head>
        <title>PC Builder</title>
      </Head>
      <div className="md:px-6">
        <main className="max-w-screen-lg flex flex-row mx-auto shadow-lg">
          <div className="sm:w-4/6 my-6 w-full shadow rounded-md">
            <div className="flex flex-col md:p-8 p-6">
              <div className="flex justify-between items-center border-b-4 border-gray-300 mb-5 pb-2">
                <h1 className="text-xl font-semibold text-gray-700">
                  PC BUILD
                </h1>
                <button
                  onClick={() => dispatch(clearComponent())}
                  className="text-gray-700 hover:text-red-500 underline"
                >
                  Clear
                </button>
              </div>
              {categories.map((category, i) => (
                <div
                  key={category?.id}
                  className="flex justify-between items-center mb-4 border-b-2 border-spacing-2"
                >
                  {findCurrentCategory(category?.name)?.name ? (
                    <BuildProduct
                      id={findCurrentCategory(category?.name)?.id}
                      productName={findCurrentCategory(category?.name)?.name}
                      price={findCurrentCategory(category?.name)?.price}
                      category={category?.name}
                      image={findCurrentCategory(category?.name)?.image}
                      border={i !== categories?.length - 1}
                    />
                  ) : (
                    <>
                      <h2>{category.name}</h2>
                      <button
                        className="button"
                        onClick={() =>
                          router.push(`/categories/${category?.name}`)
                        }
                      >
                        Select
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {pcbuild?.qty === 0 ? (
            <div className="flex  items-center justify-center px-6 lg:py-10 sm:py-6 py-4">
              <div className="text-center md:max-w-none sm:w-auto mx-auto max-w-xs w-4/5">
                <div className="lg:text-2xl text-gray-700 text-xl font-medium mt-4 flex flex-col justify-center items-center">
                  <FaRegSadTear className="w-20 h-20 my-6 text-gray-400" />
                  <span>your Build Is Empty.</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col p-6 my-10">
              <h2 className="whitespace-nowrap overflow-x-auto">
                <span>
                  Subtotal ({pcbuild?.qty} items) :
                </span>
                <span className="font-bold text-orange-500 mx-2">
                  ${pcbuild?.total}
                </span>
              </h2>
              <button
                role="link"
                className="bg-blue-500 rounded text-white mt-4 px-4 flex items-center justify-start py-2 cursor-pointer"
                onClick={handleCompleteBuild}
              >
                <span className="ml-2">Complete Build</span>
                <FaArrowRight className="sm:w-6 w-5" />
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default PcBuilder;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // Fetch categories from the API and dispatch them to the Redux store
    const categories = await store.dispatch(
      categoriesApi.endpoints.getCategories.initiate()
    );

    try {
      return {
        props: {
          categories: categories.data,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        notFound: true, 
      };
    }
  }
);


