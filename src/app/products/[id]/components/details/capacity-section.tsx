import { Capacity } from "@/types/perfume";

import { cn } from "@/utils/style";
import { X } from "lucide-react";

interface CapacitySectionProps {
  capacities?: Capacity[];
  selectedCapacityIndex?: number;
  setSelectedCapacityIndex: (idx: number) => void;
}

const CapacitySection: React.FC<CapacitySectionProps> = ({
  capacities,
  selectedCapacityIndex,
  setSelectedCapacityIndex,
}) => {
  return (
    <>
      {capacities && capacities.length > 0 && (
        <div>
          <span className="font-bold text-[#42495B]">Dung Tích:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {capacities.map((cap, idx) => (
              <button
                key={idx}
                type="button"
                className={cn(
                  "relative rounded border px-4 py-2 text-sm font-medium transition-colors",
                  selectedCapacityIndex === idx
                    ? "border-primary-default/50 bg-neutral-50 text-[#42495B]"
                    : "hover:border-primary-default/50 border-[#ACACAC]/60 bg-white text-[#42495B]",
                  cap?.outOfStock ? "!text-neutral-200" : ""
                )}
                onClick={() => setSelectedCapacityIndex(idx)}
              >
                {cap.value}
                {cap?.outOfStock && (
                  <>
                    <div className="w-20 h-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-200 rotate-20"></div>
                    <div className="w-20 h-[1px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-200 -rotate-20"></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CapacitySection;
