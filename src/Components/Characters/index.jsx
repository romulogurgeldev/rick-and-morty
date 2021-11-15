import CharCard from "../CharCard";
import "./styles.css";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus Personagens</h1>
      <div className="container">
        {characterList.map((character) => (
          <CharCard key={character.id} character={character}></CharCard>
        ))}
      </div>
    </div>
  );
};

export default Characters;
