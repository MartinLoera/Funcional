const fs = require("fs");
let rawdata = fs.readFileSync("items.json");

class Inventory {
  constructor() {
    this.products = JSON.parse(rawdata);
  }

  grater_stock() {
    return this.products.filter((item) => item.stock > 20);
  }
  less_stock() {
    return this.products.filter((item) => item.stock < 15);
  }
  prices() {
    return this.products.filter((item) => item.price > 20.3 && item.price < 45);
  }
  classification_price_less() {
    return this.products.filter(
      (item) => item.price > 20 && item.classification === "higiene"
    );
  }
  same_class() {
    let arr1 = this.products.filter(
      (item) => item.classification === "verduras"
    );
    let arr2 = this.products.filter((item) => item.classification === "frutas");
    let arr3 = this.products.filter(
      (item) => item.classification === "aperitivos"
    );
    let arr4 = this.products.filter(
      (item) => item.classification === "higiene"
    );
    let groups = [arr1, arr2, arr3, arr4];
    return groups;
  }
}

module.exports = Inventory;
