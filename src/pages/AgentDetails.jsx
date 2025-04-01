import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function AgentDetails() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://valorant-api.com/v1/agents/${id}`)
      .then((response) => {
        setAgent(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching agent details:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center text-lg min-h-screen">
        Loading agent details...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-lg min-h-screen">
        Error fetching agent details.
      </p>
    );

  return (
    <div className="container mx-auto p-6">
      <Link to="/agents" className="text-blue-400">
        ← Back to Agents
      </Link>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
        <div className="relative w-full h-96">
          {/* Background Image (Behind the Portrait) */}
          <img
            src={agent.background}
            alt={agent.displayName}
            className="absolute w-full h-full object-cover opacity-45"
          />

          {/* Full Portrait (In Front) */}
          <img
            src={agent.fullPortrait}
            alt={agent.displayName}
            className="relative w-full h-full object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-white mt-4">
          {agent.displayName}
        </h1>
        <p className="text-gray-400">{agent.description}</p>

        {/* Role Info */}
        {agent.role && (
          <div className="mt-4">
            <h3 className="text-lg text-red-400">
              Role: {agent.role.displayName}
            </h3>
            <p className="text-gray-300">{agent.role.description}</p>
          </div>
        )}

        {/* Abilities */}
        <div className="mt-6">
          <h3 className="text-lg text-red-400">Abilities:</h3>
          <div className="grid grid-cols-2 gap-4">
            {agent.abilities.map((ability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <img
                  src={ability.displayIcon}
                  alt={ability.displayName}
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-white">{ability.displayName}</h4>
                  <p className="text-gray-400 text-sm">{ability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDetails;
