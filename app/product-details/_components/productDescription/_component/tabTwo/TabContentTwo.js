import StarInfo from "./starInfo";
import WriteReview from "./_components/writeReview/writeReview";

const TabContentTwo = ({ token, product }) => {
  return (
    <div>
      <div>
        <div className="">
          <WriteReview token={token} product={product} />
          <hr className="py-5 mt-5" />
        </div>
        {product?.ratings?.length > 0 ? (
          <>
            {product?.ratingsUser?.map((rating, index) => (
              <div className="mb-7" key={index}>
                <div className="flex items-center gap-x-2">
                  <img
                    src={
                      rating?.photo?.length > 0
                        ? rating?.photo?.[0]?.secure_url
                        : null
                    }
                    alt=""
                    width="35"
                    height="35"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-[15px]">
                      {rating?.firstName + " " + rating?.lastName}
                    </p>
                    {/* <p>{moment(new Date().getDate()).format()}</p> */}
                  </div>
                </div>
                {/* ratting desc */}
                <StarInfo userId={rating?._id} ratings={product?.ratings} />
              </div>
            ))}
          </>
        ) : (
          <>
            <h2 className="p-5 text-2xl text-center">
              No Products Review Found!
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default TabContentTwo;
