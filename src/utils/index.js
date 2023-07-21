/**
 * This function calculates the total price of a new order
 * @param {Array} products cart: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};

/**
 * This function return the current date in dd/mm/yyyy format as a String
 * @param {}
 * @returns {string} formated current date dd/mm/yyyy
 */
export const currentformatDate = () => {
  const date = new Date();
  return date.toLocaleDateString();
};
