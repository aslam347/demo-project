function addToCart() {
    // Retrieve selected variant data
    var selectedColor = document.getElementById('colorSelector').value;
    var selectedSize = document.getElementById('sizeSelector').value;
    var selectedQuantity = document.getElementById('quantitySelector').value;

    // Calculate percentage off
    var originalPrice = 60.00; // Change this to the actual compare at price
    var currentPrice = 50.25; // Change this to the actual current price
    var discountPercentage = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

    // Display add to cart message
    var cartMessage = document.getElementById('cartMessage');
    cartMessage.innerHTML = `Added to Cart: ${selectedQuantity} x ${selectedColor}, ${selectedSize}. You saved ${discountPercentage}%!`;
    cartMessage.style.display = 'block';
}

// Add event listeners for variant selectors
document.getElementById('colorSelector').addEventListener('change', updateVariant);
document.getElementById('sizeSelector').addEventListener('change', updateVariant);

function updateVariant() {
    var selectedColor = document.getElementById('colorSelector').value;
    var selectedSize = document.getElementById('sizeSelector').value;
    var variantDetails = `Selected Variant: ${selectedColor}, ${selectedSize}`;

    // Display variant details
    document.getElementById('cartMessage').innerHTML = variantDetails;
}

 // Function to update the main image when a thumbnail is clicked
function updateMainImage(imgSrc) {
    var mainImgContainer = document.getElementById('mainImgContainer');
    mainImgContainer.src = imgSrc;
}

// Rest of your existing code...

// Add event listeners for thumbnail clicks
var thumbnailImages = document.querySelectorAll('.hover-container img');
thumbnailImages.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        updateMainImage(thumbnail.src);
    });
});
