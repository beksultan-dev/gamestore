import ReactPaginate from 'react-paginate';
import styles from './Paginate.module.css';

const Paginate = ({
	gamesList,
	setCurrentPage,
	currentPage,
	pageCount,
}) => {
	return gamesList.length ? (
		<div>
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
		</div>
	) : null;
};
export default Paginate;
