import { BiCartAlt } from 'react-icons/bi';
import styles from './CartBlock.module.css';
import { useSelector } from 'react-redux';
import CartMenu from '../cart-menu/CartMenu';
import { calcTotalPrice } from '../../utils/totalPrice';
import { useState } from 'react';
import CartItemsQuantity from '../cart-items-quantity/CartItemsQuantity';

const CartBlock = () => {
	const [isCartMenuVisible, setCartMenuVisible] = useState(false);
	const items = useSelector((state) => state.cart.itemsInCart);
	const finalPrice = calcTotalPrice(items);

	return (
		<div className={styles.cart_block}>
			<div
				className={styles.cart_wrapper}
				onClick={() => setCartMenuVisible((prev) => !prev)}
			>
				<CartItemsQuantity quantity={items.length} />
				<BiCartAlt className={styles.cart} />
				{finalPrice ? (
					<span className={styles.price}>{finalPrice} сом</span>
				) : null}
			</div>
			{isCartMenuVisible && <CartMenu items={items} />}
		</div>
	);
};
export default CartBlock;
