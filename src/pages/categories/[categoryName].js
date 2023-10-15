import CategoriesProduct from "@/components/Categories/CategoriesProduct";
import React from "react";

const Category = ({ products, categoryName }) => {
  return (
    <div className={`${products?.length > 0 ? "" : "h-screen"}`}>
      {/* Render a component to display products from the specified category */}
      <CategoriesProduct products={products} categoryName={categoryName} />
    </div>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-assignment-server.vercel.app/products"
  );
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { categoryName: product.category },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  try {
    const res = await fetch(
      `https://pc-builder-assignment-server.vercel.app/products?category=${
        context.params.categoryName
      }`
    );
    const products = await res.json();

    return {
      props: {
        products,
        categoryName: context.params.categoryName,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
