import { parseAsInteger } from "nuqs";

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "./http";

export interface Blog {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  content: string;
  type?: "monthly-ranking" | "total-ranking";
}

export const SEARCH_BLOG_PARAMS = {
  page: parseAsInteger.withDefault(DEFAULT_PAGE),
  limit: parseAsInteger.withDefault(DEFAULT_PER_PAGE),
};
