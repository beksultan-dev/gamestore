import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Genres from '../../../custom/Genres';
import { setCurrentGame } from '../../../store/games/reducer';
import Modal from '../../modal/Modal';
import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import styles from './GameItem.module.css';

const GameItem = ({ title, genres, image, price, game }) => {
	const [showQuickView, setShowQuickView] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/game/${game.title}`.toLowerCase());
	};

	const quickViewHandler = () => {
		setShowQuickView((prev) => !prev);
	};

	return (
		<div className={styles.gameitem}>
			<div onClick={handleClick}>
				<GameCover image={image} />
			</div>
			<div className={styles.details}>
				<span className={styles.title} onClick={handleClick}>
					{title}
				</span>
				<div className={styles.genres}>
					<Genres genres={genres} />
				</div>
				<button
					onClick={quickViewHandler}
					className={styles.quickviewer}
				>
					Быстрый просмотр
				</button>
				<AnimatePresence>
					{showQuickView && (
						<Modal
							game={game}
							setShowQuickView={setShowQuickView}
						/>
					)}
				</AnimatePresence>
				<div className={styles.buy}>
					<GameBuy price={price} game={game} />
				</div>
			</div>
		</div>
	);
};
export default GameItem;
