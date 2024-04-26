import { Component } from 'react';

import './appFilter.scss';

class AppFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onUpdateSearchLoc = e => {
		const term = e.target.value;
		this.setState({ term });
		console.log(term);
		this.props.onUpdateSearch(term);
	};

	render() {
		const filterBtnData = [
			{
				country: 'brazil',
				label: 'Brazil',
			},
			{
				country: 'Kenya',
				label: 'Kenya',
			},
			{
				country: 'Columbia',
				label: 'Columbia',
			},
		];

		const { className, filter, onFilterSelect } = this.props;
		const filterClassName = className ? `filter ${className}` : 'filter';

		const filterBtn = filterBtnData.map(({ country, label }) => {
			const activeBtn = filter.toLowerCase() === country.toLowerCase();
			const activeBtnClass = activeBtn ? 'isActive' : '';

			return (
				<button
					type="button"
					key={country}
					className={`filter-button ${activeBtnClass}`}
					onClick={() => {
						onFilterSelect(country);
					}}
				>
					{label}
				</button>
			);
		});

		return (
			<div className={filterClassName}>
				<div className="filter-box">
					<div className="filter-label">Lookiing for</div>
					<div className="input-field">
						<input
							type="text"
							placeholder="start typing here..."
							value={this.state.term}
							onChange={this.onUpdateSearchLoc}
						/>
					</div>
				</div>
				<div className="filter-box">
					<div className="filter-label">Or filter</div>
					<div className="filter-btns-block">{filterBtn}</div>
				</div>
			</div>
		);
	}
}

export default AppFilter;
