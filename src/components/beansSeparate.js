import { Component } from 'react';
import './beansSeparate.scss';
import { ReactComponent as BeansIcon } from '../assets/header/beans-icon.svg';

class BeansSeparate extends Component {
	render() {
		const { kind, color, className, shadow } = this.props;
		const lineClasses = `beans-separate-line ${kind || ''} ${color || ''} ${
			shadow ? 'shadow' : ''
		}  ${className || ''}`.trim();
		return (
			<div className={lineClasses}>
				<div className="beans-separate-line__icon">
					<BeansIcon />
				</div>
			</div>
		);
	}
}

export default BeansSeparate;
