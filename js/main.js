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

  const editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      if (id) {
        window.location.href = `/form?id=${encodeURIComponent(id)}`;
      }
    });
  });

  const showButtons = document.querySelectorAll(".btn-show");
  showButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      if (id) {
        window.location.href = `/user/${encodeURIComponent(id)}`;
      }
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const action = form.getAttribute("action");

      const response = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log(response);

      if (response.status === 200) {
        window.location.href = "/users";
      } else {
        alert("Error");
      }
    });
  }
});
