const BASE_URL = "https://thinkful-list-api.herokuapp.com/eli-stephen";

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
};

export default {
  getItems
};
