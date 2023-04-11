import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../../components/paginate/Paginate';
import Search from '../../components/search/Search';
import SelectSort from '../../components/select/Select';
import { getAsyncData, getSorted } from '../../store/list/reducer';
import { options } from '../../utils/options';
import { GamesList } from '../../components/game/games-list/GamesList';
import styles from './HomePage.module.css';
import FilterGames from '../../components/filter/FilterGames';

const HomePage = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [inputValue, setInputValue] = useState('');
	const [currentFilter, setCurrentFilter] = useState('');

	const gamesList = useSelector((state) => state.list.sortedList);
	const status = useSelector((state) => state.list.status);
	const error = useSelector((state) => state.list.error);

	useEffect(() => {
		dispatch(getAsyncData());
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			getSorted({ ...selectedOption, inputValue, currentFilter })
		);
		setCurrentPage(0);
	}, [selectedOption, inputValue, currentFilter, dispatch]);

	const itemsPerPage = 6;
	const pageCount = Math.ceil(gamesList.length / itemsPerPage);
	const pagesVisited = itemsPerPage * currentPage;

	if (status === 'pending') {
		return (
			<div className={styles.wrap}>
				<div className={styles.loader}></div>
			</div>
		);
	}

	if (status === 'rejected') {
		return <h1>{error}</h1>;
	}

	return (
		<>
			<SelectSort
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
			<Search
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<FilterGames setCurrentFilter={setCurrentFilter} />
			<GamesList
				gamesPerPage={itemsPerPage}
				pagesVisited={pagesVisited}
			/>
			<Paginate
				gamesList={gamesList}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				pageCount={pageCount}
			/>
		</>
	);
};
export default HomePage;
