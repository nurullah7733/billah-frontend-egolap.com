import Swal from "sweetalert2";

export const deleteItem = async () => {
  return await Swal.fire({
    title: "Are you sure?",
    html:
      '<ul><li><button onclick="style"> S</button></li></ul>' +
      '<ul><li><button onclick="style"> M</button></li></ul>' +
      '<ul><li><button onclick="style"> L</button></li></ul>',
    inputValue: ["s", "m", "l", "xl", "xxl"],
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
