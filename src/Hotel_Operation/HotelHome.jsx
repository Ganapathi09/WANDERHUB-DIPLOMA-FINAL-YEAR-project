import React from "react";
import './hotel.css'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Col } from "react-bootstrap";
import HotelsTabular from "./HotelsTabular";
import Layout from "../Components/Layout";

export default function HotelHome() {
	return (
		<>
			<Layout title='GetStarted with Us - WanderHub' />
			<header className="introduction">
				{/* <span id="thing1"><img className="w-50" src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/weblogo/udupi.png" alt="Our Web Logo" /></span> */}
				<Col id="thing2"><h1>Welcome to Our Hotel Brindavan</h1><br />
					<h5 className="hotel-intro"><u>HOTEL BRINDAVAN : LODGING AND RESTAURANT</u> is a popular hotel located in Santhekatte, a bustling area in the city of Udupi in the Indian state of Karnataka. The hotel is known for its comfortable accommodations, excellent hospitality, and convenient location, making it a popular choice among travelers visiting Udupi for business or leisure.
						The hotel offers a range of room options, including standard rooms, deluxe rooms, and suites, all of which are equipped with modern amenities such as air conditioning, flat-screen TVs, and Wi-Fi. In addition, the hotel has a restaurant that serves delicious Indian, Chinese, and continental cuisine.
						Hotel Brindavan is located close to many popular attractions in Udupi, including the famous Sri Krishna Temple, the beautiful Malpe Beach, and the St. Mary's Island. The hotel is also located near the city's commercial and business districts, making it an ideal choice for business travelers.
						Overall, Hotel Brindavan offers a comfortable and convenient stay experience for travelers visiting Santhekatte and the surrounding areas of Udupi.
					</h5><br />
					<BsFillTelephoneFill /> Phone Number: +917947139910 <br />
					<MdLocationOn />Location : 9PJQ+R9M, 3rd cross Gopalpura, Santhekatte, Udupi - Perdoor - Agumbe Rd Karnataka 576105</Col>
			</header><hr />
			<main>
				< HotelsTabular />
			</main>
		</>
	)
}