import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import GameGenres from '../game-genres/GameGenres';
import styles from './GameItem.module.css';

const GameItem = ({ title, genres, image, price, game }) => {
	return (
		<div className={styles.gameitem}>
			<GameCover image={image} />
			<div className={styles.details}>
				<span className={styles.title}>{title}</span>
				<div className={styles.genres}>
					{genres.map((item) => (
						<GameGenres genre={item} key={item} />
					))}
				</div>
				<div className={styles.buy}>
					<GameBuy price={price} game={game} />
				</div>
			</div>
		</div>
	);
};
export default GameItem;
