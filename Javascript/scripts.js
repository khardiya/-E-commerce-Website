
let debounceTimer;
document.getElementById('searchQuery').addEventListener('input', function() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function() {
    performSearch(); // Call the search function after a delay
  }, 300); // 300ms delay
});

// Get the category filter and price range slider
const categoryFilter = document.getElementById('categoryFilter');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

// Update the priceValue span when the range slider changes
priceRange.addEventListener('input', function () {
  priceValue.textContent = priceRange.value;
  filterProducts(); // Call filter function on price range change
});

// Get all product cards
const productCards = document.querySelectorAll('.card');

// Update products based on category and price filter
categoryFilter.addEventListener('change', function () {
  filterProducts(); // Call filter function when category is changed
});

// Function to filter products
function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedPrice = parseInt(priceRange.value);

  productCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardPrice = parseInt(card.getAttribute('data-price'));

    // Check if the product matches the category and price criteria
    if ((selectedCategory === 'All Categories' || selectedCategory === cardCategory) &&
        cardPrice <= selectedPrice) {
      card.style.display = 'block'; // Show card
    } else {
      card.style.display = 'none'; // Hide card
    }
  });
}

// Set initial price value on page load
priceValue.textContent = priceRange.value;

// Initial call to filter products when page loads
filterProducts();

