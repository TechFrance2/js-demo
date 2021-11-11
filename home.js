const dinner = ["turkey", "dressing", "gravy"];
dinner.unshift("sweet potatoes");
dinner.push("mashed potatoes", "pumpkin pie");

dinner.splice(5, 0, "green bean casserole", "ambrosia salad");

const newDinner = dinner.slice();

newDinner.splice(2, 0, "ham", "roast beef");
newDinner.shift(0);
newDinner.splice(6, 0, "sweet potatoe casserole", "salad");

console.log(newDinner);

showMessage(newDinner.length);
