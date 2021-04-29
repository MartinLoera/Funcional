const fs = require('fs');
let rawdata = fs.readFileSync('items.json');

class Inventory {
    constructor() {
        this.products = JSON.parse(rawdata);
    }

    grater_stock(number_){
        return this.products.filter(item => item.stock > number_)
    }

}

module.exports = Inventory;