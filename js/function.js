const deleteUser = async (id, triggerElement = null) => {
  if (!id) {
    alert("Id required");
    return;
  }

  if (confirm("Would you like to delete user ?")) {
    try {
      const response = await fetch(`/users/${id}`, {
        method: "DELETE",
      });
      
      if (response.status === 200) {
        if (triggerElement) {
          const row = triggerElement.closest("tr");
          if (row) row.remove();
        } else {
          location.reload();
        }
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
