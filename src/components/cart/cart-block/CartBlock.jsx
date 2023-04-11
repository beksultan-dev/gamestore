import { BiCartAlt } from 'react-icons/bi';
import styles from './CartBlock.module.css';
import { useSelector } from 'react-redux';
import CartMenu from '../cart-menu/CartMenu';
import { calcTotalPrice } from '../../../utils/totalPrice';
import { useCallback, useState } from 'react';
import CartItemsQuantity from '../cart-items-quantity/CartItemsQuantity';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const CartBlock = () => {
	const [isCartMenuVisible, setCartMenuVisible] = useState(false);
	const items = useSelector((state) => state.cart.itemsInCart);
	const finalPrice = calcTotalPrice(items);
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		setCartMenuVisible(false);
		navigate('/order');
	}, [navigate]);

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
			<AnimatePresence>
				{isCartMenuVisible && (
					<>
						<CartMenu items={items} onCLick={handleClick} />
						<div
							className={styles.fade}
							onClick={() => setCartMenuVisible(false)}
						></div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};
export default CartBlock;
