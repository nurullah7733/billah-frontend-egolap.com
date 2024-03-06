import Swal from "sweetalert2";

export const productSizeModal = async (itemsHtml) => {
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

export const MustLoginModal = async () => {
  return await Swal.fire({
    title: "You must be login!",
    html: `<h2><a href="/login">Login</a></h2>`,
    width: 350,
    customClass: {
      title: "custom-swal-title",
      confirmButton: "custom-swal-confirm-button",
      cancelButton: "custom-swal-cancel-button",
      icon: "custom-swal-icon",
    },
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ok",
  });
};

export const randomSweetAlert = async (title) => {
  return await Swal.fire({
    title: title,
    width: 300,
    icon: "question",
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
