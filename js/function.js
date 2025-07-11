const deleteUser = async (id) => {
  if (!id) {
    alert("Id required");
    return;
  }

  if (confirm("Would you like to delete user ?")) {
    try {
      const response = await fetch(`/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const row = triggerElement.closest("tr");
        if (row) row.remove();
      } else {
        alert("Error");
      }
    } catch (err) {
      console.error("Error :", err);
      alert("Error");
    }
  }
};

module.exports = {
  deleteUser,
};
