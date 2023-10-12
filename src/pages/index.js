import Banner from "@/components/Banner/Banner";
import InfoPage from "@/components/Information/InfoPage";
import ProductFeed from "@/components/Product/ProductFeed";
import { wrapper } from "@/redux/app/store";
import categoriesApi from "@/redux/features/categories/categoriesApi";
import productApi from "@/redux/features/product/productApi";

export default function Home({ products, categories }) {
  return (
    <>
      <Banner />
      <ProductFeed products={products} categories={categories} />
      <InfoPage />
    </>
  );
}

// Fetch data from the API and provide it as props to the Home component
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const products = await store.dispatch(
    productApi.endpoints.getProducts.initiate()
  );

  // Fetch a list of categories using the categoriesApi
  const categories = await store.dispatch(
    categoriesApi.endpoints.getCategories.initiate()
  );

  return {
    props: {
      products,
      categories,
    },
  };
});
