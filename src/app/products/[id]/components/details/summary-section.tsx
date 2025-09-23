import { Capacity } from "@/types/perfume";

interface SummarySectionProps {
  name: string;
  description: string;
  capacities?: Capacity[];
  selectedCapacityIndex?: number;
  price?:
    | {
        from: number;
        to: number;
      }
    | number;
  inStock?: boolean;
}

const SummarySection: React.FC<SummarySectionProps> = ({
  name,
  description,
  capacities,
  selectedCapacityIndex,
  price,
  inStock,
}) => {
  const renderPrice = () => {
    if (capacities) {
      const lengthOfCapacities = capacities.length;
      if (!lengthOfCapacities) return "0đ";

      if (typeof selectedCapacityIndex !== "undefined") {
        const selectedCapacity = capacities[selectedCapacityIndex];
        if (selectedCapacity) {
          return `${selectedCapacity.price.toLocaleString("vi-VN")}đ`;
        }
      }
      return `${capacities[0]?.price.toLocaleString("vi-VN")}đ`;
    }
    if (price) {
      return `${(price || 0).toLocaleString("vi-VN")}đ`;
    }
    return "0đ";
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-[#191919] md:text-[22px]">
          {name}
        </h1>
        <p className="flex gap-1 text-xs font-bold md:text-sm">
          <span className="text-[#42495B]">Tình trạng:</span>
          <span className="text-primary-default font-normal">
            {inStock ? "Còn hàng" : "Hết hàng"}
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
