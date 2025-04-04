import "../index.css";
import CompetitiveTiers from "../components/CompetitiveTiers";

const currencies = [
  {
    name: "Valorant Points (VP)",
    description: "Purchased with real money; used to buy skins, Battle Passes, and other premium items.",
    image: "/vp.png",
  },
  {
    name: "Radianite Points (RP)",
    description: "Used to upgrade weapon skins; can be bought with VP.",
    image: "/rp.png",
  },
  {
    name: "Kingdom Credits (KC)",
    description: "Earned by playing matches; used to unlock agents and select cosmetics.",
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
      <p className="text-sm text-gray-300 text-center mt-2">{currency.description}</p>
    </div>
  );
};

const InfoSection = ({ title, children }) => (
  <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
    <h3 className="text-2xl text-red-400 font-bold">{title}</h3>
    <hr className="border-red-500 w-full mt-2" />
    {children}
  </div>
);

function Details() {
  return (
    <div className="container flex flex-col min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">Valorant</h1>
      <hr className="border-red-400 w-full mt-2" />

      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md flex flex-col gap-2">
        <span><strong>Publisher:</strong> Riot Games</span>
        <span><strong>Release Date:</strong> June 2, 2020</span>
        <span><strong>Current Version:</strong> 10.06 +</span>
        <span><strong>Latest Update:</strong> April 2024</span>
      </div>

      <InfoSection title="About Valorant">
        <p className="mt-4 text-gray-300">
          Valorant is a free-to-play tactical first-person shooter (FPS) developed and published by Riot Games. 
          It combines the strategic gunplay of Counter-Strike with unique character abilities, creating a fast-paced 
          yet highly tactical experience. The game was officially released on June 2, 2020, for Windows.
        </p>
      </InfoSection>

      <InfoSection title="Key Features">
        <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
          <li>5v5 Tactical Battles – Teams compete in attack and defense rounds</li>
          <li>Unique Agents – Each character has special abilities and playstyles</li>
          <li>Diverse Game Modes – Ranked, casual matches, and special events</li>
          <li>Wide Weapon Arsenal – Pistols, rifles, snipers, and more</li>
          <li>Economy-Based Gameplay – Strategic resource management</li>
        </ul>
      </InfoSection>

      <InfoSection title="Gameplay and Objectives">
        <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
          <li>Teams alternate between attacking and defending</li>
          <li>Attackers must plant the Spike (bomb) and defend it</li>
          <li>Defenders must prevent the plant or defuse the Spike</li>
          <li>First team to win 13 rounds wins the match</li>
          <li>Each round lasts 100 seconds with a 30-second buy phase</li>
        </ul>
      </InfoSection>

      <InfoSection title="Economy System">
        <div className="mt-4 text-gray-300 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-red-400">Earning Credits:</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Round Win: 3,000 credits</li>
              <li>Round Loss: 1,900 credits (increases by 500 per consecutive loss)</li>
              <li>Spike Plant: 300 credits</li>
              <li>Kill Reward: 200 credits per kill</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-red-400">Round Types:</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full Buy: Complete loadout with rifles and abilities</li>
              <li>Half Buy: Partial loadout to save credits</li>
              <li>Eco Round: Minimal spending to save for next round</li>
              <li>Force Buy: Full buy despite low economy</li>
            </ul>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="Currency System">
        <div className="px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {currencies.map((currency, index) => (
            <CurrencyCard key={index} currency={currency} />
          ))}
        </div>
      </InfoSection>

      <div className="px-8 mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
        <CompetitiveTiers />
      </div>
    </div>
  );
}

export default Details;
