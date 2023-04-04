import styles from './CartItemsQuantity.module.css';

const CartItemsQuantity = ({ quantity = 0 }) => {
	return quantity ? (
		<div className={styles.quantity}>{quantity}</div>
	) : null;
};
export default CartItemsQuantity;
