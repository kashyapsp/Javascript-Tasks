function actualPrice(costPrice) {
    const discountRate = 0.20; 
    const discountAmount = costPrice * discountRate; 
    const sellingPrice = costPrice - discountAmount; 

    console.log(`Selling Price after discount: ${sellingPrice.toFixed(2)}`);
}


actualPrice(1000); 