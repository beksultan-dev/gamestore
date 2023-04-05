import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import ReactPaginate from 'react-paginate';
import { GamePages } from '../../utils/paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncData } from '../../store/list/reducer';

const HomePage = () => {
	const [pageNumber, setPageNumber] = useState(0);

	const dispatch = useDispatch();

	const gamesList = useSelector((state) => state.list.gamesList);
	const status = useSelector((state) => state.list.status);
	const error = useSelector((state) => state.list.error);

	const gamesPerPage = 6;
	const pageCount = Math.ceil(gamesList.length / gamesPerPage);

	useEffect(() => {
		dispatch(getAsyncData());
	}, [dispatch]);

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
		<div className={styles.homepage}>
			<GamePages
				pageNumber={pageNumber}
				gamesPerPage={gamesPerPage}
			/>
			{gamesList.length ? (
				<ReactPaginate
					pageCount={pageCount}
					onPageChange={({ selected }) => {
						setPageNumber(selected);
					}}
					previousLabel={'Назад'}
					nextLabel={'Вперед'}
					containerClassName={styles.container}
					previousLinkClassName={styles.prev}
					nextLinkClassName={styles.next}
					activeClassName={styles.active}
				/>
			) : null}
		</div>
	);
};
export default HomePage;
