var groceryStore = [
    {
        title: "Fresh Ginger",
        price: 110,
        status: "available",
        soldquantity: 50,
        commingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Potassium, Manganese and Dietary Fiber"
    },
    {
        title: "Fresh Chilli",
        price: 8,
        status: "unavailable",
        soldquantity: 20,
        commingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Iron and Potassium."
    },
    {
        title: "Fresh Banana",
        price: 20,
        status: "available",
        soldquantity: 90,
        commingsoon: "no",
        category: "fruits",
        description: "Rich in potassium, vitamin C, B6 and Dietary Fiber."
    },
    {
        title: "Fresh apple",
        price: 100,
        status: "unavailable",
        soldquantity: 0,
        commingsoon: "yes",
        category: "fruits",
        description: "Good source of Vitamin C, Dietary Fiber, Flavonoids and antioxidants."
    },
    {
        title: "Fresh Cabbage",
        price: 10,
        status: "available",
        soldquantity: 59,
        commingsoon: "no",
        category: "vegatbles",
        description: "It is a good source of Vitamin K, Dietary Fiber, Calicum, Potassium and Phosphorus."
    },
    {
        title: "Fresh Capsicum",
        price: 90,
        status: "available",
        soldquantity: 79,
        commingsoon: "no",
        category: "vegatbles",
        description: "Good source of Vitamin A,C,E, Folate and Dietary Fiber."
    },
    {
        title: "Fresh Watermelon",
        price: 200,
        status: "unavailable",
        soldquantity: 0,
        commingsoon: "yes",
        category: "fruits",
        description: "Watermelons have excellent hydrating properties with 90% water content"
    },
    {
        title: "Fresh Brinjal",
        price: 90,
        status: "available",
        soldquantity: 40,
        commingsoon: "no",
        category: "vegetables",
        description: "Good Source of Thiamin and B6 and contains little measures of Vitamin E, Vitamin C, and Vitamin K."
    },
    {
        title: "Fresh Orange",
        price: 110,
        status: "available",
        soldquantity: 90,
        commingsoon: "no",
        category: "fruits",
        description: "Valencia Rich in taste 100% Natural"
    },
    {
        title: "Fresh Potato",
        price: 120,
        status: "unavailable",
        soldquantity: 0,
        commingsoon: "yes",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Potassium, and Magnesium."
    },
]

// 1.total available items name
// 2.available items amount
// 3.items which are out of stock
// 4.all items (including out of stock)
// 5.item rate greater then 100 rupees
// 6.item rate lesser then 100 rupees
// 7.Coming soon items

var mainDiv = document.getElementById('mainSection');
class grocery {
    constructor(data) {
        this.value = data;
    }
    title(abc) {
        var name = this.value.filter((x) => {
            return x.status == abc;
        });
        // console.log(name);
        var itemNames = document.createElement('div');
        itemNames.className = 'boxStyle';
        var heading1 = document.createElement('h3');
        heading1.innerHTML = 'Total Items availabe in Store'
        itemNames.appendChild(heading1);
        name.map((e) => {
            var names = document.createElement('div');
            names.innerHTML = e.title;
            itemNames.appendChild(names);
        });
        mainDiv.appendChild(itemNames);
    }

    amount(xyz) {
        var namePrice = this.value.filter((y) => {
            return y.status == xyz;
        });
        // console.log(namePrice);
        var itemPrice = document.createElement('div');
        itemPrice.className = 'boxStyle';
        var heading2 = document.createElement('h3');
        heading2.innerHTML = 'Available Items and their price';
        itemPrice.appendChild(heading2);
        namePrice.map((f) => {
            var names = document.createElement('div');
            names.innerHTML = f.title+" : "+f.price;
            itemPrice.appendChild(names);
        });
        mainDiv.appendChild(itemPrice);
    }

    Stock(avai) {
        console.log(this.value);
        var availableItems = document.createElement('div');
        availableItems.className = 'boxStyle';
        var heading3 = document.createElement('h3');
        heading3.innerHTML = 'Currently Out of Stock Items';
        availableItems.appendChild(heading3);
        var noStock = this.value.filter((z) => {
            return z.status == avai;
        });
        console.log(noStock);
        noStock.map((g) => {
            var noStockItems = document.createElement('div');
            noStockItems.innerHTML = g.title;
            availableItems.appendChild(noStockItems);
        });
        mainDiv.appendChild(availableItems);
    }

    everyItems() {
        var shopItems = document.createElement('div');
        shopItems.className = 'boxStyle';
        var heading4 = document.createElement('h3');
        heading4.innerHTML = 'Availabe Items in Shop';
        shopItems.appendChild(heading4);
        var items = this.value.map((a) => {
            return a;
        });
        // console.log(items);
        items.map((h) => {
            var apple = document.createElement('div');
            apple.innerHTML = h.title;
            shopItems.appendChild(apple);
        });
        mainDiv.appendChild(shopItems);
    }

    greaterItems(value) {
        var higherValue = document.createElement('div');
        higherValue.className = 'boxStyle';
        var heading5 = document.createElement('h3');
        heading5.innerHTML = 'Items price above 100';
        higherValue.appendChild(heading5);
        var greater = this.value.filter((b) => {
            return b.price > value;
        });
        // console.log(greater);
        greater.map((i) => {
            var high = document.createElement('div');
            high.innerHTML = i.title;
            higherValue.appendChild(high);
        });
        mainDiv.appendChild(higherValue);
    }

    lesserItems(value) {
        var lowerValue = document.createElement('div');
        lowerValue.className = 'boxStyle';
        var heading6 = document.createElement('h3');
        heading6.innerHTML = 'Items price below 100';
        lowerValue.appendChild(heading6);
        var lesser = this.value.filter((c) => {
            return c.price < value;
        });
        // console.log(lesser);
        lesser.map((j) => {
            var low = document.createElement('div');
            low.innerHTML = j.title;
            lowerValue.appendChild(low);
        });
        mainDiv.appendChild(lowerValue);
    }
    commingSoon(status) {
        var laterAvailabe = document.createElement('div');
        laterAvailabe.className = 'boxStyle';
        var heading7 = document.createElement('h3');
        heading7.innerHTML = 'Upcoming Items';
        laterAvailabe.appendChild(heading7);
        var update = this.value.filter((d) => {
            return d.commingsoon == status;
        });
        // console.log(update);
        update.map((k) => {
            var newItems = document.createElement('div');
            newItems.innerHTML = k.title;
            laterAvailabe.appendChild(newItems);
        });
        mainDiv.appendChild(laterAvailabe);
    }

}

var groceryShop = new grocery(groceryStore);
groceryShop.title('available');
groceryShop.amount('available');
groceryShop.Stock('unavailable');
groceryShop.everyItems();
groceryShop.greaterItems(100);
groceryShop.lesserItems(100);
groceryShop.commingSoon('yes');