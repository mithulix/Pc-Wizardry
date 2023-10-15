import ProductDetails from "@/components/Product/ProductDetails";
import Head from "next/head";

const ProductInfo = ({ product }) => {
  return (
    <>
      {/* Set the page title in the head based on the product name */}
      {product?.productName && (
        <Head>
          <title>{product?.productName}</title>
        </Head>
      )}
      {/* Render the ProductDetails component with product data */}
      <ProductDetails
        id={product?.id}
        productName={product?.productName}
        price={product?.price}
        description={product?.description}
        category={product?.category}
        image={product?.image}
        reviews={product?.reviews}
        status={product?.status}
        keyFeatures={product?.keyFeatures}
        individualRating={product?.individualRating}
        averageRating={product?.averageRating}
      />
    </>
  );
};

export default ProductInfo;

// This function generates paths for pre-rendering product pages
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-assignment-server.vercel.app/products"
  );
  const products = await res.json();
  // Create an array of path objects, each with a productId parameter
  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths, // An array of paths to pre-render
    fallback: true, // Show fallback UI while generating pages
  };
};

// This function fetches data for a specific product page
export const getStaticProps = async (context) => {
  try {
    const res = await fetch(
      `https://pc-builder-assignment-server.vercel.app/products/${context.params.productId}`
    );
    const product = await res.json();

    return {
      props: {
        product, // Pass the product data as props to the component
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true, // Show a 404 page if there's an error
    };
  }
};
