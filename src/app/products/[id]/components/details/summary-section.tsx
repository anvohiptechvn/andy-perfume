import { useMemo } from "react";

import { Capacity } from "@/types/perfume";

import { getPriceString } from "@/constants/perfume";

interface SummarySectionProps {
  name: string;
  description: string;
  capacities?: Capacity[];
  selectedCapacityIndex?: number;
  price?: number;
  outOfStockFromRoot?: boolean;
}

const SummarySection: React.FC<SummarySectionProps> = ({
  name,
  description,
  capacities,
  selectedCapacityIndex,
  price,
  outOfStockFromRoot,
}) => {
  const renderPrice = () => {
    if (capacities) {
      const lengthOfCapacities = capacities.length;
      if (!lengthOfCapacities) return "0đ";

      if (typeof selectedCapacityIndex !== "undefined") {
        const selectedCapacity = capacities[selectedCapacityIndex];
        if (selectedCapacity) {
          return `${getPriceString(selectedCapacity.price)}`;
        }
      }
      return `${getPriceString(capacities[0]?.price || 0)}`;
    }
    if (price) {
      return `${getPriceString(price || 0)}`;
    }
    return "0đ";
  };

  const isOutOfStock = useMemo<boolean>(() => {
    if (capacities && capacities.length > 0) {
      if (
        typeof selectedCapacityIndex !== "undefined" &&
        capacities[selectedCapacityIndex]
      ) {
        return Boolean(capacities[selectedCapacityIndex].outOfStock);
      }
      // If no selectedCapacityIndex, check if any capacity is in stock
      return capacities.some((cap) => Boolean(cap.outOfStock));
    }
    // If no capacities, fallback to price (if price is defined, assume in stock)
    return Boolean(outOfStockFromRoot);
  }, [capacities, selectedCapacityIndex, price]);

  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-[#191919] md:text-[22px]">
          {name}
        </h1>
        <p className="flex gap-1 text-xs font-bold md:text-sm">
          <span className="text-[#42495B]">Tình trạng:</span>
          <span className="text-primary-default font-normal">
            {!isOutOfStock ? "Còn hàng" : "Hết hàng"}
          </span>
        </p>
      </div>
      <p className="text-primary-default text-xl font-medium md:text-[22px]">
        {renderPrice()}
      </p>
      <p className="tex-sm text-[#42495b] md:text-base">{description}</p>
    </>
  );
};

export default SummarySection;
