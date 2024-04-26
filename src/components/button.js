import { Component } from 'react';
import './button.scss';

class Button extends Component {
	render() {
		const { label, type, kind, color, className } = this.props;
		const buttonClasses = `btn ${kind || 'primary'} ${color || ''} ${
			className || ''
		}`.trim();
		return (
			<button className={buttonClasses} type={type}>
				<span>{label}</span>
			</button>
		);
	}
}

export default Button;
