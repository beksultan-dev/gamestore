import styles from './GameGenres.module.css';

const GameGenres = ({ genre }) => {
	return <div className={styles.genre}>{genre}</div>;
};
export default GameGenres;
