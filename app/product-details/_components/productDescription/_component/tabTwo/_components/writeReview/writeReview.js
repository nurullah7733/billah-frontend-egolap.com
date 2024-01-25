"use client";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import StarRatingComponent from "react-star-rating-component";
import Image from "next/image";
import { ratingProduct } from "../../../../../../../../APIRequest/products/productsApi";

const WriteReview = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [reviewValidation, setReviewValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [review, setReview] = useState({
    comment: "",
    star: 2,
  });

  const handleStarClick = (starNumber) => {
    setReview({ ...review, star: starNumber });
    setOpen(true);
  };

  const handleSubmit = async () => {
    let productId = product?._id;
    if (review.comment.length < 25) {
      setReviewValidation(true);
    } else {
      setLoading(true);
      let result = await ratingProduct(productId, review);
      setLoading(false);
      setOpen(false);
      if (result) {
        setReview({
          comment: "",
          star: 2,
        });
        window.location.reload();
      }
    }
  };

  return (
    <div>
      <h3 className="text-2xl">Rate this product</h3>
      <div>
        <StarRatingComponent
          name="rate1"
          className={"text-[30px]"}
          starCount={5}
          value={review.star}
          editing={true}
          onStarClick={handleStarClick}
        />
      </div>
      <div>
        <button onClick={onOpenModal} className="border py-1 px-2">
          write a review
        </button>
      </div>
      {/* Modal */}
      <div classNames={`max-w-[50%]`}>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: "customModal",
          }}
        >
          <div className="flex">
            {product?.img?.length > 0 && (
              <Image
                width={80}
                height={80}
                alt={product?.name}
                src={product?.img[0]?.secure_url}
              />
            )}
            <h2 className="text-black w-[70%] px-1">{product?.name}</h2>
          </div>
          <div className="flex justify-center">
            <StarRatingComponent
              name="rate"
              className={"text-[50px]"}
              starCount={5}
              value={review.star}
              editing={true}
              onStarClick={handleStarClick}
            />
          </div>
          <div>
            <textarea
              className="border focus:outline-none p-2"
              placeholder="Write a review"
              rows={3}
              cols={37}
              value={review.comment}
              onChange={(e) => {
                setReview({ ...review, comment: e.target.value });
                e.target.value.length > 25 && setReviewValidation(false);
              }}
            ></textarea>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            {reviewValidation && (
              <p className="text-red-500">Write a review (25+ characters).</p>
            )}
            <button
              disabled={review?.star > 0 ? false : true}
              onClick={handleSubmit}
              className="border py-1 px-2 h-8 disabled:text-gray-300 flex text-black gap-2"
            >
              {loading && (
                <img
                  src="/assets/icons/spinner.svg"
                  alt="loading image"
                  width={20}
                  height={20}
                />
              )}
              Submit
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default WriteReview;
