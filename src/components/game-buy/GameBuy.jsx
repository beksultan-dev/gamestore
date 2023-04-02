import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../store/cart/reducer';
import Button from '../button/Button';
import styles from './GameBuy.module.css';

const GameBuy = ({ price, game }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.itemsInCart);
	const isItemInCart = items.some((item) => item.id === game.id);

	const handleClick = (e) => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteFromCart(game.id));
		} else {
			dispatch(addToCart(game));
		}
	};

	return (
		<div className={styles.gamebuy}>
			<span className={styles.price}>{price} сом </span>
			<Button
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
			</Button>
		</div>
	);
};
export default GameBuy;
