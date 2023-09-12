"use client";
const BtnCancelOrder = () => {
  return (
    <button
      className="px-2 text-white dark:bg-gray-700 bg-primary"
      onClick={() => alert("ok boss")}
    >
      Cancel order
    </button>
  );
};

export default BtnCancelOrder;
