import Categories from "../Categories/Categories";
import Product from "./Product";

function ProductFeed({ products, categories }) {
  // Destructure data and loading states for products and categories
  const { data: productsData, isLoading: productsIsLoading } = products;
  const { data: categoriesData, isLoading: categoriesIsLoading } = categories;

  let content = null;

  // If products are still loading, display a loading message
  if (productsIsLoading) {
    content = <p>Loading...</p>;
  }

  // If products have loaded and there are products to display, render product cards
  if (!productsIsLoading && productsData?.length > 0) {
    content = productsData?.map(
      ({
        id,
        productName,
        price,
        description,
        category,
        image,
        status,
        reviews,
        averageRating
      }) => (
        <Product
          key={`product-${id}`}
          id={id}
          productName={productName}
          price={price}
          description={description}
          category={category}
          image={image}
          reviews={reviews}
          status={status}
          averageRating={averageRating}
        />
      )
    );
  }

  return (
    <div className="w-full pb-14 px-6 mt-10" id="products-feed">
      {/* Render the Categories component with category data */}
      <Categories categories={categoriesData} />
      <h2 className="text-center text-2xl mt-20 font-semibold">
        Featured Products
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Check & Get Your Desired Product!
      </p>
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8">
        {/* Render product cards based on content */}
        {content}
      </div>
    </div>
  );
}

export default ProductFeed;
