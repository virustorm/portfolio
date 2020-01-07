import React, { Component } from 'react';
import ArrowLeft from '../assets/images/arrow-left-solid.svg';
import ArrowRight from '../assets/images/arrow-right-solid.svg';
import iexPic from '../assets/images/iex.png';
import AerocarPic from '../assets/images/aerocar.png';

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
					<img className="mainpage-arrow" src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<div className="mainpage-centerDiv">
						<h1>hi, i am kevin</h1>
						<h1>i am a fullstack developer</h1>
					</div>
					<img className="mainpage-arrow" src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		} else if (this.state.page === 2) {
			return (
				<div className="mainpage__p2">
					<img className="mainpage-arrow" src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<h1 className="mainpage__p2-title">Browse my work!</h1>
					<div className="mainpage__p2-middleDiv">
						<a href="https://virustorm.github.io/iex/">
							<img className="mainpage__p2-workImg" src={iexPic} alt="iex" />
						</a>
						<a href="https://aerocar.herokuapp.com">
							<img className="mainpage__p2-workImg" src={AerocarPic} alt="aerocar" />
						</a>
					</div>
					<img className="mainpage-arrow" src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		} else if (this.state.page === 3) {
			return (
				<div className="mainpage">
					<img className="mainpage-arrow" src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<div className="mainpage-centerDiv">
						<h1> Contact Me</h1>
					</div>
					<img className="mainpage-arrow" src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		}
	}
}
