import React, { Component } from 'react';
import ArrowLeft from '../assets/images/arrow-left-solid.svg';
import ArrowRight from '../assets/images/arrow-right-solid.svg';
import iexPic from '../assets/images/iex.png';
import AerocarPic from '../assets/images/aerocar.png';
import profilePic from '../assets/images/Kevin_Wang_WD.jpg';
import RPG1 from '../assets/images/rpg1.png';
import RPG2 from '../assets/images/rpg2.png';

export default class mainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	arrowLeft = () => {
		if (this.state.page === 1) {
			this.setState({ page: 4 });
		} else {
			this.setState({ page: this.state.page - 1 });
		}
	};

	arrowRight = () => {
		if (this.state.page === 4) {
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
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		} else if (this.state.page === 2) {
			return (
				<div className="mainpage__p2">
					<img
						className="mainpage-arrow mobileArrowLeft"
						src={ArrowLeft}
						alt="arrow"
						onClick={this.arrowLeft}
					/>
					<h1 className="mainpage__p2-title">Projects i have done</h1>
					<h1 className="mainpage__p2-title2">Projects i am working on</h1>

					<div className="mainpage__p2-middleDiv">
						<div className="mainpage__p2-doneDiv">
							<a href="https://virustorm.github.io/iex/" className="flip-card">
								<div className="mainpage__p2-desDiv flip-card-inner">
									<div className="flip-card-front">
										<img className="mainpage__p2-workImg" src={iexPic} alt="iex" />
									</div>
									<div className="flip-card-back">
										<section className="mainpage__p2-description">
											This used IEX Api and shows 100 random companies
										</section>
									</div>
								</div>
							</a>
							<a href="https://aerocar.herokuapp.com" className="flip-card">
								<div className="mainpage__p2-desDiv flip-card-inner">
									<div className="flip-card-front">
										<img className="mainpage__p2-workImg" src={AerocarPic} alt="aerocar" />
									</div>
									<div className="flip-card-back">
										<section className="mainpage__p2-description">
											Aerocar is a platform that joins all car-share companies into one map
										</section>
									</div>
								</div>
							</a>
						</div>
						<h1 className="mainpage__p2-title3">Projects i am working on</h1>
						<div className="mainpage__p2-workingDiv">
							<a href="http://www.kevincywang.com/" className="flip-card">
								<div className="mainpage__p2-desDiv flip-card-inner">
									<div className="flip-card-front">
										<img src={RPG1} alt="RPG1" className="mainpage__p2-workImg" />
									</div>
									<div className="flip-card-back">
										<section className="mainpage__p2-description">
											This is a RPG game that I am working on at the moment, very simple round
											based leveling game.
										</section>
									</div>
								</div>
							</a>

							<a href="http://www.kevincywang.com/" className="flip-card">
								<div className="mainpage__p2-desDiv flip-card-inner">
									<div className="flip-card-front">
										<img src={RPG2} alt="RPG2" className="mainpage__p2-workImg" />
									</div>
									<div className="flip-card-back">
										<section className="mainpage__p2-description lastDescText">
											This is another picture of the RPG game that I am working on at the moment,
											very simple round based leveling game.
										</section>
									</div>
								</div>
							</a>
						</div>
					</div>
					<img
						className="mainpage-arrow mobileArrowRight"
						src={ArrowRight}
						alt="arrow"
						onClick={this.arrowRight}
					/>
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-onIndicator" />
						<div className="mainpage-indicator" />
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
						<div className="mainpage-indicator" />
					</div>
				</div>
			);
		} else if (this.state.page === 4) {
			return (
				<div className="mainpage">
					<img className="mainpage-arrow" src={ArrowLeft} alt="arrow" onClick={this.arrowLeft} />
					<h1 className="mainpage-aboutMeTitle"> Contact</h1>
					<div className="mainpage-contactInfoDiv">
						<h1 className="mainpage-contactH1">Email me at: chengyu0718@hotmail.com</h1>
						<h1 className="mainpage-contactH1">
							Check my Projects at:
							<a className="mainpage-contactLink" href="https://www.github.com/virustorm">
								https://www.github.com/virustorm
							</a>
						</h1>
						<h1 className="mainpage-contactH1">
							Check my Profile at:
							<a className="mainpage-contactLink" href="https://www.linkedin.com/in/kevin-chengyu-wang/">
								https://www.linkedin.com/in/kevin-chengyu-wang/
							</a>
						</h1>
					</div>
					<img className="mainpage-arrow" src={ArrowRight} alt="arrow" onClick={this.arrowRight} />
					<div className="mainpage-indicatorDiv">
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-indicator" />
						<div className="mainpage-onIndicator" />
					</div>
				</div>
			);
		}
	}
}
