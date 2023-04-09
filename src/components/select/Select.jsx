import Select from 'react-select';
import { options } from '../../utils/options';
import styles from './Select.module.css';

const SelectSort = ({ selectedOption, setSelectedOption }) => {
	const handleChange = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className={styles.select}>
			<Select
				onChange={handleChange}
				options={options}
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
	);
};
export default SelectSort;
