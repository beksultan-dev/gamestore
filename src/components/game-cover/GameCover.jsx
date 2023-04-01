import styles from './GameCover.module.css';

const GameCover = ({ image }) => {
	return (
		<div className={styles.cover} style={{ backgroundImage: `url(${image})` }} />
	);
};
export default GameCover;
