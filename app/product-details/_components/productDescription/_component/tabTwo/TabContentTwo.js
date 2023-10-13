import StarInfo from "./starInfo";

const TabContentTwo = ({ product }) => {
  return (
    <div>
      <div>
        {product?.ratingsUser?.map((rating, index) => (
          <div className="mb-5" key={index}>
            <div className="flex items-center gap-x-2">
              <img
                src={rating?.photo}
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
      </div>
    </div>
  );
};

export default TabContentTwo;
