import "./Players.css";

const Players = (data) => {
  return (
    <div className="card-container">
      {data.obj1.map((player) => (
        <div key={player.id} className="card">
          <h3>{player.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Players;