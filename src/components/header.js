import { Component } from 'react';
import Button from './button';
import Navigation from './navigation';
import BeansSeparate from './beansSeparate';

import './header.scss';

class Header extends Component {
	render() {
		return (
			<div className="header mainpage-header">
				<div className="body header-content">
					<div className="header-navigation">
						<Navigation
							pager={this.props.pager}
							onPageSelect={this.props.onPageSelect}
						/>
					</div>

					<div className="mainpage-body">
						<div className="header-title">Everything You Love About Coffee</div>
						<BeansSeparate color="" shadow={true} />
						<div className="header-subtile">
							We makes every day full of energy and taste <br /> Want to try our
							beans?
						</div>
						<div className="">
							<Button
								className="header-btn"
								kind="secondary"
								label="More"
								type="button"
								color=""
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
