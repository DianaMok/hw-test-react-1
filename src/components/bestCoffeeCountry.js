import './bestCoffeeCountry.scss';

const BestCoffeeCountry = ({ items }) => {
	const Items = items.map(({ image, title, price, country }, index) => {
		return (
			<div className="best-item-from" key={index}>
				<div className="best-item-from__icon">
					<img src={image.src} alt={image.alt} />
				</div>
				<div className="best-item-from__title">{title}</div>
				<div className="best-item-from__country">{country}</div>
				<div className="best-item-from__price">{price}$</div>
			</div>
		);
	});

	return (
		<>
			<div className="best-from-list">{Items}</div>
		</>
	);
};

export default BestCoffeeCountry;
