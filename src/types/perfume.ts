import { parseAsBoolean, parseAsInteger, parseAsString } from "nuqs";

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "./http";

export type Sex = "male" | "female" | "unisex";

export interface Capacity {
  value: string;
  price: number;
}

export interface Perfume {
  name: string;
  slug: string;
  brand: string;
  createdAt: string;
  sex: Sex[];
  isMaleExtract: boolean;
  isFemaleExtract: boolean;
  price?:
    | {
        from: number;
        to: number;
      }
    | number;
  image: string;
  detailImages: string[];
  description: string;
  content: string;
  origin?: string;
  capacities?: Capacity[];
}

export const SEARCH_PRODUCT_PARAMS = {
  search: parseAsString,
  brand: parseAsString,
  sort: parseAsString,
  priceRange: parseAsString,
  sex: parseAsString,
  isMaleExtract: parseAsBoolean,
  isFemaleExtract: parseAsBoolean,
  page: parseAsInteger.withDefault(DEFAULT_PAGE),
  limit: parseAsInteger.withDefault(DEFAULT_PER_PAGE),
};
