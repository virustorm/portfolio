import React, { Component } from 'react';
import ArrowLeft from '../assets/images/arrow-left-solid.svg';
import ArrowRight from '../assets/images/arrow-right-solid.svg';

export default class mainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	arrowLeft = () => {
		if (this.state.page === 1) {
			this.setState({ page: 3 });
		} else {
			this.setState({ page: this.state.page - 1 });
		}
	};

	arrowRight = () => {
		if (this.state.page === 3) {
			this.setState({ page: 1 });
		} else {
			this.setState({ page: this.state.page + 1 });
		}
	};

	render() {
		if (this.state.page === 1) {
			return (
				<div className="mainpage">
					<img src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<div className="mainpage-centerDiv">
						<h1>hi, i am kevin</h1>
						<h1>i am a fullstack developer</h1>
					</div>
					<img src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
				</div>
			);
		} else if (this.state.page === 2) {
			return (
				<div className="mainpage">
					<img src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<div className="mainpage-centerDiv">Browse my work!</div>
					<img src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
				</div>
			);
		} else if (this.state.page === 3) {
			return (
				<div className="mainpage">
					<img src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<div className="mainpage-centerDiv">
						<h1> Contact Me</h1>
					</div>
					<img src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
				</div>
			);
		}
	}
}
