import { motion } from 'framer-motion';
import GameCover from '../game/game-cover/GameCover';
import styles from './Modal.module.css';

const Modal = ({ game, setShowQuickView }) => {
	return (
		<>
			<motion.div
				key={'modal'}
				className={styles.modal}
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
				}}
				exit={{ opacity: 0 }}
			>
				<GameCover
					image={game.image}
					style={{ height: '300px' }}
				/>
				<div className={styles.title}>{game.title}</div>
				<div className={styles.desc}>{game.description}</div>
			</motion.div>
			<motion.div
				key={'fade'}
				className={styles.fade}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={() => setShowQuickView(false)}
			></motion.div>
		</>
	);
};
export default Modal;
