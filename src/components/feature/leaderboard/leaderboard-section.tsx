import React from "react";

import monthlyLeaderboards from "@/data/leaderboard/monthly.json" assert { type: "json" };
import totalLeaderboards from "@/data/leaderboard/total.json" assert { type: "json" };

import { cn } from "@/utils/style";

interface LeaderboardSectionProps {
  rank?: "monthly-ranking" | "total-ranking";
}

const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  rank = "total-ranking",
}) => {
  return (
    <aside className="border bg-white md:w-72 h-fit">
      <h3 className="text-base md:lg font-medium text-[#323c3f] px-3 py-2 text-center">
        BẢNG XẾP HẠNG {rank === "total-ranking" ? "TỔNG" : "THÁNG"}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-2 text-center font-semibold text-gray-700 w-10">
                Hạng
              </th>
              <th className="py-2 px-2 text-center font-semibold text-gray-700">
                Tên
              </th>
              <th className="py-2 px-2 text-center font-semibold text-gray-700">
                Điểm
              </th>
            </tr>
          </thead>
          <tbody>
            {(rank === "total-ranking"
              ? totalLeaderboards
              : monthlyLeaderboards
            )
              .slice(0, 20)
              .map((entry: { rank: number; name: string; score: number }) => (
                <tr key={entry.rank} className="border-b last:border-b-0">
                  <td
                    className={cn(
                      "py-2 px-2 font-bold text-gray-600 text-center",
                      {
                        "text-yellow-500": entry.rank === 1,
                        "text-gray-400": entry.rank === 2,
                        "text-orange-400": entry.rank === 3,
                      }
                    )}
                  >
                    {entry.rank}
                  </td>
                  <td className="py-2 px-2 font-medium line-clamp-1 text-center">
                    {entry.name}
                  </td>
                  <td className="py-2 px-2 text-center text-primary-default font-semibold">
                    {entry.score}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default LeaderboardSection;
