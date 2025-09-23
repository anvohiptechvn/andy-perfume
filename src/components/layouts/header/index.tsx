"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import TopHeader from "./top-header";
import Navbar from "./navbar";
import BreadcrumbContainer, { Crumb } from "./breadcrumb";
import SlideNotice from "./slide-notice";

import routes from "@/data/category/data.json" assert { type: "json" };

const Header = () => {
  const pathName = usePathname();

  const breadcrumbRoutes = useMemo<Crumb[]>(() => {
    if (!routes.length) return [];

    const pathSegments = pathName.split("/").filter(Boolean);
    const breadcrumbs: Crumb[] = [{ label: "TRANG CHỦ", href: "/" }];

    // Build breadcrumb path dynamically
    let currentPath = "";
    for (let i = 0; i < pathSegments.length; i++) {
      currentPath += `/${pathSegments[i]}`;

      // Check main routes first
      const mainRoute = routes.find((route) => route.link === currentPath);
      if (mainRoute) {
        breadcrumbs.push({ label: mainRoute.name, href: mainRoute.link });
        continue;
      }

      // Check submenu routes
      const parentRoute = routes.find((route) =>
        route.children?.some((sub) => sub.link === currentPath)
      );
      if (parentRoute?.children) {
        const subItem = parentRoute?.children.find(
          (sub) => sub.link === currentPath
        );
        if (subItem) {
          // Add parent if not already added
          if (!breadcrumbs.some((crumb) => crumb.href === parentRoute.link)) {
            breadcrumbs.push({
              label: parentRoute.name,
              href: parentRoute.link,
            });
          }
          breadcrumbs.push({ label: subItem.name, href: subItem.link });
        }
      }
    }

    return breadcrumbs;
  }, [pathName, routes]);

  console.info("pathName", pathName);
  return (
    <header className="w-full bg-white">
      <TopHeader />
      <Navbar />
      <SlideNotice />

      {pathName !== "/" && pathName !== "/thuong-hieu/" && (
        <div className="hidden bg-[#f9f9f9] px-4 py-3 md:block">
          <div className="container mx-auto px-4">
            <BreadcrumbContainer items={breadcrumbRoutes} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
