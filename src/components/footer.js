import { Component } from 'react';
import BeansSeparate from './beansSeparate';
import Navigation from './navigation';

import './footer.scss';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="body">
					<div className="footer-navigation">
						<Navigation
							kind="dark"
							pager={this.props.pager}
							onPageSelect={this.props.onPageSelect}
						/>
					</div>

					<BeansSeparate color="dark" />
				</div>
			</div>
		);
	}
}

export default Footer;
