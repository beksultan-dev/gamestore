import { useEffect, useState } from 'react';
import GameItem from '../../components/game/game-item/GameItem';
import styles from './HomePage.module.css';
import axios from 'axios';

const HomePage = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(
				'https://642c4c79208dfe25472cef7e.mockapi.io/data'
			);
			const res = await result.data;
			setData(res);
		};
		getData();
	}, []);

	return (
		<div className={styles.homepage}>
			{data.map((item) => (
				<GameItem key={item.id} {...item} game={item} />
			))}
		</div>
	);
};
export default HomePage;
