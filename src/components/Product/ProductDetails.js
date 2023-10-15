import Image from "next/image";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addComponent } from "@/redux/features/pcbuild/pcbuildSlice";
import { useSession } from "next-auth/react";
import { Rate } from "antd";
import { useGetReviewQuery } from "../../redux/features/product/productApi";
import { useState } from "react";
import { Button, Modal } from "antd";

function ProductDetails({
  id,
  productName,
  price,
  description,
  category,
  status,
  image,
  keyFeatures,
  individualRating,
  averageRating,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { data: reviews } = useGetReviewQuery(id, {
    pollingInterval: 3000,
  });
  const reviewsData = reviews?.data?.reviews;

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to open the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Function to add the product to a build
  const addItemToBuild = () => {
    if (!session?.user?.email) {
      showModal();
    } else {
      dispatch(
        addComponent({
          id,
          name: productName,
          price,
          category,
          image,
        })
      );
      router.push("/pc-builder");
    }
  };

  return (
    <div className="px-6 lg:py-16 md:py-14 py-12">
      <div className="max-w-screen-xl flex items-center mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-6 gap-8">
          {router.isFallback ? (
            // Display a loading skeleton when data is loading
            <Skeleton width={400} height={400} />
          ) : (
            <div className="mx-auto">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          )}
          <div className="flex-grow xl:max-w-2xl lg:max-w-xl  md:max-w-md">
            {router.isFallback ? (
              // Display a loading skeleton for product details
              <Skeleton count={12} />
            ) : (
              <>
                <h3 className="font-medium xl:text-3xl lg:text-3xl text-2xl mb-2">
                  {productName}
                </h3>
                <div className="flex gap-x-5 items-center mt-4">
                  <div className="font-normal bg-gray-200 p-2 rounded-full px-4">
                    <span>
                      Status:
                    </span>
                    <span>{status}</span>
                  </div>
                  <div className="font-normal bg-gray-200 p-2 rounded-full px-4">
                    <span>
                      Category:
                    </span>
                    <span>{category}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-medium mb-2 mt-4">
                    Price: <span className="text-orange-500">{price}$</span>
                  </p>
                  <h3 className="text-xl mt-4 mb-2 font-medium">
                    Key Features :
                  </h3>
                  <ul className="list-decimal list-inside">
                    {keyFeatures.map((feature, i) => (
                      <li key={i}>
                        <span>
                          {feature.keyName}:
                        </span>
                        <span>{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-justify text-sm lg:text-base my-6">
                  {description}
                </p>

                <div className="flex mt-auto whitespace-nowrap items-center justify-between">
                  {/* ratings */}
                  <div>
                    <div className="flex items-center h-8">
                      <p className="text-sm font-bold">Individual Rating: </p>
                      <Rate
                        disabled
                        defaultValue={individualRating}
                        allowHalf
                        className="pl-2 pb-1 text-xs md:text-[1rem] text-orange-500"
                      />
                    </div>
                    <div className="flex items-center h-8">
                      <p className="text-sm font-bold">Average Rating: </p>
                      <Rate
                        disabled
                        defaultValue={averageRating}
                        allowHalf
                        className="pl-2 pb-1 text-xs md:text-[1rem] text-orange-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="linkGlobals text500Globals">
                      <button
                        onClick={addItemToBuild}
                        className="button px-4 flex justify-center items-center">
                        Add to Build
                        <FaArrowRight className="ml-2 w-3" />
                      </button>
                    </span>
                  </div>
                </div>

                {/* reviews  */}
                <div>
                  <h1 className=" mt-[5rem] md:pt-0 md:pb-2 text-lg md:text-xl underline underline-offset-4">
                    Recent reviews
                  </h1>
                  {reviews?.map((review) => (
                    <>
                      <div className="flex items-center justify-start w-full gap-2">
                        <div className="flex flex-col justify-center items-start w-12">
                          <div className="avatar">
                            <div className="w-6 h-6 rounded-full">
                              <Image
                                height={100}
                                width={100}
                                layout="responsive"
                                src="/favicon.ico"
                                alt="user image"
                              />
                            </div>
                          </div>
                          <p className="font-serif text-[12px] md:text-[14px]">
                            {review?.username}
                          </p>
                        </div>
                        <p className="font-serif pb-5 max-w-4xl">{review?.comment}</p>
                      </div>
                      <hr className="w-full" />
                    </>
                  ))}
                </div>

              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="Sign In Required"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="signin" className="linkGlobals text500Globals" onClick={() => router.push("/api/auth/signin")}>
            Sign In
          </Button>,
        ]}
      >
        Please Sign In to add items to your build.
      </Modal>
    </div>
  );
};

export default ProductDetails;
