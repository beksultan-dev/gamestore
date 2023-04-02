import styles from './CartItem.module.css';

const CartItem = ({ title, price, id }) => {
	return (
		<div className={styles.cartitem}>
			<span>{title}</span>
			<div className={styles.price}>
				<span>{price} сом</span>
			</div>
		</div>
	);
};
export default CartItem;
