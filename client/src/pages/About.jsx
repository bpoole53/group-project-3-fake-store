import React from "react";
import peopleimg from "../assets/people.jpg"

export default function About()
{
return(<>

	<div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col lg:flex-row">
			<img src={peopleimg} className="max-w-xl rounded-lg shadow-2xl" />
			<div>
					<h1 className="text-5xl font-bold">Our Mission</h1>
					<p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vel unde magnam! Odit tenetur reprehenderit quia. Facere, molestiae quod aut perferendis delectus illo non architecto omnis, nam aliquid, consectetur sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum ullam vitae quo pariatur ratione quidem, hic suscipit ipsam dignissimos quaerat? Sed voluptas facilis ad excepturi eum ut esse eligendi! </p>
					Photo by <a href="https://unsplash.com/@jasongoodman_youxventures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Goodman</a> on <a href="https://unsplash.com/photos/Oalh2MojUuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br/>
					<button className="btn btn-primary"><a href="/products">Shop Now!</a></button>
			</div>
  	</div>
	</div>


	</>);

}
