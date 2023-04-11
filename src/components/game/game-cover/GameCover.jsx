import styles from './GameCover.module.css';

const GameCover = ({ image, style = {} }) => {
	return (
		<div
			className={styles.cover}
			style={{ backgroundImage: `url(${image})`, ...style }}
		/>
	);
};
export default GameCover;
