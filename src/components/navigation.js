import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';
import { ReactComponent as Logo } from '../assets/header/beans-logo.svg';

class Navigation extends Component {
	render() {
		const { kind } = this.props;
		const additionalClass = kind === 'dark' ? 'dark' : '';
		const linkData = [
			{
				to: '/',
				label: 'Coffee house',
				id: 1,
			},
			{
				to: '/our-coffee',
				label: 'Our coffee',
				id: 2,
			},
			{
				to: '/for-your-pleasure',
				label: 'For your pleasure',
				id: 3,
			},
		];

		const navLink = linkData.map(({ to, label, id }) => {
			const isActive = this.props.pager === to;

			const getNavLinkClass = `navigation-link ${
				isActive ? 'isActive' : ''
			}`.trim();

			return (
				<NavLink
					key={id}
					to={to}
					className={getNavLinkClass}
					onClick={() => {
						this.props.onPageSelect(to);
					}}
				>
					{id === 1 && (
						<span className="header-logo">
							<Logo />
						</span>
					)}
					{label}
				</NavLink>
			);
		});

		return (
			<>
				<nav className={`navigation ${additionalClass}`}>{navLink}</nav>
			</>
		);
	}
}

export default Navigation;
