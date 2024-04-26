import './bestCoffee.scss';

import image1 from '../assets/bestCoffee/best-img-1.jpg';
import image2 from '../assets/bestCoffee/best-img-2.jpg';
import image3 from '../assets/bestCoffee/best-img-3.jpg';

const items = [
	{
		image: { src: image1, alt: 'Описание 1' },
		title: 'Solimo Coffee Beans 2 kg',
		price: '10.73',
	},
	{
		image: { src: image2, alt: 'Описание 2' },
		title: 'Presto Coffee Beans 1 kg',
		price: '15.99',
	},
	{
		image: { src: image3, alt: 'Описание 3' },
		title: 'AROMISTICO Coffee 1 kg',
		price: '6.99',
	},
];

const BestCoffee = () => {
	const Items = items.map(({ image, title, price }, index) => {
		return (
			<div className="best-item" key={index}>
				<div className="best-item__icon">
					<img src={image.src} alt={image.alt} />
				</div>
				<div className="best-item__title">{title}</div>
				<div className="best-item__price">{price}$</div>
			</div>
		);
	});

	return (
		<div className="best-section">
			<div className="body">
				<h2 className="best-section__title">Our best</h2>
				<div className="best-list">{Items}</div>
			</div>
		</div>
	);
};

export default BestCoffee;
