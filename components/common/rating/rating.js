"use client";
import { useState } from "react";
import { Rating } from "react-custom-rating-component";

export const RatingReadOnly = ({ ratting }) => {
  return (
    <div>
      <Rating
        defaultValue={ratting}
        readOnly
        size="16px"
        spacing="5px"
        activeColor="yellow"
        onChange={(newRating) => console.log("newRating", newRating)}
        onHover={(hoveredRating) => console.log("hoveredRating", hoveredRating)}
      />
    </div>
  );
};
