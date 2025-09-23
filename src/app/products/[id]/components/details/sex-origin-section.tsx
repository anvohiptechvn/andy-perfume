interface SexOriginSectionProps {
  sex: string;
  origin?: string;
}
const SexOriginSection: React.FC<SexOriginSectionProps> = ({ sex, origin }) => {
  return (
    <>
      {(sex || origin) && (
        <div className="flex flex-col gap-4">
          {sex && (
            <div className="flex flex-col gap-1">
              <span className="font-bold text-[#42495B]">Giới Tính</span>
              <div className="w-fit border px-4 py-1.5 text-[#191919]">
                {sex === "male"
                  ? "Nam"
                  : sex === "female"
                    ? "Nữ"
                    : sex === "unisex"
                      ? "Unisex"
                      : sex}
              </div>
            </div>
          )}
          {origin && (
            <div className="flex flex-col gap-1">
              <span className="font-bold text-[#42495B]">Xuất Xứ</span>
              <div className="w-fit border px-4 py-1.5 text-[#191919]">
                {origin}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SexOriginSection;
