import Button from '../button/Button';
import styles from './GameBuy.module.css';

const GameBuy = ({ price }) => {
	return (
		<div className={styles.gamebuy}>
			<span className={styles.price}>{price} сом </span>
			<Button type="primary">В корзину</Button>
		</div>
	);
};
export default GameBuy;
