import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addComponent } from "@/redux/features/pcbuild/pcbuildSlice";
import { useSession } from "next-auth/react";
import { Button, Modal } from "antd"; 
import { FaArrowRight } from "react-icons/fa6";

function Product({
  id,
  productName,
  price,
  description,
  category,
  status,
  image,
  averageRating
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to open the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Function to handle the "Add to Build" button click
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
    <div className="relative flex flex-col bg-white z-20 md:p-6 p-4 rounded shadow-lg">
      <p className="absolute top-2 right-3 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        alt=""
        objectFit="contain"
        className="cursor-pointer"
        onClick={() => router.push(`/product-details/${id}`)}
      />
      <h4 className="my-3 linkGlobals font-medium">
        <Link href={`/product-details/${id}`}>{productName}</Link>
      </h4>
      <p className="text-xs line-clamp-2 text-gray-500 linkGlobals">
        <Link href={`/product-details/${id}`}>{description}</Link>
      </p>
      <div className="flex pt-2 items-center justify-between">
        <span className="flex justify-center">
          {...Array(averageRating)
            .fill()
            .map((_, i) => (
              <AiFillStar
                key={i}
                className="text-sm text-orange-500"
              />
            ))}
        </span>

        <span className="font-normal text-gray-700">
          {status}
        </span>
      </div>

      <div className="flex py-2 mt-auto line-clamp-2 whitespace-nowrap items-center justify-between">
        <span className="font-bold text-gray-700">$ {price}</span>
        <button
          className="px-2 text-white  rounded bg-orange-500 hover:bg-orange-400 flex justify-center items-center"
          onClick={addItemToBuild}
        >
          Add to Build <span className="pl-1 text-sm"><FaArrowRight /></span>
        </button>
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
}

export default Product;
