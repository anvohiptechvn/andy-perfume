import { useMemo, useState } from "react";
import { Grid, List } from "lucide-react";

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@/types/http";
import { Perfume } from "@/types/perfume";

import PerfumeCard from "@/components/feature/perfume/perfume-card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CustomPagination } from "@/components/ui/custom-pagination";

import { cn } from "@/utils/style";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PerfumeListViewProps {
  sort: string;
  setSort: (sort: string) => void;
  perfumes: Perfume[];
}

const PerfumeListView = ({ perfumes, sort, setSort }: PerfumeListViewProps) => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <>
      <div className="p-2.5 flex flex-col gap-2 md:gap-0">
        <h1 className="text-lg font-medium text-[#333333] md:text-[22px]">
          Tất cả sản phẩm
        </h1>

        {/* Sort & View Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-2.5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-6">
            <span className="text-xs font-normal md:font-medium md:text-sm">
              Xếp theo:
            </span>
            <RadioGroup
              value={sort}
              onValueChange={setSort}
              className="md:flex gap-4 hidden"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new" className="text-xs font-normal md:text-sm">
                  Hàng mới
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low-high" id="low-high" />
                <Label
                  htmlFor="low-high"
                  className="text-xs font-normal md:text-sm"
                >
                  Giá thấp đến cao
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high-low" id="high-low" />
                <Label
                  htmlFor="high-low"
                  className="text-xs font-normal md:text-sm"
                >
                  Giá cao xuống thấp
                </Label>
              </div>
            </RadioGroup>

            {/* Mobile sort select */}
            <div className="block md:hidden">
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-32" aria-label="Xếp theo">
                  <SelectValue placeholder="Xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Thứ tự</SelectItem>
                  <SelectItem value="low-high">Giá tăng dần</SelectItem>
                  <SelectItem value="high-low">Giá giảm dần</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* View toggle */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
            <span className="text-xs md:text-sm">Xem:</span>
            <div className="flex gap-2">
              <button
                className={cn(
                  "flex items-center gap-1 border px-2 py-1.5",
                  view === "grid" ? "text-primary-default" : "text-black"
                )}
                onClick={() => setView("grid")}
              >
                <Grid className="h-4 w-4" />
                <span className="text-[10px] font-normal md:text-xs">Lưới</span>
              </button>
              <button
                className={cn(
                  "flex items-center gap-1 border px-2 py-1.5",
                  view === "list" ? "text-primary-default" : "text-black"
                )}
                onClick={() => setView("list")}
              >
                <List className="h-4 w-4" />
                <span className="text-[10px] font-normal md:text-xs">Cột</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={view === "grid" ? "grid grid-cols-2 md:grid-cols-4" : ""}>
        {perfumes.map((perfume, idx) => (
          <PerfumeCard
            key={idx}
            perfume={perfume}
            className={
              view === "grid" ? "border-0" : "mx-2.5 border-0 border-b"
            }
            layout={view === "grid" ? "column" : "row"}
          />
        ))}
      </div>
    </>
  );
};

export default PerfumeListView;
