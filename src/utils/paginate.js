import { useSelector } from 'react-redux';
import GameItem from '../components/game/game-item/GameItem';

export const GamePages = ({ gamesPerPage, pageNumber }) => {
	const data = useSelector((state) => state.list.gamesList);

	const pagesVisited = gamesPerPage * pageNumber;
	return data
		.slice(pagesVisited, pagesVisited + gamesPerPage)
		.map((item) => <GameItem key={item.id} {...item} game={item} />);
};
