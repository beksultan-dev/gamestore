import { useSelector } from 'react-redux';
import styles from './GamePage.module.css';
import GameCover from '../../components/game/game-cover/GameCover';
import Genres from '../../custom/Genres';
import GameBuy from '../../components/game/game-buy/GameBuy';

const GamePage = () => {
	const game = useSelector((state) => state.games.currentGame);

	if (!game) return null;

	return (
		<div className={styles.gamepage}>
			<h1 className={styles.title}>{game.title}</h1>
			<div className={styles.content}>
				<div className={styles.left}>
					<iframe
						width="90%"
						height="400px"
						src={game.video}
						title="Youtube Video Player"
						frameBorder="0"
					></iframe>
				</div>
				<div className={styles.right}>
					<GameCover image={game.image} />
					<p>{game.description}</p>
					<p className={styles.text}>Популярные метки:</p>
					<div className={styles.genres}>
						<Genres genres={game.genres} />
					</div>
					<div className={styles.buy_game}>
						<GameBuy game={game} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default GamePage;
