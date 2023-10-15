import Product from "../Product/Product";

function CategoriesProduct({ products, categoryName }) {
  return (
    <div className="w-full pb-20 px-6" id="products-feed">
      {/* Section: Category Name */}
      <h2 className="text-center capitalize text-xl font-semibold mb-10">
        {categoryName}
      </h2>

      {/* Section: Product Grid */}
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8">
        {products?.map(
          ({
            id,
            productName,
            price,
            description,
            category,
            image,
            status,
            averageRating,
          }) => (
            // Individual Product Card
            <Product
              key={`product-${id}`}
              id={id}
              productName={productName}
              price={price}
              description={description}
              category={category}
              image={image}
              status={status}
              averageRating={averageRating}
            />
          )
        )}
      </div>
    </div>
  );
}

export default CategoriesProduct;
