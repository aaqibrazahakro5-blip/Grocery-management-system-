
// ==========================================
// 1. GROCERY PRODUCTS DATABASE
// ==========================================

const products = [
    // FRUITS
    {
        id: 1,
        name: "Fresh Apples",
        category: "Fruits",
        price: 350,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"
    },
    {
        id: 2,
        name: "Bananas",
        category: "Fruits",
        price: 180,
        unit: "1 dozen",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500"
    },
    {
        id: 3,
        name: "Fresh Oranges",
        category: "Fruits",
        price: 250,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500"
    },
    {
        id: 4,
        name: "Mangoes",
        category: "Fruits",
        price: 300,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500"
    },
    {
        id: 5,
        name: "Grapes",
        category: "Fruits",
        price: 400,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500"
    },

    // VEGETABLES
    {
        id: 6,
        name: "Fresh Tomatoes",
        category: "Vegetables",
        price: 120,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
    },
    {
        id: 7,
        name: "Potatoes",
        category: "Vegetables",
        price: 100,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
    },
    {
        id: 8,
        name: "Fresh Onions",
        category: "Vegetables",
        price: 130,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500"
    },
    {
        id: 9,
        name: "Carrots",
        category: "Vegetables",
        price: 150,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500"
    },
    {
        id: 10,
        name: "Cucumber",
        category: "Vegetables",
        price: 100,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500"
    },

    // COOKING ITEMS
    {
        id: 11,
        name: "Basmati Rice",
        category: "Cooking",
        price: 450,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"
    },
    {
        id: 12,
        name: "Cooking Oil",
        category: "Cooking",
        price: 550,
        unit: "1 litre",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
    },
    {
        id: 13,
        name: "Wheat Flour",
        category: "Cooking",
        price: 180,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=500"
    },
    {
        id: 14,
        name: "Sugar",
        category: "Cooking",
        price: 160,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500"
    },
    {
        id: 15,
        name: "Table Salt",
        category: "Cooking",
        price: 60,
        unit: "1 pack",
        image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=500"
    },
    {
        id: 16,
        name: "Red Chilli Powder",
        category: "Cooking",
        price: 120,
        unit: "1 pack",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500"
    },

    // HOME ESSENTIALS
    {
        id: 17,
        name: "Dishwashing Liquid",
        category: "Home",
        price: 220,
        unit: "1 bottle",
        image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500"
    },
    {
        id: 18,
        name: "Laundry Detergent",
        category: "Home",
        price: 350,
        unit: "1 pack",
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500"
    },
    {
        id: 19,
        name: "Tissue Paper",
        category: "Home",
        price: 150,
        unit: "1 pack",
        image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=500"
    },
    {
        id: 20,
        name: "Hand Wash",
        category: "Home",
        price: 180,
        unit: "1 bottle",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500"
    }
];


// ==========================================
// 2. CART DATA
// ==========================================

let cart = JSON.parse(localStorage.getItem("groceryCart")) || [];
let currentCategory = "All";

const productList = document.getElementById("product-list");


// ==========================================
// 3. DISPLAY PRODUCTS
// ==========================================

function displayProducts(items) {

    productList.innerHTML = "";

    if (items.length === 0) {
        productList.innerHTML =
            '<p class="no-products">No products found!</p>';
        return;
    }

    items.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.loading = "lazy";

        // Fallback if a picture does not load
        img.onerror = function () {
            this.onerror = null;
            this.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
        };

        const info = document.createElement("div");
        info.className = "product-info";

        const category = document.createElement("span");
        category.className = "product-category";
        category.textContent = product.category;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const unit = document.createElement("small");
        unit.textContent = product.unit;

        const price = document.createElement("div");
        price.className = "product-price";
        price.textContent = "Rs. " + product.price;

        const button = document.createElement("button");
        button.className = "add-btn";
        button.textContent = "+ Add to Cart";
        button.addEventListener("click", () => addToCart(product.id));

        info.append(category, name, unit, price, button);
        card.append(img, info);

        productList.appendChild(card);
    });
}


// ==========================================
// 4. FILTER BY CATEGORY
// ==========================================

function filterCategory(category, button) {

    currentCategory = category;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    searchProducts();
}


// ==========================================
// 5. SEARCH PRODUCTS
// ==========================================

function searchProducts() {

    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const filtered = products.filter(product => {

        const matchesCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;
    });

    displayProducts(filtered);
}


// ==========================================
// 6. SAVE CART
// ==========================================

function saveCart() {
    localStorage.setItem("groceryCart", JSON.stringify(cart));
}


// ==========================================
// 7. ADD PRODUCT TO CART
// ==========================================

function addToCart(id) {

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    saveCart();
    updateCart();

}


// ==========================================
// 8. UPDATE CART
// ==========================================

function updateCart() {

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let subtotal = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty!</p>';

    }

    cart.forEach(item => {

        const product = products.find(p => p.id === item.id);

        if (!product) return;

        const itemTotal = product.price * item.quantity;

        subtotal += itemTotal;
        totalQuantity += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.onerror = function () {
            this.onerror = null;
            this.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
        };

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const name = document.createElement("h4");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "Rs. " + itemTotal;

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minus = document.createElement("button");
        minus.textContent = "-";
        minus.addEventListener("click", () => changeQuantity(item.id, -1));

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.addEventListener("click", () => changeQuantity(item.id, 1));

        controls.append(minus, quantity, plus);
        info.append(name, price, controls);

        const remove = document.createElement("button");
        remove.className = "remove-btn";
        remove.textContent = "🗑";
        remove.title = "Remove item";
        remove.addEventListener("click", () => removeItem(item.id));

        div.append(img, info, remove);

        cartItems.appendChild(div);

    });

    const delivery = subtotal > 0 ? 150 : 0;
    const total = subtotal + delivery;

    document.getElementById("cart-count").textContent = totalQuantity;
    document.getElementById("subtotal").textContent = "Rs. " + subtotal;
    document.getElementById("delivery").textContent = "Rs. " + delivery;
    document.getElementById("total").textContent = "Rs. " + total;

    saveCart();
}


// ==========================================
// 9. CHANGE QUANTITY
// ==========================================

function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();
}


// ==========================================
// 10. REMOVE ITEM
// ==========================================

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();
}


// ==========================================
// 11. OPEN AND CLOSE CART
// ==========================================

function toggleCart() {

    document.getElementById("cart-panel")
        .classList.toggle("open");

    document.getElementById("overlay")
        .classList.toggle("show");
}


// ==========================================
// 12. CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }

    document.getElementById("checkout-modal")
        .classList.add("show");

}

function closeCheckout() {

    document.getElementById("checkout-modal")
        .classList.remove("show");

}


// ==========================================
// 13. PLACE ORDER
// ==========================================

document.getElementById("checkout-form")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        closeCheckout();
        return;
    }

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;
    const payment = document.getElementById("payment-method").value;

    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const delivery = 150;
    const total = subtotal + delivery;

    const orderNumber = "FM" + Date.now().toString().slice(-7);

    alert(
        "ORDER PLACED SUCCESSFULLY!\n\n" +
        "Order ID: " + orderNumber + "\n" +
        "Customer: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address + "\n" +
        "Payment: " + payment + "\n\n" +
        "Subtotal: Rs. " + subtotal + "\n" +
        "Delivery: Rs. " + delivery + "\n" +
        "Total: Rs. " + total + "\n\n" +
        "Thank you for shopping at FreshMart!"
    );

    cart = [];

    saveCart();
    updateCart();

    this.reset();

    closeCheckout();

    document.getElementById("cart-panel").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");

});


// ==========================================
// 14. INITIALIZE WEBSITE
// ==========================================

displayProducts(products);
updateCart();
