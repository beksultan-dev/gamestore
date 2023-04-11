import { useDispatch } from 'react-redux';
import { calcTotalPrice } from '../../../utils/totalPrice';
import Button from '../../button/Button';
import CartItem from '../cart-item/CartItem';
import styles from './CartMenu.module.css';
import { deleteFromCart } from '../../../store/cart/reducer';
import { motion } from 'framer-motion';

const CartMenu = ({ items, onCLick = () => null }) => {
	const dispatch = useDispatch();
	const onDelete = (id) => {
		dispatch(deleteFromCart(id));
	};

	return (
		<motion.div
			className={styles.cartmenu}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.1 }}
		>
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
						Перейти в корзину
					</Button>
				</div>
			) : null}
		</motion.div>
	);
};
export default CartMenu;
