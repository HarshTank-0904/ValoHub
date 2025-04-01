import { useState, useEffect } from "react";
import axios from "axios";

function CompetitiveTiers() {
  const [groupedTiers, setGroupedTiers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/competitivetiers")
      .then((response) => {
        const latestTiers = response.data.data.at(-1).tiers.filter(
          (tier) => !tier.divisionName.includes("Unused") // Remove any unused tiers
        );

        const grouped = latestTiers.reduce((acc, tier) => {
          const level = tier.divisionName.split(" ")[0]; // Extract rank name (e.g., Bronze, Silver)
          acc[level] = acc[level] || [];
          acc[level].push(tier);
          return acc;
        }, {});

        setGroupedTiers(grouped);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading ranks...</p>;
  if (error)
    return <p className="text-center text-lg">Error fetching ranks.</p>;

  return (
    <>
      <div className="mt-6 p-6">
        <h3 className="text-2xl text-red-400 font-bold">
          Valorant Ranking System
        </h3>
        <hr className="border-red-500 w-full mt-2" />
        <div className="p-6">
          <h5 className="mt-1 text-red-400 ">
            1. Ranks & Tiers There are 9 rank divisions, each with 3 tiers
            (except for Radiant):
          </h5>
          {Object.keys(groupedTiers).map((level) => (
            <div key={level} className="mb-6 ">
              <div className="grid grid-cols-3 gap-6 mt-4 hover:scale-95 transition-transform">
                {groupedTiers[level].map((tier) => (
                  <div
                    key={tier.tier}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <img
                      src={tier.largeIcon}
                      alt={tier.divisionName}
                      className="size-16 mb-2"
                    />
                    <h3 className="text-sm font-semibold text-white">
                      {tier.tierName}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-2">
          <h5 className="mt-1 text-red-400 ">
            2. Matchmaking Rating (MMR) & Rank Rating (RR)
          </h5>
          <p>
            MMR is Riot's hidden ranking system that determines skill level.
            <br />
            RR(Rank Rating) is what players see, ranging from 0-100 points per
            rank tier.
            <br />
            Gaining 100 RR promotes you to the next tier, while dropping to 0 RR
            risks a demotion.
          </p>
        </div>

        <div className="p-2">
          <h5 className="mt-1 text-red-400 ">
            3. Placement Matches & Rank Decay
          </h5>
          <p>
            Players must complete 5 placement matches to get their initial rank.{" "}
            <br />
            Ranks don't decay over time but may soft reset at the start of new
            Acts.
          </p>
        </div>

        <div className="p-2">
          <h5 className="mt-1 text-red-400 ">4. How to Rank Up? </h5>
          <p>
            Winning matches and performing well individually increases your RR.{" "}
            <br />
            Losing games results in RR loss. <br /> Performance matters more in
            lower ranks but becomes strictly win/loss-based in higher ranks
            (Ascendant & above).
          </p>
        </div>

        <div className="p-2">
          <h5 className="mt-1 text-red-400 ">
            5. Leaderboards & Radiant Eligibility
          </h5>
          <p>
            Only the top 500 players in a region can achieve Radiant rank. <br />
            Immortal and Radiant players are displayed on the Regional
            Leaderboard
          </p>
        </div>
      </div>
    </>
  );
}

export default CompetitiveTiers;
