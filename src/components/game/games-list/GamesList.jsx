import { useSelector } from 'react-redux';
import GameItem from '../game-item/GameItem';
import styles from './GamesList.module.css';

export const GamesList = ({ gamesPerPage, pagesVisited }) => {
	const data = useSelector((state) => state.list.sortedList);

	return (
		<div className={styles.gameslist}>
			{data
				?.slice(pagesVisited, pagesVisited + gamesPerPage)
				.map((item) => (
					<GameItem key={item.id} {...item} game={item} />
				))}
		</div>
	);
};
