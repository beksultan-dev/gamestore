import styles from './CartItem.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CartItem = ({ title, price, id, onDelete }) => {
	return (
		<div className={styles.cartitem}>
			<span>{title}</span>
			<div className={styles.price}>
				<span>{price} сом</span>
				<AiOutlineCloseCircle
					size={24}
					className={styles.delete}
					onClick={() => onDelete(id)}
				/>
			</div>
		</div>
	);
};
export default CartItem;
