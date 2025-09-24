import React from "react";

import leaderboards from "@/data/leaderboard/data.json" assert { type: "json" };

const LeaderboardSection = () => {
  return (
    <aside className="border bg-white md:w-72 h-fit">
      <h3 className="text-base md:lg font-medium text-[#323c3f] px-3 py-2">
        BẢNG XẾP HẠNG
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-2 text-left font-semibold text-gray-700 w-10">
                Hạng
              </th>
              <th className="py-2 px-2 text-left font-semibold text-gray-700">
                Tên
              </th>
              <th className="py-2 px-2 text-right font-semibold text-gray-700">
                Điểm
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboards
              .slice(0, 10)
              .map((entry: { rank: number; name: string; score: number }) => (
                <tr key={entry.rank} className="border-b last:border-b-0">
                  <td
                    className={`py-2 px-2 font-bold ${
                      entry.rank === 1
                        ? "text-yellow-500"
                        : entry.rank === 2
                          ? "text-gray-400"
                          : entry.rank === 3
                            ? "text-orange-400"
                            : "text-gray-600"
                    }`}
                  >
                    {entry.rank}
                  </td>
                  <td className="py-2 px-2 font-medium line-clamp-1">
                    {entry.name}
                  </td>
                  <td className="py-2 px-2 text-right text-primary-default font-semibold">
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
