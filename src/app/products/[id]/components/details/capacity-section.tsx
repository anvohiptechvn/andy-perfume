import { Capacity } from "@/types/perfume";

import { cn } from "@/utils/style";

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
                  "rounded border px-4 py-2 text-sm font-medium transition-colors",
                  selectedCapacityIndex === idx
                    ? "border-neutral-500 bg-neutral-50 text-[#42495B]"
                    : "hover:border-primary-default/50 border-[#ACACAC] bg-white text-[#42495B]"
                )}
                onClick={() => setSelectedCapacityIndex(idx)}
              >
                {cap.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CapacitySection;
