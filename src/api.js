const BASE_URL = "https://thinkful-list-api.herokuapp.com/eli-stephen";

const listApiFetch = (...args) => {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) error = { code: res.status };

      return res.json();
    })

    .then(data => {
      if (error) {
        error.message = data.message;
        const makeError = async () => {
          let result = await createError(`error: ${error.message}`);
          return result;
        };

        return makeError();
      }

      return data;
    });
};

const getItems = function() {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  const newItem = JSON.stringify({
    name: name
  });
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  return listApiFetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: newItem
  });
};

const createError = function(error) {
  const newItem = JSON.stringify({
    name: error
  });

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: newItem
  });
};

const updateItem = function(id, updateData) {
  const json = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: json
  });
};

const deleteItem = function(item) {
  return listApiFetch(`${BASE_URL}/items/` + `${item}`, { method: "DELETE" });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  createError
};
