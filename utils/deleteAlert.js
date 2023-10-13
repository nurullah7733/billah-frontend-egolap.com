import Swal from "sweetalert2";

export const deleteItem = async (itemsHtml) => {
  return await Swal.fire({
    title: "Please select product size",
    html: itemsHtml,
    width: 300,
    customClass: {
      title: "custom-swal-title",
      confirmButton: "custom-swal-confirm-button",
      cancelButton: "custom-swal-cancel-button",
    },
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    // confirmButtonText: "Yes, delete it!",
  });
};
// export const deleteItem = async () => {
//   return await Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   });
// };
