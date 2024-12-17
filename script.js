const loadAPI = () => {
    fetch('https://fakestoreapi.com/products') // Used to fetch data
        .then((res) => res.json())
        .then((data) => {
            getProducts(data); // Pass the data to getProducts to render the UI
        })
        .catch((error) => {
            console.error("Error fetching API:", error);
        });
};

const displayProduct = (product) => {
    return (`
        <div class="product">
            <img src="${product.image}" alt="Product Image">
            <h2>${product.title}</h2>  
            <h2>$${product.price}</h2>
            <h2>Rating: ${product.rating.rate}</h2>
        </div>
    `);
};

const getProducts = (products) => {
    const displayUI = products.map((product) => displayProduct(product));
    const container = document.getElementById('products');

    // Safely add the generated HTML into the container
    container.innerHTML = displayUI.join("");
};

// Load the API data
loadAPI();
