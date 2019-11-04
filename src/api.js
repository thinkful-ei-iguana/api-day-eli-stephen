const BASE_URL = "https://thinkful-list-api.herokuapp.com/eli-stephen";

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  const newItem = JSON.stringify({
    name: name
  });
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  console.log("headers", headers);
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: newItem
  });
};

const updateItem = function(id, updateData) {
  const json = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: json
  });
};

export default {
  getItems,
  createItem,
  updateItem
};
