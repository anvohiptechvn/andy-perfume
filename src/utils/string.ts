import { Sex } from "@/types/perfume";

/**
 * Returns the Messenger URL from the social data array.
 * @param socialData - The array of social link objects (from data.json)
 * @returns The Messenger URL string, or undefined if not found.
 */
export const getMessengerUrl = (
  socialData: { key: string; href: string }[]
): string | undefined => {
  const messenger = socialData.find((item) => item.key === "messenger");
  return messenger?.href;
};

export const getGender = (sex: Sex): string => {
  switch (sex) {
    case "male":
      return "Nam";
    case "female":
      return "Nữ";
    default:
      return "Unisex";
  }
};
