import { useDispatch } from 'react-redux';
import { calcTotalPrice } from '../../../utils/totalPrice';
import Button from '../../button/Button';
import CartItem from '../cart-item/CartItem';
import styles from './CartMenu.module.css';
import { deleteFromCart } from '../../../store/cart/reducer';

const CartMenu = ({ items, onCLick = () => null }) => {
	const dispatch = useDispatch();
	const onDelete = (id) => {
		dispatch(deleteFromCart(id));
	};

	return (
		<div className={styles.cartmenu}>
			<div className={styles.list}>
				{items.length ? (
					items.map((item) => (
						<CartItem
							key={item.title}
							{...item}
							onDelete={onDelete}
						/>
					))
				) : (
					<span className={styles.cart_empty}>
						Корзина пуста
					</span>
				)}
			</div>

			{items.length ? (
				<div className={styles.wrapper}>
					<div className={styles.total_price}>
						<span>Итого:</span>
						<span>{calcTotalPrice(items)} сом</span>
					</div>
					<Button type="primary" onClick={onCLick}>
						Оформить заказ
					</Button>
				</div>
			) : null}
		</div>
	);
};
export default CartMenu;
