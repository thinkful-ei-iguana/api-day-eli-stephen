const items = [];
let hideCheckeditems = false;

const findById = function(id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function(item) {
  return this.items.push(item);
};

const findAndDelete = function(id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const findAndUpdate = function(id, newData) {
  const findItem = this.items.find(itemId => itemId.id === id);
  const newObj = Object.assign(newData, findItem);
  this.items[this.items.indexOf(findItem)] = newObj;
};

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};
