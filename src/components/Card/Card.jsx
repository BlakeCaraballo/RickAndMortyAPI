import styles from './Card.module.css';

const Card = ({ character }) => {
  return (
    <div className={styles.card}>
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <p>{character.status}</p>
      <p>{character.gender}</p>
      <p>{new Date(character.created).toLocaleDateString()}</p>
    </div>
  );
};

export default Card;