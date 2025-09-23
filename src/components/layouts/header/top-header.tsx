import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import TiktokIcon from "@/components/icons/tiktok";
import YoutubeIcon from "@/components/icons/youtube";

const TopHeader = () => {
  const [searchVal, setSearchVal] = useState<string>("");

  const socialLinks = useMemo(
    () => [
      {
        href: "https://facebook.com/andyparfums",
        label: "Facebook",
        Icon: FacebookIcon,
      },
      {
        href: "https://instagram.com/andyparfums",
        label: "Instagram",
        Icon: InstagramIcon,
      },
      {
        href: "https://www.tiktok.com/@andyparfums",
        label: "TikTok",
        Icon: TiktokIcon,
      },
      {
        href: "https://www.youtube.com/@andyperfume",
        label: "YouTube",
        Icon: YoutubeIcon,
      },
    ],
    []
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchVal.trim()) {
      window.location.href = `/search?q=${searchVal.trim()}`;
    }
  };

  return (
    <div className="bg-primary-default">
      <div className="container mx-auto flex grid-cols-3 flex-col gap-3 px-4 py-3 md:grid md:gap-0">
        <div className="col-span-2 flex grid-cols-2 flex-row-reverse justify-center gap-4 md:grid">
          <div className="flex flex-1 items-center justify-start gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end text-xs font-semibold text-white md:justify-center md:text-sm">
            Hotline: 0909292848
          </div>
        </div>

        <div className="flex h-full justify-end">
          <div className="relative h-full w-full md:w-[250px]">
            <Input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="h-full rounded-sm bg-white py-2 pr-10 pl-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <Link
              href={`/search?q=${searchVal}`}
              className="absolute top-1/2 right-3 -translate-y-1/2"
              onClick={(e) => {
                if (!searchVal.trim()) {
                  e.preventDefault();
                }
              }}
            >
              <Search className="h-4 w-4 transform text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
