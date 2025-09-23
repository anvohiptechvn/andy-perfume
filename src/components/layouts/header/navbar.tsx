"use client";

import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import SidebarMobile from "./sidebar-mobile";

import { cn } from "@/utils/style";

import routes from "@/data/category/data.json" assert { type: "json" };

const Navbar = () => {
  const pathName = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="container mx-auto pr-4 md:pr-12 md:pl-4">
      <ul className="relative flex w-full flex-row-reverse items-center justify-start pl-4 md:flex-row md:justify-between md:pl-0">
        <div className="flex flex-1 justify-center pr-6 md:hidden">
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 transition-colors hover:text-blue-600"
          >
            <img src="/images/logo/perfume.png" alt="Logo" className="w-16" />
          </a>
        </div>

        <a
          href="/"
          className="hidden text-2xl font-bold text-gray-800 transition-colors hover:text-blue-600 md:block"
        >
          <img src="/images/logo/perfume.png" alt="Logo" className="w-24" />
        </a>

        <>
          <button
            className="block outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Mở menu"
            type="button"
          >
            <Menu size={24} />
          </button>
          <SidebarMobile
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </>

        {routes.map((route) => (
          <li
            key={crypto.randomUUID()}
            className={cn(
              "group hidden md:block",
              route?.children && route?.children.length < 5 ? "relative" : ""
            )}
          >
            <a
              href={route.link}
              className={cn(
                "flex items-center gap-1 text-xs text-black transition-all duration-200 hover:font-medium md:text-[15px]",
                (route.link !== "/" && pathName.startsWith(route.link)) ||
                  (route.link === "/" && pathName === route.link)
                  ? "font-medium"
                  : "font-normal"
              )}
            >
              {route.name}
              {route?.children && <ChevronRight size={16} />}
            </a>

            {/* Mega menu (> 5 items) */}
            {route?.children && (route?.children || []).length > 5 && (
              <div className="absolute top-[calc(100%-40px)] right-0 left-0 z-50 hidden pt-10 group-hover:flex">
                <div className="h-full w-full bg-white shadow-lg">
                  <div className="grid grid-cols-5 gap-3 p-3">
                    {(route?.children || []).map((subItem) => (
                      <a
                        key={crypto.randomUUID()}
                        href={subItem.link}
                        className="hover:text-primary-default block text-sm text-black"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Small dropdown (≤ 5 items) */}
            {route.children && route.children.length <= 5 && (
              <div className="absolute top-full left-0 z-50 hidden w-48 pt-3 group-hover:flex">
                <ul className="flex w-full flex-col gap-3 bg-white p-3 shadow-lg">
                  {route.children.map((subItem) => (
                    <li key={crypto.randomUUID()}>
                      <a
                        href={subItem.link}
                        className="hover:text-primary-default block text-sm text-black"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
