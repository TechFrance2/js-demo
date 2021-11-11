const values = [24, 89, 12, 16];

const cost = values.filter(function (item) {
  return item > 16;
});

const priceSaleItems = cost.find(function (item) {
  return item < 89;
});

values.forEach(function (item) {
  console.log(item);
});
showMessage("$" + priceSaleItems);
