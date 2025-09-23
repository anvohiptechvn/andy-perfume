"use client";

import { useEffect, useMemo, useState } from "react";
import { useQueryStates } from "nuqs";

import { Blog, SEARCH_BLOG_PARAMS } from "@/types/blog";

import { CustomPagination } from "@/components/ui/custom-pagination";
import CategorySidebar from "@/components/feature/category/sidebar";
import BlogCard from "@/components/feature/blog/blog-card";

import saleBlogs from "@/data/sale/data.json" assert { type: "json" };

const SalePage = () => {
  const [params, setParams] = useQueryStates(SEARCH_BLOG_PARAMS);

  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchingProducts = async () => {
      setTimeout(() => {
        setFilteredBlogs(saleBlogs);
      }, 300);
    };

    fetchingProducts();
  }, []);

  const displayedBlogs = useMemo<Blog[]>(
    () =>
      filteredBlogs.slice(
        (params.page - 1) * params.limit,
        params.page * params.limit
      ),
    [filteredBlogs, params]
  );

  const totalPage = useMemo<number>(
    () => Math.ceil(filteredBlogs.length / params.limit),
    [filteredBlogs.length, params.limit]
  );

  return (
    <div className="container mx-auto flex flex-col-reverse gap-6 px-1.5 pt-4 pb-10 md:grid md:grid-cols-4 md:px-0">
      <CategorySidebar />

      {/* Main content */}
      <main className="border px-2.5 pb-2.5 md:col-span-3">
        <h2 className="py-2.5 text-lg md:text-[22px] font-medium text-[#323c3f]">
          Khuyến mãi
        </h2>
        <div className="flex flex-col gap-5">
          {displayedBlogs.map((blog, i) => (
            <BlogCard key={i} destinationUrl="/khuyen-mai" blog={blog} />
          ))}
        </div>

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
};

export default SalePage;
