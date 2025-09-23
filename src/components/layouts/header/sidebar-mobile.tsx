"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/style";

import routes from "@/data/category/data.json" assert { type: "json" };

interface SidebarMobileProps {
  open: boolean;
  onClose: () => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ open, onClose }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (slug: string) => {
    setExpanded(expanded === slug ? null : slug);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-300",
        open ? "visible" : "invisible"
      )}
      style={open ? { overflow: "hidden", touchAction: "none" } : {}}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      <aside
        className={`absolute top-0 left-0 h-full w-72 max-w-[80vw] bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ overflowY: "auto", WebkitOverflowScrolling: "touch" }}
        tabIndex={-1}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <span className="text-lg font-semibold">Danh mục</span>
          <button
            aria-label="Đóng menu"
            className="text-2xl"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-2 py-4">
          {routes.map((route) => (
            <div key={crypto.randomUUID()}>
              <div
                className={cn(
                  "flex items-center justify-between transition hover:bg-gray-100 rounded",
                  pathname === route.link && "bg-gray-200 font-semibold"
                )}
              >
                <a
                  href={route.link}
                  className={cn("block w-full px-3 py-2")}
                  onClick={onClose}
                >
                  {route.name}
                </a>
                {route.children && route.children.length > 0 && (
                  <button
                    className="px-2 py-2"
                    onClick={() => handleExpand(route.slug)}
                    aria-label="Mở rộng"
                    type="button"
                  >
                    <span
                      className={`inline-block transition-transform ${expanded === route.slug ? "rotate-90" : ""}`}
                    >
                      <PlusIcon size={16} />
                    </span>
                  </button>
                )}
              </div>
              {route.children &&
                route.children.length > 0 &&
                expanded === route.slug && (
                  <div className="mt-1 ml-4 flex max-h-[30dvh] flex-col gap-1 overflow-y-auto">
                    {route.children.map((child) => (
                      <a
                        key={crypto.randomUUID()}
                        href={child.link}
                        className={`block rounded px-3 py-2 text-sm transition hover:bg-gray-100 ${pathname === child.link ? "bg-gray-200 font-semibold" : ""}`}
                        onClick={onClose}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SidebarMobile;
