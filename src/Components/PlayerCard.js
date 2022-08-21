function PlayerCard(props){
  const playerName = props.name;
  const playerPosition = props.position;
  const playerImage = props.image;

  return (
    <div className="player-card">
      <div className="player-personal-con">
        <div className="position">{playerPosition}</div>
        <div className="name">{playerName}</div>
      </div>
    </div>
  );
}

export default PlayerCard;