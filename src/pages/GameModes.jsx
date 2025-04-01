import { useState, useEffect } from "react";
import axios from "axios";

function GameModes() {
  const [gameModes, setGameModes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultIcon = "/valo .png"; // Make sure the path is correct

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/gamemodes")
      .then((response) => {
        setGameModes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching game modes:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-lg">Loading game modes...</p>;
  if (error)
    return <p className="text-center text-lg">Error fetching game modes.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">
        Valorant Game Modes
      </h1>
      <hr className="border-red-500 w-auto mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameModes.map((mode) => (
          <div
            key={mode.uuid}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
          >
            {/* Display Icon (or default logo if not available) */}
            {(() => {
              if (mode.displayIcon) {
                return (
                  <img
                    src={mode.displayIcon}
                    alt={mode.displayName}
                    className="w-32 h-32 object-contain rounded-lg mb-6"
                  />
                );
              } else {
                return (
                  <img
                    src={defaultIcon}
                    alt={mode.displayName}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                );
              }
            })()}

            {/* Game Mode Details */}
            <h2 className="text-xl font-semibold text-white mt-3">
              {mode.displayName}
            </h2>
            <p className="text-gray-400 text-sm text-center">
              {mode.description || "No description available"}
            </p>

            {/* Estimated Duration */}
            {mode.duration && (
              <p className="text-gray-300 mt-2">
                <strong>Duration:</strong> {mode.duration} minutes
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameModes;
