import { useState } from 'react';
import Button from '../button/Button';
import styles from './FilterGames.module.css';
import { filterBtns } from '../../utils/filterBtns';

const FilterGames = ({ setCurrentFilter }) => {
	const [active, setActive] = useState(1);

	const handleClick = (word, id) => {
		if (id !== active) {
			setActive(id);
		}
		setCurrentFilter(word);
	};

	return (
		<div className={styles.filter}>
			{filterBtns.map((item, index) => (
				<Button
					onClick={() => handleClick(item.action, index + 1)}
					type={active === index + 1 ? 'primary' : 'secondary'}
				>
					{item.title}
				</Button>
			))}
		</div>
	);
};
export default FilterGames;
