import "../index.css";
import CompetitiveTiers from "../components/CompetitiveTiers";

const currencies = [
  {
    name: "Valorant Points (VP)",
    description:
      "Premium currency used to buy skins, Battle Passes, and bundles.",
    image: "/vp.png",
  },
  {
    name: "Radianite Points (RP)",
    description: "Used to evolve weapon skins and unlock special effects.",
    image: "/rp.png",
  },
  {
    name: "Kingdom Credits (KC)",
    description:
      "Earned through gameplay, used to unlock agents and cosmetics.",
    image: "/kc.png",
  },
];

const CurrencyCard = ({ currency }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-md text-white flex flex-col items-center hover:scale-105 transition-transform">
    <img
      src={currency.image}
      alt={currency.name}
      className="w-20 h-20 rounded-full shadow mb-4"
    />
    <h3 className="text-lg font-bold text-red-400">{currency.name}</h3>
    <p className="text-center text-gray-300 mt-2">{currency.description}</p>
  </div>
);

const InfoBox = ({ title, children }) => (
  <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-red-400">{title}</h2>
    <hr className="border-red-500 mt-2" />
    <div className="mt-4 text-gray-300">{children}</div>
  </div>
);

function Details() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">
        VALORANT OVERVIEW
      </h1>
      <hr className="border-red-400 mt-2 mb-6" />

      <div className="bg-gray-800 p-6 rounded-lg shadow flex flex-col gap-2">
        <span>
          <strong>Developer:</strong> Riot Games
        </span>
        <span>
          <strong>Genre:</strong> Tactical FPS
        </span>
        <span>
          <strong>Initial Launch:</strong> June 2, 2020
        </span>
        <span>
          <strong>Platform:</strong> Microsoft Windows
        </span>
        <span>
          <strong>Current Patch:</strong> 10.06
        </span>
        <span>
          <strong>Last Updated:</strong> April 2025
        </span>
      </div>

      <InfoBox title="What is Valorant?">
        <p>
          Valorant is a competitive, team-based first-person shooter where
          players take control of "Agents"— each with unique abilities—and
          compete in fast-paced 5v5 matches. Strategy, precision shooting, and
          teamwork are essential to success.
        </p>
      </InfoBox>

      <InfoBox title="Core Gameplay">
        <ul className="list-disc pl-6 space-y-2">
          <li>Teams are divided into Attackers and Defenders</li>
          <li>The objective is to plant or defuse a device called the Spike</li>
          <li>Each match is a best of 25 rounds (first to 13 wins)</li>
          <li>Players earn in-game credits to buy weapons and abilities</li>
          <li>Communication and coordination heavily influence outcomes</li>
        </ul>
      </InfoBox>

      <InfoBox title="Game Modes">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Unrated:</strong> Standard mode for casual play
          </li>
          <li>
            <strong>Competitive:</strong> Ranked matches affecting your MMR
          </li>
          <li>
            <strong>Spike Rush:</strong> Quick 4-round games
          </li>
          <li>
            <strong>Deathmatch:</strong> Warm-up mode with respawns and
            unlimited ammo
          </li>
          <li>
            <strong>Premier:</strong> Organized team-based tournament format
          </li>
        </ul>
      </InfoBox>

      <InfoBox title="Economy & Strategy">
        <p>
          Each round, players earn credits based on performance and round
          outcome. Smart buying and saving decisions are crucial to maintain
          momentum. Rounds can be categorized into:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Full Buy:</strong> Optimal gear and utilities
          </li>
          <li>
            <strong>Eco:</strong> Minimal spending to save for future rounds
          </li>
          <li>
            <strong>Force Buy:</strong> Buying with limited credits in a risky
            round
          </li>
          <li>
            <strong>Bonus:</strong> Using leftover weapons to build economy
            after a win
          </li>
        </ul>
      </InfoBox>

      <InfoBox title="In-Game Currency">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {currencies.map((currency, i) => (
            <CurrencyCard key={i} currency={currency} />
          ))}
        </div>
      </InfoBox>

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow">
        <CompetitiveTiers />
      </div>
    </div>
  );
}

export default Details;
