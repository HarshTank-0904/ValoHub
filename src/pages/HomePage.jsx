import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="container flex flex-col">


        {/*What is valorant*/}

        <div className="how2Play flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="desc flex flex-col top-0 md:w-2/3 -mt-15 ">
            <h1 className="title valo-font text-3xl font-bold uppercase">
              What is valorant ?
              <Link
                to="/details"
                className="text-xs text-blue-400 hover:underline"
              >
                (details)
              </Link>
            </h1>
            <hr className="border-red-500 w-auto" />
            <p className="justify-center align-baseline">
              Valorant is a 5v5 tactical first-person shooter developed by Riot
              Games, where players choose agents with unique abilities and
              compete in objective-based rounds. A match consists of up to 25
              rounds, with teams switching sides after 12 rounds. Attackers aim
              to plant and detonate the Spike, while defenders try to stop them
              or defuse it. Each round starts with a buy phase to purchase
              weapons and abilities, followed by intense combat where teamwork
              and strategy are crucial. The first team to win 13 rounds wins the
              match, with overtime played if both teams reach 12-12 in
              competitive mode. Players must rely on precise aim, quick
              decision-making, and coordination to secure victory.
            </p>
          </div>
          <Link
            to="/details"
            className="photo md:w-1/3 rounded hover:border border-[--rd] h-fit"
          >
            <img
              src="/valoH2p.jpg"
              alt="Valorant"
              className="w-full rounded-lg shadow-lg mt-5 cursor-pointer"
            />
          </Link>
        </div>

        {/*Agents*/}

        <div className="how2Play flex flex-col md:flex-row items-center gap-6 p-6">
          <Link
            to="/agents"
            className="photo md:w-1/3 rounded hover:border border-[--rd]"
          >
            <img
              src="/valoAgents.jpg"
              alt="Valorant"
              className="w-full rounded-lg shadow-lg mt-5 cursor-pointer"
            />
          </Link>
          <div className="desc flex flex-col top-0 md:w-2/3 -mt-15 ">
            <h1 className="title valo-font text-3xl font-bold uppercase">
              Agents{" "}
              <Link
                to="/agents"
                className="text-xs text-blue-400 hover:underline"
              >
                (details)
              </Link>
            </h1>
            <hr className="border-red-500 w-auto" />
            <p className="justify-center align-baseline">
              Agents in Valorant are unique characters, each with their own
              abilities that complement different playstyles. They are divided
              into four roles: duelists, who excel in aggressive combat;
              initiators, who disrupt enemy positions; controllers, who shape
              the battlefield with smokes and utility; and sentinels, who
              specialize in defense and support. Each agent has a signature
              ability, two purchasable abilities, and an ultimate that charges
              over time. Choosing the right agent for your team and mastering
              their abilities is key to success in every match. New agents are
              regularly added, keeping the game fresh and competitive.
            </p>
          </div>
        </div>

        {/*Maps*/}

        <div className="intro flex flex-col md:flex-row items-center gap-6 p-6">
          {/* Left Side - Description */}
          <div className="desc flex flex-col top-0 md:w-2/3 -mt-4">
            <h1 className="title valo-font text-3xl font-bold uppercase">
              Maps{" "}
              <Link to="/maps" className="text-xs text-blue-400 hover:underline">
                (details)
              </Link>
            </h1>
            <hr className="border-red-500 w-auto" />
            <p className="justify-center align-baseline">
              Maps in Valorant are designed to encourage strategic gameplay,
              with unique layouts, multiple pathways, and key areas for
              engagements. Each map features a combination of open spaces, tight
              corners, and vertical elements that require teamwork and tactical
              positioning. Some maps have special mechanics, like moving doors
              or teleporters, adding an extra layer of strategy. Players must
              learn callouts, site setups, and rotation paths to gain an
              advantage. New maps are introduced over time, keeping the game
              dynamic and challenging for both new and experienced players.
            </p>
          </div>

          {/* Right Side - Clickable Image */}
          <div className="relative md:w-1/3 h-60 w-80 overflow-hidden rounded-lg">
            <Link to="/maps" className="block w-full h-full">
              <img
                src="/valoMaps.jpeg"
                alt="Valorant"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:border border-[--rd]"
              />
            </Link>
          </div>
        </div>

        {/*Game modes*/}

        <div className="how2Play flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="relative md:w-1/3 h-60 w-80 overflow-hidden rounded-lg">
            <Link to="/gamemodes" className="block w-full h-full">
              <img
                src="/valoMods.jpeg"
                alt="Valorant"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:border border-[--rd]"
              />
            </Link>
          </div>

          <div className="desc flex flex-col top-0 md:w-2/3 -mt-15 ">
            <h1 className="title valo-font text-3xl font-bold uppercase">
              Game Modes{" "}
              <Link
                to="/gamemodes"
                className="text-xs text-blue-400 hover:underline"
              >
                (details)
              </Link>
            </h1>
            <hr className="border-red-500 w-auto" />
            <p className="justify-center align-baseline">
              Valorant offers several game modes, each catering to different
              playstyles and levels of commitment. The main mode is Competitive,
              where players engage in a ranked first-to-13-round match with an
              economy system and skill-based matchmaking. Unrated follows the
              same format but without rank pressure. Spike Rush is a shorter,
              fast-paced mode where players start with random weapons, and the
              first team to win four rounds secures victory. Deathmatch provides
              a free-for-all environment to practice aiming without abilities.
              Escalation is a team-based mode where players cycle through
              different weapons as they score kills. Swiftplay offers a
              condensed version of standard matches with a first-to-five-round
              format. Custom games allow players to create private lobbies for
              practice or tournaments. Each mode provides a unique experience,
              catering to both casual and competitive players.
            </p>
          </div>
        </div>

        {/*Weapons*/}

        <div className="intro flex flex-col md:flex-row items-center gap-6 p-6">
          {/* Left Side - Description */}
          <div className="desc flex flex-col top-0 md:w-2/3 -mt-4">
            <h1 className="title valo-font text-3xl font-bold uppercase">
              Weapons{" "}
              <Link
                to="/weapons"
                className="text-xs text-blue-400 hover:underline"
              >
                (details)
              </Link>
            </h1>
            <hr className="border-red-500 w-auto" />
            <p className="justify-center align-baseline">
              Weapons in Valorant are diverse, ranging from pistols and rifles
              to shotguns and sniper rifles, each suited for different
              playstyles. The economy system allows players to buy weapons at
              the start of each round, making strategic purchasing crucial.
              Rifles like the Vandal and Phantom are the most popular for their
              versatility, while snipers like the Operator provide long-range
              dominance. Sidearms, SMGs, and shotguns are useful for eco rounds
              and close-quarters combat. Mastering recoil control, burst firing,
              and weapon economy is key to winning fights and securing
              victories.
            </p>
          </div>

          {/* Right Side - Clickable Image */}
          <div className="relative md:w-1/3 h-60 w-80 overflow-hidden rounded-lg">
            <Link to="/weapons" className="block w-full h-full">
              <img
                src="/valoguns.jpeg"
                alt="Valorant"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:border border-[--rd]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
