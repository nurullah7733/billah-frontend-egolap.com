"use client";
import StarRatingComponent from "react-star-rating-component";

const ReactStartRatingCompoent = ({ totalRating }) => {
  return (
    <>
      <StarRatingComponent
        name="rate1"
        size={24}
        className={"text-[20px]"}
        starCount={5}
        value={totalRating}
        // onStarClick={this.onStarClick.bind(this)}
      />
    </>
  );
};

export default ReactStartRatingCompoent;
