import GameGenres from '../components/game/game-genres/GameGenres';

const Genres = ({ genres }) => {
	return genres.map((item) => <GameGenres genre={item} key={item} />);
};
export default Genres;
