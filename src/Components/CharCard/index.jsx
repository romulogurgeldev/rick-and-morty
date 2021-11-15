import "./styles.css";

const CharCard = ({ character }) => {
  const alive = (status) => {
    if (status === "Alive") {
      return "alive";
    }
    return "die";
  };

  return (
    <li key={character.id} className={alive(character.status)}>
      <h3>{character.name}</h3>
      <div className={"div-card"}>
        <img src={character.image} alt={character.name} />
      </div>
    </li>
  );
};

export default CharCard;
