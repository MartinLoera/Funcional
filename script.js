const Script = require("./DAO");

const products = new Script();

let items = products.grater_stock();
console.log("Número de productos con existencia mayor a 20:");
console.log(items.length);
items = products.less_stock();
console.log("Número de productos con existencia menos a 15");
console.log(items.length);
items = products.prices();
console.log(
  "Lista de productos con la misma clasificación y precio mayor 15.50"
);
console.log(items);
items = products.classification_price_less();
console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00");
console.log(items);
console.log("Número de productos agrupados por su clasificación");
items = products.same_class();
items.forEach((clas) => {
  console.log(`\n${clas[0].classification}\n`);
  console.log(clas.length);
});
