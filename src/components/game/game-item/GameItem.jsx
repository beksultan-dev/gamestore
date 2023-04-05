import { useNavigate } from 'react-router-dom';
import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import styles from './GameItem.module.css';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../../store/games/reducer';
import Genres from '../../../custom/Genres';

const GameItem = ({ title, genres, image, price, game }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/game/${game.title}`.toLowerCase());
	};

	return (
		<div className={styles.gameitem} onClick={handleClick}>
			<GameCover image={image} />
			<div className={styles.details}>
				<span className={styles.title}>{title}</span>
				<div className={styles.genres}>
					<Genres genres={genres} />
				</div>
				<div className={styles.buy}>
					<GameBuy price={price} game={game} />
				</div>
			</div>
		</div>
	);
};
export default GameItem;
