import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../WorkPage/Work.scss';
import { useSpring, animated } from 'react-spring';
// import ReactParticles from 'react-particles-js';
// import particlesConfig from './particles-config.js';

function Work() {
	return (
		<div className="main">
			<Hero>
				<div className="container">
					<Info />
					<div className="row">
						{cards.map((card, i) => (
							<div className="column">
								<Card>
									<div className="card-title">{card.title}</div>
									<div className="card-body">{card.description}  </div>
									<a href={card.link} target="_blank">Check it out here</a>
									<Image ratio={card.imageRatio} src={card.image} />
								</Card>
							</div>
						))}
					</div>
				</div>
			</Hero>
		</div>
	);
}

function Card({ children }) {
	// We add this ref to card element and use in onMouseMove event ...
	// ... to get element's offset and dimensions.
	const ref = useRef();

	// Keep track of whether card is hovered so we can increment ...
	// ... zIndex to ensure it shows up above other cards when animation causes overlap.
	const [ isHovered, setHovered ] = useState(false);

	const [ animatedProps, setAnimatedProps ] = useSpring(() => {
		return {
			// Array containing [rotateX, rotateY, and scale] values.
			// We store under a single key (xys) instead of separate keys ...
			// ... so that we can use animatedProps.xys.interpolate() to ...
			// ... easily generate the css transform value below.
			xys: [ 0, 0, 1 ],
			// Setup physics
			config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
		};
	});

	return (
		<animated.div
			ref={ref}
			className="card"
			onMouseEnter={() => setHovered(true)}
			onMouseMove={({ clientX, clientY }) => {
				// Get mouse x position within card
				const x =
					clientX -
					(ref.current.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft));

				// Get mouse y position within card
				const y =
					clientY -
					(ref.current.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop));

				// Set animated values based on mouse position and card dimensions
				const dampen = 50; // Lower the number the less rotation
				const xys = [
					-(y - ref.current.clientHeight / 2) / dampen, // rotateX
					(x - ref.current.clientWidth / 2) / dampen, // rotateY
					1.07 // Scale
				];

				// Update values to animate to
				setAnimatedProps({ xys: xys });
			}}
			onMouseLeave={() => {
				setHovered(false);
				// Set xys back to original
				setAnimatedProps({ xys: [ 0, 0, 1 ] });
			}}
			style={{
				// If hovered we want it to overlap other cards when it scales up
				zIndex: isHovered ? 2 : 1,
				// Interpolate function to handle css changes
				transform: animatedProps.xys.interpolate(
					(x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
				)
			}}
		>
			{children}
		</animated.div>
	);
}

function Hero({ children }) {
	return (
		<div className="hero">
			<div className="hero-body">{children}</div>
		</div>
	);
}

function Image({ ratio, src }) {
	return (
		<div className="image-container">
			<div className="image-inner-container">
				<div
					className="ratio"
					style={{
						paddingTop: ratio * 100 + '%'
					}}
				>
					<div className="ratio-inner">
						<img src={src} />
					</div>
				</div>
			</div>
		</div>
	);
}

function Info() {
	return (
		<div className="info">
			All Projects And More At  {' '}
			<a target="_blank" href="https://github.com/rahmedy">
			github.com/rahmedy
			</a>
			<div className="notice">(best viewed at larger screen width)</div>
		</div>
	);
}

const cards = [
	
	{
		title: 'SocioPod',
		description:
			'This Application will allow the user to create an account in which they can fill out their interests and be shown podcasts that match their fit. The users data, such as their interests and favorites will be stored in a SQL database. This Application is powered by HTML5, CSS, Javascript, Node.js, MySQL, and is Deployed on Heroku.',
		image: 'https://github.com/VeigarMain/SocioPod/raw/master/assets/demo.png',
		link: 'https://vast-scrubland-76826.herokuapp.com/',
		imageRatio: 500 / 500
	},

	{
		title: 'Covid-19 Tracker',
		description:
			'This group project we had to utilize CSS, HTML, JavaScript, API calls and JQuery to develop a working Live time COVID-19 tracker. This will provide users with the states currently reporting the most new cases as well as additional data about any state they search.The application also includses a syptonps test and a helpulf guides page for the user.  ',
		image: 'https://user-images.githubusercontent.com/40651335/88978630-13f16e80-d28e-11ea-90eb-a4693d8ce963.png',
		link: 'https://github.com/courtneypaasch/covid19-tracker',
		imageRatio: 784 / 1016
	},
	{
		title: 'ClassM',
		description:
			'ClassManager is a MERN application that lets students and teachers upload their data or pull their data all from one source. Students will be allowed to easily keep track of due dates, progress on assignments, grades and can make small notes if they need. Enforce a syllabus structure that will make it easier for students and teachers for accessing a particular syllabus.',
		image: 'https://github.com/rahmedy/ClassM/raw/main/client/public/demo.png',
		link: 'https://github.com/rahmedy/ClassM',
		imageRatio: 730 / 1030
	},
	{
		title: 'React-Employee-Directory',
		description:
			"This React application required breaking down the application's UI into components, manage component state, and respond to user events so that the user can I be able to view his/her entire employee directory at once so that I have quick access to their information.",
		image: 'https://github.com/rahmedy/React-Employee-Directory/raw/main/public/demo.png',
		link: 'https://rahmedy.github.io/React-Employee-Directory/',
		imageRatio: 730 / 1000
	},

];

export default Work;
