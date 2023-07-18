/**
 * This function calculates the total price of a new order
 * @param {Array} products cart: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};
