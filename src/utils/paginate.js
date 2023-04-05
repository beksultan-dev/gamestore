import GameItem from '../components/game/game-item/GameItem';

export const GamePages = ({ gamesPerPage, data, pageNumber }) => {
	const pagesVisited = gamesPerPage * pageNumber;
	return data
		.slice(pagesVisited, pagesVisited + gamesPerPage)
		.map((item) => <GameItem key={item.id} {...item} game={item} />);
};
