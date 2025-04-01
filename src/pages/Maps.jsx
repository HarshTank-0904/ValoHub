import { useState, useEffect } from "react";
import axios from "axios";

function Maps() {
  const [rankedMaps, setRankedMaps] = useState([]);
  const [otherMaps, setOtherMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/maps")
      .then((response) => {
        const allMaps = response.data.data;

        // Separate maps into Ranked and Other categories
        const ranked = allMaps.filter((map) => map.tacticalDescription);
        const others = allMaps.filter((map) => !map.tacticalDescription);

        setRankedMaps(ranked);
        setOtherMaps(others);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching maps:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg min-h-screen">Loading maps...</p>;
  if (error) return (
    <p className="text-center text-lg min-h-screen">Error fetching maps.</p>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">
        Valorant Maps
      </h1>
      <hr className="border-red-500 w-full mt-2" />
      <br />

      {/* Ranked Maps Section */}
      {rankedMaps.length > 0 && (
        <div>
          <h3 className="text-2xl text-red-400 font-bold">Standard Maps</h3>
          <hr className="border-red-500 w-full mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankedMaps.map((map) => (
              <div
                key={map.uuid}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform relative flex flex-col items-center"
              >
                {/* Map Name */}
                <h3 className="text-xl font-semibold text-white mt-2">
                  {map.displayName}
                </h3>

                {/* Map Coordinates */}
                <p className="text-gray-400 text-sm">
                  Sites: {map.tacticalDescription}
                </p>

                {/* List View Icon (Horizontal, placed on top) */}
                {map.splash && (
                  <img
                    src={map.splash}
                    alt="List View Icon"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                )}

                {/* Display Icon (Under List View Icon) */}
                {map.displayIcon && (
                  <img
                    src={map.displayIcon}
                    alt="Display Icon"
                    className="w-full h-80 object-cover rounded-lg mt-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Maps Section */}
      {otherMaps.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl text-red-400 font-bold">Other Maps</h3>
          <hr className="border-red-500 w-full mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMaps.slice(0, -1).map((map) => (
              <div
                key={map.uuid}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform relative flex flex-col items-center"
              >
                {/* Map Name */}
                <h3 className="text-xl font-semibold text-white mt-2">
                  {map.displayName}
                </h3>

                {/* Map Type */}
                <p className="text-gray-400">
                  {map.displayIcon ? (
                    <span className="text-red-400">Team DeathMatch(TDM)</span>
                  ) : (
                    <span className="text-red-400">Training Map</span>
                  )}
                </p>

                {/* List View Icon (Horizontal, placed on top) */}
                {map.splash && (
                  <img
                    src={map.splash}
                    alt="List View Icon"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                )}

                {/* Display Icon (Under List View Icon) */}
                {map.displayIcon && (
                  <img
                    src={map.displayIcon}
                    alt="Display Icon"
                    className="w-full h-64 object-cover rounded-lg mt-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Maps;
