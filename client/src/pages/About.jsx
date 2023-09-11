import React from "react";
import buildingboats from "../assets/buildingboats.jpg";

export default function About()
{
return(<>

	<div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col lg:flex-row">
			<img src={buildingboats} className="max-w-xl rounded-lg shadow-2xl" />
			<div>
					<h1 className="text-5xl font-bold text-center">Our Mission:</h1>
					<p className="py-6 text-xl"> To provide the most reliable and intuitive watercraft available and are commit to be the best partner for our stakeholders.</p>

					<h2 className="text-3xl font-bold text-center">Our Vision:</h2>
					<p className="py-6 text-xl">
					Delighting customers by providing the best designed and viable solutions for the world's most demanding environments.
					</p>

					<h1 className="text-3xl font-bold text-center">Our Core Values:</h1>

					<h2 className="text-3xl font-bold">Integrity</h2>
						<p className="py-6 text-xl"> We will conduct ourselves at the highest level of ethical standards. We do what we say, and say what we do.</p>

					<h2 className="text-3xl font-bold">Customer Centricity</h2>
							<p className="py-6 text-xl"> We listen to customers and provide them with superior products and services.</p>


					<h2 className="text-3xl font-bold">Sustainability</h2>
							<p className="py-6 text-xl"> We promote the sustainable use of resources in both the development and manufacture of products, and in the communities and environments where our products are produced and used.</p>

					<h2 className="text-3xl font-bold">Employee Engagement</h2>
							<p className="py-6 text-xl"> We foster a culture that promotes excellent performance through; safety, continuous improvement, teamwork, inclusion, and growth.</p>
					<button className="btn btn-primary text-center"><a href="/products">Shop Now!</a></button>
			</div>
  	</div>
	</div>


	</>);

}
