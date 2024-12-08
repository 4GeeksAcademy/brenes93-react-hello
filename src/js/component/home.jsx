import React from "react";
//import Navbar

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-12 col-sm-6 col-md-3 mb-3">
						<Card
							title="Card 1"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
							image="https://via.placeholder.com/150"
							link="#"
							buttonText="Go somewhere"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-3">
						<Card
							title="Card 2"
							text="Another example with different content to showcase the flexibility of props."
							image="https://via.placeholder.com/150"
							link="#"
							buttonText="Learn more"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-3">
						<Card
							title="Card 3"
							text="This is the third card. It can have any content you like."
							image="https://via.placeholder.com/150"
							link="#"
							buttonText="Explore more"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-3">
						<Card
							title="Card 4"
							text="This is the third card. It can have any content you like."
							image="https://via.placeholder.com/150"
							link="#"
							buttonText="Explore more"
						/>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
