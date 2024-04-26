import { Component } from 'react';
import BeansSeparate from '../components/beansSeparate';
import BestCoffee from '../components/bestCoffee';

import '../styles/mainpage.scss';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="body">
					<h1 className="mainpage-title">About Us</h1>
					<BeansSeparate color="dark" />
					<div className="mainpage-contex">
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible. Afraid at highly months do things on at.
							Situation recommend objection do intention so questions. As
							greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered
							followed. At it went is song that held help face.
						</p>
						<p>
							Now residence dashwoods she excellent you. Shade being under his
							bed her, Much read on as draw. Blessing for ignorant exercise any
							yourself unpacked. Pleasant horrible but confined day end
							marriage. Eagerness furniture set preserved far recommend. Did
							even but nor are most gave hope. Secure active living depend son
							repair day ladies now.
						</p>
					</div>
				</div>
				<BestCoffee />
			</>
		);
	}
}

export default Homepage;
