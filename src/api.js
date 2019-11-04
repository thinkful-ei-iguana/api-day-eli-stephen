const BASE_URL = 'https://thinkful-list-api.herokuapp.com/eli-stephen';

const getItems = function () {
  return Promise.resolve('A successful response!');
};

const createItem = function (name) {
  const newItem = JSON.stringify({
    name: name
  });
  console.log(newItem);
  return fetch(`${BASE_URL}/items`, {method: 'POST',   headers: new Headers({'Content-Type':        'application/json'}),
    body: newItem});
};

export default {
  getItems,
  createItem
};