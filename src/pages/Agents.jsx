import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Agents() {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState("All");

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((response) => {
        const playableAgents = response.data.data.filter(
          (agent) => agent.isPlayableCharacter
        );
        setAgents(playableAgents);
        setFilteredAgents(playableAgents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching agents:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // Role descriptions
  const roleDescriptions = {
    All: "Explore all the Valorant agents and their unique abilities.",
    Initiator:
      "Initiators help their team push into contested areas by disrupting enemies and setting up advantageous fights.",
    Duelist:
      "Duelists are the aggressive fraggers of the team, excelling at taking fights and securing eliminations.",
    Sentinel:
      "Sentinels are defensive experts, providing support by locking down areas and assisting teammates.",
    Controller:
      "Controllers manipulate the battlefield by cutting sightlines and controlling engagements with their utility.",
  };

  // Function to filter agents by role
  const handleFilter = (role) => {
    setSelectedRole(role);
    if (role === "All") {
      setFilteredAgents(agents);
    } else {
      setFilteredAgents(
        agents.filter((agent) => agent.role?.displayName === role)
      );
    }
  };

  if (loading) return <p className="text-center text-lg min-h-screen">Loading agents...</p>;
  if (error)
    return (
      <p className="text-center text-lg min-h-screen">Error fetching agents.</p>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-red-400 text-center">
        Valorant Agents
      </h1>
      <hr className="border-red-500 w-full mt-2" />

      {/* Role Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6 no-underline">
        {Object.keys(roleDescriptions).map((role) => (
          <button
            key={role}
            onClick={() => handleFilter(role)}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-all no-underline ${
              selectedRole === role
                ? "bg-red-400"
                : "bg-gray-700 hover:bg-red-500"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Role Description */}
      <div className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-center shadow-lg no-underline">
        <p className="text-lg font-semibold no-underline">
          {roleDescriptions[selectedRole]}
          <br />
          Click To see details
        </p>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 no-underline">
        {filteredAgents.map((agent) => (
          <Link to={`/agent/${agent.uuid}`} key={agent.uuid}>
            <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer no-underline">
              {/* Role Icon in Top-Right Corner */}
              {agent.role?.displayIcon && (
                <img
                  src={agent.role.displayIcon}
                  alt={agent.role.displayName}
                  className="absolute top-3 right-3 w-8 h-8 no-underline"
                />
              )}

              {/* Agent Image */}
              <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                className="w-full h-60 object-cover rounded-lg no-underline"
              />

              {/* Agent Details */}
              <h2 className="text-xl font-semibold text-white mt-3">
                {agent.displayName}
              </h2>
              <p className="text-gray-400 text-sm no-underline">
                {agent.role?.displayName || "No Role"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Agents;
