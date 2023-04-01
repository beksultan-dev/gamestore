import { BiCartAlt } from 'react-icons/bi';
import styles from './CartBlock.module.css';

const CartBlock = () => {
	return (
		<div className={styles.cart_block}>
			<BiCartAlt className={styles.cart} />
			<span className={styles.price}>1200 сом</span>
		</div>
	);
};
export default CartBlock;
