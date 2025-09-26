export const MAX_PRICE = 9999999999999;

export const getPriceString = (price: number) => {
  if (price >= MAX_PRICE) return "Giá Liên Hệ";
  return `${price.toLocaleString("vi-VN")}đ`;
};
