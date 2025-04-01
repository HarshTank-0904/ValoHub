import { useState, useEffect } from "react";
import axios from "axios";

function WeaponsPage() {
  const [gear, setGear] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [filteredWeapons, setFilteredWeapons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch Gear Data
    axios
      .get("https://valorant-api.com/v1/gear")
      .then((response) => setGear(response.data.data))
      .catch((error) => console.error("Error fetching gear:", error));

    // Fetch Weapons Data
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((response) => {
        const sortedWeapons = response.data.data.sort((a, b) =>
          a.shopData?.category.localeCompare(b.shopData?.category)
        );
        setWeapons(sortedWeapons);
        setFilteredWeapons(sortedWeapons);
      })
      .catch((error) => console.error("Error fetching weapons:", error))
      .finally(() => setLoading(false));
  }, []);

  // Function to filter weapons by category
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredWeapons(weapons);
    } else {
      setFilteredWeapons(
        weapons.filter((weapon) => weapon.shopData?.category === category)
      );
    }
  };

  if (loading) return <p className="text-center text-lg min-h-screen">Loading...</p>;
  if (error) return (
    <p className="text-center text-lg min-h-screen">Error fetching data.</p>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">
        Valorant Gears And Weapons
      </h1>{" "}
      <hr className="border-red-500 w-full mt-2" />
      {/* 🔹 Gear Section */}
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">Gear</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gear.map((item) => (
          <div
            key={item.uuid}
            className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={item.displayIcon}
              alt={item.displayName}
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-lg font-semibold text-white">
              {item.displayName}
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Cost: {item.shopData?.cost || "N/A"}
            </p>
            <p className="text-gray-300 text-xs mt-2 px-6">
              {item.description || "No Description Available"}
            </p>
          </div>
        ))}
      </div>
      {/* 🔹 Filter Buttons */}
      <h2 className="text-2xl font-semibold text-gray-300 mt-8 mb-4">
        Weapons
      </h2>
      <div className="flex justify-center space-x-4 mb-6">
        {[
          "All",
          "SMGs",
          "Shotguns",
          "Rifles",
          "Sniper Rifles",
          "Heavy Weapons",
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-all ${
              selectedCategory === category
                ? "bg-red-400"
                : "bg-gray-700 hover:bg-red-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* 🔹 Weapons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWeapons.map((weapon) => (
          <div
            key={weapon.uuid}
            className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center relative"
          >
            {/* Weapon Image */}
            <img
              src={weapon.displayIcon}
              alt={weapon.displayName}
              className="size-40 object-contain mb-2 hover:bg-slate-600 rounded-3xl"
            />

            {/* Weapon Name */}
            <h3 className="text-lg font-semibold text-white">
              {weapon.displayName}
            </h3>

            {/* Category & Cost */}
            <p className="text-gray-400 text-sm">
              {weapon.shopData?.category || "No Category"}
            </p>
            <p className="text-gray-300 text-sm">
              Cost: {weapon.shopData?.cost || "N/A"}
            </p>

            {/* Fire Rate & Magazine */}
            <p className="text-gray-300 text-sm">
              Fire Rate: {weapon.weaponStats?.fireRate || "N/A"}
            </p>
            <p className="text-gray-300 text-sm">
              Magazine: {weapon.weaponStats?.magazineSize || "N/A"} rounds
            </p>

            {/* Damage Stats */}
            {weapon.weaponStats?.damageRanges?.length > 0 && (
              <div className="text-gray-400 text-xs mt-2">
                <strong>Damage Stats:</strong>
                {weapon.weaponStats.damageRanges.map((range, index) => (
                  <p key={index}>
                    {range.rangeStartMeters}m - {range.rangeEndMeters}m:{" "}
                    <strong>{range.headDamage}</strong> head,{" "}
                    <strong>{range.bodyDamage}</strong> body,{" "}
                    <strong>{range.legDamage}</strong> leg
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeaponsPage;
