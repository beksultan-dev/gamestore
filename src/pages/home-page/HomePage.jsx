import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import ReactPaginate from 'react-paginate';
import { GamePages } from '../../utils/paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncData, getSorted } from '../../store/list/reducer';
import Select from 'react-select';
import { options } from '../../utils/options';

const HomePage = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const gamesList = useSelector((state) => state.list.gamesList);
	const status = useSelector((state) => state.list.status);
	const error = useSelector((state) => state.list.error);

	useEffect(() => {
		dispatch(getAsyncData());
		dispatch(getSorted(selectedOption));
	}, [dispatch]);

	const gamesPerPage = 6;
	const pageCount = Math.ceil(gamesList.length / gamesPerPage);

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

	const handleChange = (option) => {
		dispatch(getSorted(option.value));
		setSelectedOption(option);
	};

	return (
		<>
			<div className={styles.select}>
				<Select
					onChange={handleChange}
					options={options}
					styles={styles.select}
					isSearchable={false}
					value={selectedOption}
					theme={(theme) => ({
						...theme,
						borderRadius: 10,
						colors: {
							...theme.colors,
							primary25: 'grey',
							primary: 'black',
						},
					})}
				/>
			</div>
			<div className={styles.homepage}>
				<GamePages
					pageNumber={currentPage}
					gamesPerPage={gamesPerPage}
				/>
			</div>
			{gamesList.length ? (
				<ReactPaginate
					pageCount={pageCount}
					onPageChange={({ selected }) => {
						setCurrentPage(selected);
					}}
					previousLabel={'Назад'}
					nextLabel={'Вперед'}
					containerClassName={styles.container}
					previousLinkClassName={styles.prev}
					nextLinkClassName={styles.next}
					activeClassName={styles.active}
					forcePage={currentPage}
				/>
			) : null}
		</>
	);
};
export default HomePage;
