import ReactStartRatingComponent from "../../../reactStarRating/reactStarRating";

const StarInfo = ({ userId, ratings }) => {
  let indivisualRating = ratings?.find((rating) => rating.author == userId);

  return (
    <>
      <ReactStartRatingComponent totalRating={indivisualRating?.star} />
      <div>
        <p className="text-[14px] text-black dark:text-white">
          {indivisualRating?.comment}
        </p>
      </div>
    </>
  );
};

export default StarInfo;
