function getRandomIndex(min, max) {
  if (min < 0 || max < 0) {
    return 0;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function productPrice(price) {
  return parseInt(price.replace('$', ''));
}

function returnSortedList(items) {
  let sortedItems = new Array();

  items.forEach((itemVal, itemKey) => {
    sortedItems.push(itemVal);
  });

  return sortedItems.sort();
}

module.exports = { getRandomIndex, productPrice, returnSortedList };
