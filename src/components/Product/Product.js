import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import { Rate } from "antd";

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
        <span className=" flex justify-center">
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
        <span className=" font-bold text-gray-700">$ {price}</span>
        <button className="linkGlobals text500Globals">
          <span
            onClick={() => router.push(`/product-details/${id}`)}
            className="flex justify-center items-center underline">
            Get Details
          </span>
        </button>
      </div>
    </div>
  );
}

export default Product;
