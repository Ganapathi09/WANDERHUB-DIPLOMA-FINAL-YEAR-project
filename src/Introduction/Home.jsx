import React from "react";
import "./intro.css";
import HotelCarousel from "./HotelCarousel";
import SweetCard from "./SweetCard";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { Button } from "react-bootstrap";
import SliderofImages from "../Components/SliderofImages";
import Layout from '../Components/Layout'

export default function Home() {
  return (
    <>
      <Layout title='Welcome Home - WanderHub' />
      <div className="main">
        <h3>Hotel and its Importance</h3>
        <p className="information">
          A hotel is an establishment that provides lodging, meals, and other
          services to travelers and guests in exchange for payment. Hotels can
          range in size from small bed and breakfasts to large luxury resorts, and
          can be found in a variety of locations such as cities, beach towns, and
          remote destinations. Hotels typically offer a variety of rooms and
          suites with different amenities and price points, as well as common
          areas such as restaurants, bars, and fitness centers. Some hotels also
          provide additional services like spa treatments, conference rooms, and
          event spaces. In order to succeed, hotels need to provide a high level
          of customer service and maintain a good reputation. This can be achieved
          through effective marketing, strong online reviews, and by delivering a
          positive guest experience. In recent years, technology has also played a
          larger role in the hotel industry, with many hotels implementing online
          booking systems, mobile check-in options, and other tech-driven
          solutions to improve the guest experience. Overall, the hotel industry
          plays an important role in the global economy and provides a valuable
          service to travelers and guests around the world.
        </p>
        {<HotelCarousel />}
        <hr />
        <h3>SweetHub (Sweet Mandige).</h3>
        <p className="information">
          <legend>Tasting 5000-Year-Old Sweet Mandige in Belgaum:</legend>
          While continuing our food tour in North Karnataka, Unbox Karnataka
          introduces you to a rare Indian sweet dish called Mandige which has a
          history of over 5000 years. This special sweet dish is quite difficult
          to prepare but the end product is totally worthy of all the hard work.
          It is believed that Lord Krishna mentioned about this special sweet
          during Dvapara Yuga. We are proud to introduce such exquisite dish to
          our audience. So, enjoy the video and do share your views and opinions
          in the comments section. <br />
          <br />
          Unbox Karnataka is a Kannada food review channel that explores the food
          culture across Karnataka. The team travels to various places in search
          of delicacies and local favorites relish the food and give an honest
          review to help the audience choose the right cuisine at the right
          places. We also interact with the audience, and they suggest we try
          their local specialties, which we do eventually. Our audience enjoys our
          videos, and we strive to meet their ever-increasing expectations with
          each new release. <b> Krishnamurthy Saralaya's Mandige Address:</b> H.no
          1210, Konwal Galli, Belagavi, Karnataka 590001 Phone number:
          0810012452707
          <Button
            variant="outline-primary"
            href="https://www.facebook.com/unboxkarnataka/"
          >
            <BsFacebook />
          </Button>
          <Button
            href="https://www.instagram.com/unbox_karna"
            style={{ color: "darkmagenta", backgroundColor: "rgb(255, 88, 202)" }}
          >
            {" "}
            <BsInstagram />{" "}
          </Button>
          {<SweetCard />}
        </p>
        <div className="information">
          <h3>Tourist Places.</h3>
          Udupi district was formed in 1997. It was separated from Dakshina
          Kannada district to form a new district. Udupi district is located in
          the coastal region of Western Ghats about 60 km from Mangalore. Udupi
          is a popular pilgrimage centre and tourist spot. Udupi is famous for
          the Lord Krishna temple located here. Udupi is also world famous for
          its world class cuisine. Udupi’s contribution to World is ‘Masala
          Dosa’. Tulu, Konkani, Kannada and Beary languages are spoken here.
          Most of the hotel owners in Karnataka are from Udupi.
          <br />
          <br />
          Travel on the National Highway 17 and you will be headed straight
          towards one of the most beautiful places in the state of Karnataka;
          Udupi, a name derived from its popular cuisine. Some also believe that
          the name Udupi was came from the amalgamation of <b>
            Sanskrit
          </b> and <b>Urdu</b> words <i>‘Udu’</i> and <i>‘Pa’</i> meaning
          <b>‘starts’</b> and <b>‘lords’</b>. The place holds great significance
          to Hindu pilgrims. It is well-known all over India for the famous
          Krishna temple built by a saint called{" "}
          <b href="">Shri Madhvacharya</b>; a native of Udupi. The temple
          popularly known as Krishna Muth and is famous all over the world for
          its customs, traditions and special teachings of Philosophy known as
          Dvaita Philosophy. Preached by Sri Madhvacharya the teachings have
          become famous all over the world.
          <br />
          <br />
          You will feel the warm vibes of hospitality and affection from every
          resident of this place. The place has a very homely atmosphere and
          though hundreds of miles away from home you will feel at home! The
          state has a very high literacy rate and as per calculated in 2001 it
          has a literacy rate of 83% even higher than the national average.
          Thus, Udupi is also a centre for education, banking and healthcare.
          When in Udupi you will have the opportunity to taste the special
          ‘Udupi’ cuisine. It is absolutely vegetarian and its origin is linked
          to the Krishna temple. The cuisine is very famous and now even
          available in different parts of the world. <br />
          <br />
          Known as the <b>‘temple town’</b> was carved out from Dakshina Kannada
          and the local language used around here is Tulu. Apart from that you
          will also find people conversing in Konkani and Kanada. Geographically
          Udupi is spread between the verdant mountains of the Western Ghats on
          the East and the Arabian sea-cost on the west. It is about 58 kms from
          Mangalore and 422 kms from the city of Bangalore. The land enjoys a
          warm summers and pleasant winters. Monsoon makes its way into the
          state around June and continues till September. If you are interested
          in history and architecture of Indian temples you will surely enjoy
          every moment you spend in Udupi. Udupi is also blessed with
          magnificent beaches. You will simply enjoy a clear blue sky upon the
          tranquil ripples of sea waves. Famous beaches are Malpe, Bengre Hoode
          beach, Kodi beach and Mattu beach. If you are in Udupi it is a sin to
          miss the local dance performances, especially Yakshagana; a rich folk
          dance form performed by wearing ethnic ancient masks performed by men
          on the beats of Hindi and Karnataki music.</div><br />
        <SliderofImages
          src1="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/tourist/udupi%20shri%20krishna%20matta.jpg"
          alt1="Shri Krishna Temple"
          text1="Udupi Shri Krishna Temple"
          src2="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/tourist/temple_kadiyali.jpg"
          alt2="Kadiyaali Shri MahishaMardhini Temple"
          text2="Kadiyaali Shri MahishaMardhini Temple"
          src3="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/tourist/maple%20beach.jpg"
          alt3="Malpe Beach"
          text3="Malpe Beach"
          src4="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/tourist/stmary.jpg"
          alt4="St. Marys Island"
          text4="St. Marys Island"
          src5="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/tourist/parashuram.jpg"
          alt5="Parashuram Theme Park"
          text5="Parashuram Theme Park"
          src6="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/tourist/endpoint.jpg"
          alt6="Manipal End Point"
          text6="Manipal End Point"
        />
      </div>
    </>
  );
}
