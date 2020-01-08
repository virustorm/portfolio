import React, { Component } from 'react';
import ArrowLeft from '../assets/images/arrow-left-solid.svg';
import ArrowRight from '../assets/images/arrow-right-solid.svg';
import iexPic from '../assets/images/iex.png';
import AerocarPic from '../assets/images/aerocar.png';
import profilePic from '../assets/images/Kevin_Wang_WD.jpg';

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
						<div className="mainpage-onIndicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		} else if (this.state.page === 2) {
			return (
				<div className="mainpage__p2">
					<img className="mainpage-arrow" src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<h1 className="mainpage__p2-title">Projects i have done</h1>
					<h1 className="mainpage__p2-title2">Projects i am working on</h1>

					<div className="mainpage__p2-middleDiv">
						<div className="mainpage__p2-doneDiv">
							<a href="https://virustorm.github.io/iex/">
								<img className="mainpage__p2-workImg" src={iexPic} alt="iex" />
							</a>
							<a href="https://aerocar.herokuapp.com">
								<img className="mainpage__p2-workImg" src={AerocarPic} alt="aerocar" />
							</a>
						</div>
						<div>
							<a href="https://github.com/virustorm/rpg">rpg</a>
						</div>
					</div>
					<img className="mainpage-arrow" src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-onIndicator" />
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		} else if (this.state.page === 3) {
			return (
				<div className="mainpage">
					<img className="mainpage-arrow" src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<h1 className="mainpage-aboutMeTitle"> About Me</h1>
					<div className="mainpage-aboutMeDiv">
						<img src={profilePic} alt="profile" className="mainpage-profilePic" />
						<section className="mainpage-aboutMeText">
							Hey there ! I am Kevin Wang, I am a Full Stack Web Developer located in Vancouver BC. I am
							super passionate about applying my knowledge on to everyaspect of my developer career.
							Everyday I am excited to sit down and learn something new and imporve my skill. Let's make
							something special together!
						</section>
					</div>
					<img className="mainpage-arrow" src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-onIndicator" />
					</div>
				</div>
			);
		}
	}
}
