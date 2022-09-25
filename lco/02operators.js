var sellingPrice = 199;
var listingPrice = 799;
var discountPercentage = ((listingPrice - sellingPrice)/listingPrice)*100;
var discountPercentageRounded = Math.round(discountPercentage);
console.log(`
    The Product is ${discountPercentageRounded} OFF
`)