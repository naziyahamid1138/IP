// ======================================
// Centella Beauty - Product Grading System
// Module 6 Lab Work
// ======================================

// 1. const
const brandName = "Centella Beauty";


// 2. Array of Objects
const products = [
    {
        name: "Centella Cream",
        price: 850,
        rating: 4.8
    },
    {
        name: "Centella Serum",
        price: 1200,
        rating: 4.5
    },
    {
        name: "Centella Face Wash",
        price: 650,
        rating: 4.2
    },
    {
        name: "Centella Sunscreen",
        price: 1000,
        rating: 3.8
    }
];


// 3. Function with parameter and return
function getGrade(rating) {

    if (rating >= 4.5) {
        return "A+";
    }
    else if (rating >= 4.0) {
        return "A";
    }
    else if (rating >= 3.5) {
        return "B";
    }
    else if (rating >= 3.0) {
        return "C";
    }
    else {
        return "F";
    }
}


// 4. Arrow Function
const getStatus = (rating) => {

    if (rating >= 4.0) {
        return "Excellent";
    }
    else if (rating >= 3.5) {
        return "Good";
    }
    else {
        return "Average";
    }
};


// 5. Arrow Function with parameter
const calculateDiscount = (price) => {
    return price * 0.10;
};


// 6. for...of loop
console.log("=================================");
console.log(`${brandName} - Product Report`);
console.log("=================================");

for (const product of products) {

    // Object properties
    const name = product.name;
    const price = product.price;
    const rating = product.rating;

    // Function call
    const grade = getGrade(rating);

    // Arrow function call
    const status = getStatus(rating);

    // Discount
    const discount = calculateDiscount(price);

    const finalPrice = price - discount;


    // 7. Template Literal
    console.log(`
Product Name : ${name}
Price        : ${price} BDT
Rating       : ${rating}
Grade        : ${grade}
Status       : ${status}
Discount     : ${discount} BDT
Final Price  : ${finalPrice} BDT
---------------------------------
`);
}