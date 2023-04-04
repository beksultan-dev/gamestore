import { useSelector } from 'react-redux';
import styles from './Order.module.css';
import { calcTotalPrice } from '../../utils/totalPrice';
import OrderItem from '../../components/order-item/OrderItem';

const Order = () => {
	const items = useSelector((state) => state.cart.itemsInCart);

	if (!items.length) return <h1>Ваша корзина пуста</h1>;

	return (
		<div className={styles.order}>
			<div className={styles.left}>
				{items.map((item) => (
					<OrderItem game={item} key={item.title} />
				))}
			</div>
			<div className={styles.rigth}>
				<div className={styles.totalprice}>
					<span>
						{items.length} товаров на сумму{'  '}
						{calcTotalPrice(items)} сом
					</span>
				</div>
			</div>
		</div>
	);
};
export default Order;
