const products = [
    { id: 1, name: "Tomatoes", price: 30, image: "https://via.placeholder.com/150?text=Tomatoes" },
    { id: 2, name: "Potatoes", price: 20, image: "https://via.placeholder.com/150?text=Potatoes" },
    { id: 3, name: "Apples", price: 50, image: "https://via.placeholder.com/150?text=Apples" },
    { id: 4, name: "Milk", price: 45, image: "https://via.placeholder.com/150?text=Milk" },
  ];
  
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartModal = document.getElementById("cart-modal");
  
  let cart = [];
  
  function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
    updateCartDisplay();
  }
  
  function updateCartDisplay() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(li);
    });
  }
  
  function toggleCart() {
    cartModal.classList.toggle("hidden");
  }
  
  renderProducts();
  