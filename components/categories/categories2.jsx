"use client";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Electronics",
      subcategories: ["Mobiles", "Laptops", "Cameras"],
    },
    {
      name: "Clothing",
      subcategories: ["Men", "Women", "Kids"],
    },
    // Add more categories and subcategories as needed
  ];

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(
      selectedCategory === categoryIndex ? null : categoryIndex
    );
  };

  const handleSubcategoryClick = (subcategory) => {
    // Handle subcategory click logic
    console.log("Selected Subcategory:", subcategory);
  };

  return (
    <div className="category-section">
      <AliceCarousel
        disableDotsControls
        disableButtonsControls
        items={categories.map((category, index) => (
          <div key={index} className="category-container">
            <div
              className={`category-item ${
                selectedCategory === index ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </div>

            {selectedCategory === index && (
              <div className="subcategories">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="subcategory-item"
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      />
    </div>
  );
};

export default CategorySection;
