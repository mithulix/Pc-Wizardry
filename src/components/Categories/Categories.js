import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div>
      {/* Section: Featured Categories Heading */}
      <div className="flex flex-col justify-center items-center pb-8">
        <h2 className="text-2xl font-semibold"> Featured Categories </h2>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>

      {/* Section: Categories List */}
      <div className="flex flex-wrap justify-center sm:justify-start sm:mb-12 gap-4 mx-auto">
        {categories?.map((category, i) => (
          <div
            key={`category-${i}`}
            className={`p-[1rem] text-xl border font-medium sm:px-6 bg-white text-center whitespace-nowrap rounded  linkGlobals shadow-sm sm:shadow`}
          >
            <Link href={`/categories/${category?.name}`}>
              <span> {category?.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
