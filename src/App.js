import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/mainpage';
import OurCoffee from './pages/ourCoffee';
import Header from './components/header';
import Footer from './components/footer';

import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 'Homepage',
			data: [],
			term: '',
			pager: '/',
		};
	}

	onPageSelect = to => {
		this.setState({ pager: to });
	};

	render() {
		return (
			<Router>
				{/* <PageContext.Provider value={{ page: this.state.currentPage }}> */}
				<Header pager={this.state.pager} onPageSelect={this.onPageSelect} />
				{/* </PageContext.Provider> */}
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/our-coffee" element={<OurCoffee />} />
				</Routes>
				<Footer pager={this.state.pager} onPageSelect={this.onPageSelect} />
			</Router>
		);
	}
}

export default App;
