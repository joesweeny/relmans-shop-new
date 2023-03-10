const addSortItem = (items, item) => {
  const newItems = [...items, item];

  return newItems.sort((a, b) => a.name.localeCompare(b.name));
};

export default addSortItem;
