import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CartBlock from '../cart-block/CartBlock';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<Link to="/" className={styles.title}>
					Game Store
				</Link>
			</div>
			<div className={styles.btns_wrapper}>
				<CartBlock />
			</div>
		</div>
	);
};
export default Header;
