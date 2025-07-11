// css
require("../scss/main.scss");

const { deleteUser } = require("./function");

// js
document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach((button) => {
    const id = button.getAttribute("data-id");
    button.addEventListener("click", () => {
      deleteUser(id);
    });
  });
});
