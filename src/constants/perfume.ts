export const MAX_PRICE = 9999999999999;

export const getPriceString = (price: number) => {
  if (price >= MAX_PRICE) return "GIÁ LIÊN HỆ";
  return `${price.toLocaleString("vi-VN")}đ`;
};
