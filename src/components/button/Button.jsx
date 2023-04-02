import classNames from 'classnames';
import './button.css';
import { useDispatch } from 'react-redux';

const Button = ({ onClick, type, children, size = 's' }) => {
	const btnClasses = classNames({
		btn: true,
		btn_primary: type === 'primary',
		btn_secondary: type === 'secondary',
		btn_small: size === 's',
		btn_medium: size === 'm',
	});

	return (
		<button className={btnClasses} onClick={onClick}>
			{children}
		</button>
	);
};
export default Button;
