"use client";

import { useEffect, useMemo, useState } from "react";
import { useQueryStates } from "nuqs";

import { Perfume, SEARCH_PRODUCT_PARAMS, Sex } from "@/types/perfume";

import PerfumeFilters from "@/components/feature/perfume/filters";
import PerfumeListView from "@/components/feature/perfume/list-grid";
import { CustomPagination } from "@/components/ui/custom-pagination";

import products from "@/data/products/data.json" assert { type: "json" };

import useMounted from "@/hooks/useMounted";

export default function ProductPage() {
  const mounted = useMounted();
  const [params, setParams] = useQueryStates(SEARCH_PRODUCT_PARAMS);
  const [filteredProducts, setFilteredProducts] = useState<Perfume[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const fetchingProducts = async () => {
      let data = [...products] as Perfume[];

      // Filter by search
      if (params.search) {
        const searchLower = params.search.toLowerCase();
        data = data.filter(
          (p) =>
            p.name.toLowerCase().includes(searchLower) ||
            (p.brand?.toLowerCase().includes(searchLower) ?? false)
        );
      }

      // Filter by brand
      if (params.brand) {
        data = data.filter((p) =>
          (params?.brand || "").split(",").includes(p.brand.toLowerCase())
        );
      }

      // Filter by priceRange (assume format "min-max")
      if (params.priceRange) {
        const value = params.priceRange;

        data = data.filter((p) => {
          const price =
            typeof p.price === "number" ? p.price : p.capacities?.[0]?.price;

          if (typeof price !== "number") return false;

          if (value.startsWith("lt-")) {
            const num = Number(value.replace("lt-", ""));
            return price < num;
          } else if (value.startsWith("gt-")) {
            const num = Number(value.replace("gt-", ""));
            return price > num;
          } else if (value.startsWith("gte-") && value.includes("-lte-")) {
            const [gtePart, ltePart] = value.split("-lte-");
            const min = Number(gtePart.replace("gte-", ""));
            const max = Number(ltePart);
            return price >= min && price <= max;
          }
          return true;
        });
      }

      // Filter by sex
      if (params.sex) {
        const sex = params.sex as Sex;
        data = data.filter((p) => {
          if (sex === "unisex") {
            return p.sex.length === 1 && p.sex.includes("unisex");
          }
          return p.sex.includes(params.sex as Sex) || p.sex.includes("unisex");
        });
      }

      // Filter by isMaleExtract
      if (params.isMaleExtract) {
        data = data.filter((p) => p.isMaleExtract);
      }

      // Filter by isFemaleExtract
      if (params.isFemaleExtract) {
        data = data.filter((p) => p.isFemaleExtract);
      }

      // Sort
      switch (params.sort) {
        case "low-high":
          data.sort((a, b) => {
            const aPrice =
              typeof a.price === "number"
                ? a.price
                : a.capacities?.[a.capacities.length - 1].price;
            const bPrice =
              typeof b.price === "number"
                ? b.price
                : b.capacities?.[b.capacities.length - 1].price;
            if (typeof aPrice !== "number") return 1;
            if (typeof bPrice !== "number") return -1;
            return aPrice - bPrice;
          });
          break;
        case "high-low":
          data.sort((a, b) => {
            const aPrice =
              typeof a.price === "number"
                ? a.price
                : a.capacities?.[a.capacities.length - 1].price;
            const bPrice =
              typeof b.price === "number"
                ? b.price
                : b.capacities?.[b.capacities.length - 1].price;
            if (typeof bPrice !== "number") return 1;
            if (typeof aPrice !== "number") return -1;
            return bPrice - aPrice;
          });
          break;
        default:
          break;
      }

      setTimeout(() => {
        setFilteredProducts(data);
      }, 100);
    };

    fetchingProducts();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [params]);

  const displayedProducts = useMemo<Perfume[]>(
    () =>
      filteredProducts.slice(
        (params.page - 1) * params.limit,
        params.page * params.limit
      ),
    [filteredProducts, params]
  );

  const totalPage = useMemo<number>(
    () => Math.ceil(filteredProducts.length / params.limit),
    [filteredProducts.length, params.limit]
  );

  if (!mounted) return null;

  return (
    <div className="container mx-auto grid grid-cols-1 gap-3 md:gap-6 px-1.5 py-4 md:grid-cols-[280px_1fr] md:px-0">
      <PerfumeFilters params={params} setParams={setParams} />

      <main className="space-y-6 border">
        <PerfumeListView
          perfumes={displayedProducts}
          sort={params?.sort || "new"}
          setSort={(sort) => setParams({ ...params, sort })}
        />

        <div className="my-6">
          <CustomPagination
            currentPage={params.page}
            totalPages={totalPage}
            onPageChange={(page) => setParams({ ...params, page })}
          />
        </div>
      </main>
    </div>
  );
}
