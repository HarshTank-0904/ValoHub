import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import CompetitiveTiers from "../components/CompetitiveTiers";

const currencies = [
  {
    name: "Valorant Points (VP)",
    description:
      "Purchased with real money; used to buy skins, Battle Passes, and other premium items.",
    image: "/vp.png",
  },
  {
    name: "Radianite Points (RP)",
    description: "Used to upgrade weapon skins; can be bought with VP.",
    image: "/rp.png",
  },
  {
    name: "Kingdom Credits (KC)",
    description:
      "Earned by playing matches; used to unlock agents and select cosmetics.",
    image: "/kc.png",
  },
];

const CurrencyCard = ({ currency }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white flex flex-col items-center transform hover:scale-105 transition duration-300">
      <img
        src={currency.image}
        alt={currency.name}
        className="w-20 h-20 mb-4 rounded-full shadow-md"
      />
      <h3 className="text-lg font-bold text-red-400">{currency.name}</h3>
      <p className="text-sm text-gray-300 text-center mt-2">
        {currency.description}
      </p>
    </div>
  );
};

function Details() {
  const [versionData, setVersionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/version")
      .then((response) => {
        setVersionData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="min-h-screen text-center text-lg">Loading...</p>;
  if (error)
    return (
      <p className="min-h-screen text-center text-lg">Error fetching data.</p>
    );

  const formattedVersion = versionData.version.split(".").slice(0, 2).join(".");
  const formattedDate = versionData.buildDate.split("T")[0];

  return (
    <div className="container flex flex-col min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">
        Valorant
      </h1>
      <hr className="border-red-400 w-full mt-2" />

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md flex flex-col gap-2">
        <span>
          <strong>Publisher:</strong> Riot Games
        </span>
        <span>
          <strong>Release Date:</strong> June 2, 2020
        </span>
        <span>
          <strong>Current Version:</strong> {formattedVersion}
        </span>
        <span>
          <strong>Latest Update On:</strong> {formattedDate}
        </span>
      </div>

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl text-red-400 font-bold">About Valorant</h3>
        <hr className="border-red-500 w-full mt-2" />
        <p className="mt-4 text-gray-300">
          Valorant is a free-to-play tactical first-person shooter (FPS)
          developed and published by Riot Games. It was officially released on
          June 2, 2020, for Windows. The game combines the strategic gunplay of
          Counter-Strike: Global Offensive (CS:GO) with the unique character
          abilities of Overwatch, creating a fast-paced yet highly tactical
          experience.
        </p>
      </div>

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl text-red-400 font-bold">Key Features</h3>
        <hr className="border-red-500 w-full mt-2" />

        <ul className="list-disc pl-6 mt-4 text-gray-300">
          <li>
            5v5 Tactical Battles – Teams compete in attack and defense rounds.
          </li>
          <li>Unique Agents – Each character has special abilities.</li>
          <li>Diverse Game Modes – Ranked, casual matches, and events.</li>
          <li>Wide Weapon Arsenal – Pistols, rifles, snipers, and more.</li>
          <li>
            Economy-Based Gameplay – Earn credits to buy weapons and abilities.
          </li>
        </ul>
      </div>

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl text-red-400 font-bold">
          Gameplay and Objectives
        </h3>
        <hr className="border-red-500 w-full mt-2" />

        <ul className="list-disc pl-6 mt-4 text-gray-300">
          <li>Players are divided into attackers and defenders</li>

          <li>
            Attackers try to plant a Spike (bomb) and prevent defenders from
            defusing it.
          </li>
          <li>
            Defenders aim to stop attackers or defuse the Spike if it is
            planted.
          </li>
          <li>A team wins by securing 13 rounds first.</li>
        </ul>
      </div>

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl text-red-400 font-bold">Economy In Valorant</h3>
        <hr className="border-red-500 w-full mt-2" />

        <ul className="list-none pl-6 mt-4 text-gray-300">
          <li>
            <h5 className="text-[--rd] ">Earning Credits :</h5>
            <li>Round Win: 3,000 credits</li>
            <li>
              Round Loss: 1,900 credits (increases by 500 per consecutive loss,
              up to 2,900){" "}
            </li>
            <li>Spike Plant (Attackers): 300</li>
            <li>credits per player Kill Reward: 200</li>
            <li>
              credits per kill Assist Reward: None (Valorant doesn't give
              assists credit-wise)
            </li>
          </li>
          <br />
          <li>
            <h5 className="text-[--rd] ">Types of Rounds Based on Economy:</h5>
            <li>
              Full Buy Round: Buying rifles (like Vandal/Phantom), full shields,
              and all abilities.
            </li>
            <li>
              Half Buy (Force Buy): Buying cheaper weapons (Spectre, Sheriff)
              while saving some credits.
            </li>
            <li>
              Eco Round (Saving Round): Buying minimal or nothing to save for
              the next round.
            </li>
            <li>
              Bonus Round: Keeping weapons from a won pistol round (like
              Spectres) instead of upgrading immediately.
            </li>
          </li>
          <br />
          <li>
            <h5 className="text-[--rd] list-none">
              Strategic Economy Management:
            </h5>
            <li>
              If you're low on credits, your team might eco or half-buy to
              afford a full buy next round.
            </li>
            <li>
              If you lose multiple rounds, you get loss bonuses, helping you
              recover.
            </li>
            <li>
              Buying for teammates is common when you have excess credits.
            </li>
          </li>
        </ul>
      </div>

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl text-red-400 font-bold">Currency System</h3>
        <hr className="border-red-500 w-full mt-2" />

        <div className="px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {currencies.map((currency, index) => (
            <CurrencyCard key={index} currency={currency} />
          ))}
        </div>
      </div>

      <div className="px-8 mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <CompetitiveTiers />
      </div>
    </div>
  );
}

export default Details;
