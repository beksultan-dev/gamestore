import styles from './Search.module.css';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGame } from '../../store/games/reducer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Search = ({ inputValue, setInputValue }) => {
	const [focused, setFocused] = useState(false);
	const [found, setFound] = useState([]);
	const data = useSelector((state) => state.list.sortedList);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChangeInput = (e) => {
		setInputValue(e.target.value);
		setFound(data);
		if (!e.target.value) {
			setFound([]);
		}
	};

	const navigateTo = (item) => {
		dispatch(setCurrentGame(item));
		navigate(`/game/${item.title}`.toLowerCase());
	};

	const results = data.map((item, index) => {
		if (index <= 5)
			return (
				<div
					onClick={() => navigateTo(item)}
					className={styles.search_items}
					key={index + 1}
				>
					{item.title}
				</div>
			);
		return null;
	});

	const onFocusChange = () => {
		if (!inputValue) {
			setFocused(false);
		}
	};

	return (
		<div
			className={`${styles.search} ${focused ? 'focus' : ''}`}
			onBlur={onFocusChange}
		>
			<input
				name="text"
				type="text"
				value={inputValue}
				onChange={(e) => onChangeInput(e)}
				onFocus={() => setFocused(true)}
				placeholder="Поиск"
			/>
			{focused && (
				<motion.div
					className={styles.hints}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key={'hints'}
				>
					{found.length ? (
						results
					) : (
						<div
							className={`${styles.search_items} ${styles.noitems}`}
						>
							Ничего не найдено
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};
export default Search;
