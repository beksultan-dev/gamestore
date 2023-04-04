import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store/cart/reducer';
import GameCover from '../game/game-cover/GameCover';
import styles from './OrderItem.module.css';

const OrderItem = ({ game }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(deleteFromCart(game.id));
	};

	return (
		<div className={styles.orderitem}>
			<div className={styles.cover}>
				<GameCover image={game.image} />
			</div>
			<div className={styles.title}>
				<span>{game.title}</span>
			</div>
			<div className={styles.price}>
				<span>{game.price} сом</span>
				<AiOutlineCloseCircle
					size={30}
					className={styles.delete}
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};
export default OrderItem;
