import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { GamePages } from '../../utils/paginate';

const HomePage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await axios.get(
					'https://642c4c79208dfe25472cef7e.mockapi.io/data'
				);
				setData(result.data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};
		getData();
	}, []);

	if (loading)
		return (
			<div className={styles.wrap}>
				<div className={styles.loader}></div>
			</div>
		);
	if (error) return <h1>{error}</h1>;

	const gamesPerPage = 6;
	const pageCount = Math.ceil(data.length / gamesPerPage);

	return (
		<div className={styles.homepage}>
			<GamePages
				data={data}
				pageNumber={pageNumber}
				gamesPerPage={6}
			/>
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
		</div>
	);
};
export default HomePage;
