import { Component } from 'react';
import BeansSeparate from '../components/beansSeparate';
import AppFilter from '../components/appFilter';
import BestCoffeeCountry from '../components/bestCoffeeCountry';

import '../styles/ourCoffee.scss';
import ourCoffeeImage from '../assets/ourCoffee/our-coffee-img.jpg';
import image3 from '../assets/bestCoffee/best-img-3.jpg';

class OurCoffee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					image: { src: image3, alt: 'Описание 1' },
					title: 'AROMISTICO Coffee 1 kg',
					price: '6.99',
					country: 'Brazil',
				},
				{
					image: { src: image3, alt: 'Описание 2' },
					title: 'ABOMISTICO Coffee 1 kg',
					price: '6.99',
					country: 'Kenya',
				},
				{
					image: { src: image3, alt: 'Описание 3' },
					title: 'AROMISTICO Coffee 1 kg',
					price: '10.99',
					country: 'Columbia',
				},
				{
					image: { src: image3, alt: 'Описание 4' },
					title: 'AROMISTICO Coffee 1 kg',
					price: '20.99',
					country: 'Columbia',
				},
				{
					image: { src: image3, alt: 'Описание 5' },
					title: 'ADOMISTICO Coffee 1 kg',
					price: '5.99',
					country: 'Brazil',
				},
				{
					image: { src: image3, alt: 'Описание 6' },
					title: 'AROMISTICO Coffee 1 kg',
					price: '10.99',
					country: 'Brazil',
				},
			],
			filter: '',
			term: '',
		};
	}

	onFilterSelect = selectedFilter => {
		this.setState(prevState => ({
			filter: prevState.filter === selectedFilter ? '' : selectedFilter,
		}));
	};

	onUpdateSearch = term => {
		this.setState({ term });
	};

	render() {
		const { filter, items, term } = this.state;

		// const filteredItems = filter
		// 	? items.filter(
		// 			item => item.country.toLowerCase() === filter.toLowerCase()
		// 	  )
		// 	: items;
		const filteredItems = items.filter(item => {
			const matchFilter = filter
				? item.country.toLowerCase() === filter.toLowerCase()
				: true;
			const matchTerm = term
				? item.title.toLowerCase().includes(term.toLowerCase())
				: true;
			return matchFilter && matchTerm;
		});

		return (
			<div className="body">
				<div className="our-coffee-main">
					<div className="">
						<img src={ourCoffeeImage} alt="Our Coffee" />
					</div>
					<div className="">
						<h1>About our beans</h1>
						<BeansSeparate color="dark" />
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible.
						</p>
						<p>
							Afraid at highly months do things on at. Situation recommend
							objection do intention so questions.
						</p>
						<p>
							As greatly removed calling pleased improve an. Last ask him cold
							feel met spot shy want. Children me laughing we prospect answered
							followed. At it went is song that held help face.
						</p>
					</div>
				</div>
				<div className="our-coffee-line"></div>
				<AppFilter
					filter={filter}
					onFilterSelect={this.onFilterSelect}
					onUpdateSearch={this.onUpdateSearch}
					className="our-coffee-filter"
				/>
				<BestCoffeeCountry items={filteredItems} />
				<div className=""></div>
			</div>
		);
	}
}

export default OurCoffee;
