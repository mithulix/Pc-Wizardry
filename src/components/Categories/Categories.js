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
      <div className="flex flex-wrap justify-center sm:justify-start sm:mb-12 gap-4 mx-auto text-sm font-medium">
        {categories?.map((category, i) => (
          <div
            key={`category-${i}`}
            className={`py-2 px-4 sm:px-6 bg-white text-center whitespace-nowrap rounded text-500Globals linkGlobals shadow-sm sm:shadow`}
          >
            <Link href={`/categories/${category?.name}`}>
              <div className="icon-container">
                <span
                  className="w-16 h-16"
                  dangerouslySetInnerHTML={{ __html: category?.svgContent }}
                ></span>
              </div>
              <span> {category?.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
