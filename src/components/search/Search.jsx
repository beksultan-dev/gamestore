import styles from './Search.module.css';

const Search = ({ inputValue, setInputValue }) => {
	const onChangeInput = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={styles.search}>
			<input
				name="text"
				type="text"
				value={inputValue}
				onChange={(e) => onChangeInput(e)}
				placeholder="Поиск"
			/>
		</div>
	);
};
export default Search;
