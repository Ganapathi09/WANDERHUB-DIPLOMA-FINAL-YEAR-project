import React, { useState, useEffect } from 'react'
import { Button, Col, ListGroup } from 'react-bootstrap'
import './tourist.css'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import Layout from '../Components/Layout'
import TInfo from './TInfo'

export default function TouristHome() {
  const [isDaytime, setIsDayTime] = useState(true)
  useEffect(() => {
    const currentTime = new Date().getHours()
    setIsDayTime(currentTime >= 6 && currentTime < 18)
  }, [])

  return (
    <>
      <Layout title='Tourist Guide - WanderHub' />
      <div className='tourist-section-block' style={{ backgroundImage: isDaytime ? 'url("https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/Tourism/tourism.jpg")' : 'url("https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/Tourism/night.jpg")', color: isDaytime ? 'whitesmoke' : 'aqua' }}>
        <header className='tourist-bar'>
          <Col xs={5} md={5} className='text-center'><h4>For Visiting of other Tourist Places <BsFillArrowRightSquareFill /></h4></Col>
          <Col xs={5} md={5}><Button style={{ width: "100%" }} href='https://www.google.com.au/maps/' variant='success'>Click here for MAP</Button></Col>
        </header>
        <p id="item">
          <h3> Hey Travellers, here is the list of tourist places available in coastal areas located in our hotel locality.</h3>
          <ListGroup defaultActiveKey="#tourist-info1">
            <ListGroup.Item action href="#tourist-info1" className='linkers'>Krishna Mutt Udupi</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info2" className='linkers'>Malpe Beach</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info3" className='linkers'>Saint Marys Island - The Coconut Island</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info4" className='linkers'>Kapu Beach</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info5" className='linkers'>PaduBidri Beach</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info6" className='linkers'>Anegudde Vinayaka Temple</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info7" className='linkers'>Kadiyali Sri Mahishamardini Temple</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info8" className='linkers'>Hude Beach</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info9" className='linkers'>Kodi Beach</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info10" className='linkers'>Coin Museum Corp Bank - For Coin Collectors</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info11" className='linkers'>Manipal End Point</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info12" className='linkers'>PanamBur Beach</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info13" className='linkers'>Pilikula Park</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info14" className='linkers'>Parashuram Theme Park</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info15" className='linkers'>BaahuBali Stone Statue-Karkala(Gomateshwara)</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info16" className='linkers'>Shri Chaturmukha Jaina Basadi</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info17" className='linkers'>Varanga Lake Jain Temple</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info18" className='linkers'>Atthur Church-Church Of St Lawrence</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info19" className='linkers'>Malpe Sea Walk</ListGroup.Item>
            <ListGroup.Item action href="#tourist-info20" className='linkers'>Mattu Beach</ListGroup.Item>
          </ListGroup>
        </p>
        <div className="tourist-container">
          <TInfo id="tourist-info1"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.146426679813!2d74.74985591472898!3d13.341166190614189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbba1fb4b68f1%3A0xf6b5da87d182612e!2sUdupi%20Shri%20Krishna%20Temple!5e0!3m2!1sen!2sin!4v1680947930120!5m2!1sen!2sin"
            info="Udupi Shri Krishna Matha is the most famous Hindu temple in Udupi, Karnataka.
          This temple is dedicated to God Krishna and Dvaita Matha.
          It is a very popular sacred place in Karnataka. Devotees from all around the world visit this temple to seek blessings of deity Krishna and Dvaita.
          There are several temples surrounding the Krishna Matha known as Anantheshwara Temple which is over 1,000 years old and Chandramoulishwar Temple.
          Make sure to not miss the Udupi Krishna temple live darshan.
          The Krishna Matha was founded by the Vaishnavite saint Jagadguru Shri Madhvacharya in the 13th century.
          He was the founder of the Dwaita school of Vedanta. It is believed that Madhwacharya found the vigraha of Shri Krishna in a large ball of gopichandana.
          As told by Sri Madhvacharya, in his Tantrasara Sangraha, the Vigraha is placed Pashchimabhimukha (facing west).
          All the other Vigrahas in other Ashta Muthas face west as well.
          Devotees always have darshan of Lord Krishna through the inner window, known as the Navagruha Kindi & the outer window known as the Kanakana Kindi, which is decorated by an arch named after the great saint Kanakadasa.
          A statue has also been erected. A similar window covers the immediate front of the Vigraha and is called Navagraha Kindi.
          It is often mistaken to be the Kanakuna Kindi.
          The temple opens at 5:30 AM. The unique feature of the temple is that the deity is worshipped through a silver-plated window with nine holes (Navagraha Kindi).
          The temple also offers prasadam (lunch) at noon and is popularly called Anna Brahma as it feeds a vast number of devotees"
            location="Temple Car St, Sri Krishna Temple Complex, Thenkpete, Maruthi Veethika, Udupi, Karnataka"
            speciality="Kanakanakinddi, Navagraha Kindi, Kanakuna Kindi"
          />

          <TInfo id="tourist-info2"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31054.565750021142!2d74.68014106903061!3d13.361421302327095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbc1a3ff8b9bd%3A0x7c5dbd41c1abb9c2!2sMalpe%20Beach!5e0!3m2!1sen!2sin!4v1680947027667!5m2!1sen!2sin"
            info="An unexplored beach destination located at a mere distance of 6km from Udupi is one of the highly favoured Udupi beaches with a never-ending coastline.
          Malpe beach attracts a considerable number of people from the fishing industry as it is the largest natural port in Karnataka.
          The clean white sand, picturesque view, blue skies, and pleasant weather makes it an ideal destination for a weekend getaway.
          You can enjoy a fun boat ride, and try various water sports activities to bring out the adventurous side of yours apart from fishing, angling, and sunbathing on the beautiful beach."
            location="6kms from Udupi, Karnataka"
            speciality="Jet ski, Parasailing, Banana Rides, Speed Boat Rides, Bumpy Rides, surfing, kayaking."
          />

          <TInfo id="tourist-info3"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7763.081761827785!2d74.66875348049093!3d13.378799800041321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbe9044f0a577%3A0xd120f0618dd88215!2sSt.%20Mary&#39;s%20Islands!5e0!3m2!1sen!2sin!4v1680947164977!5m2!1sen!2sin"
            info="Experience the most alluring sunsets on an island of crystalline rocks, white sand beaches and magical aura at st mary’s island.
          Coconut Island, North Island, Darya Bahadurgarh Island and South Island are the four islands that comprise
          St.Mary's Islands are all interconnected and have their own specialities. 
          This quaint island gets its immense geological importance as this is the land where Vasco De Gama set his first foot. 
          One of the beaches in Udupi which is known for their rows of columnar basaltic lava rock formations giving a special landscape to this place."
            location="Maple Harbour | Behind TebmaShipyard, Udupi 576108, India"
            speciality="Deep sea fishing, cliff jumping, kayaking, snorkelling, jet skiing, speed boats, and banana rafting."
          />

          <TInfo id="tourist-info4"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124209.05940008047!2d74.60309184569847!3d13.379282305878963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb0568b04f2db%3A0x7a54289d4ad83a6d!2sKaup%20Light%20House!5e0!3m2!1sen!2sin!4v1680947283266!5m2!1sen!2sin"
            info="Then visit kapu beach where you can sit back and watch the splendid sunset as the falling lights reflect on the water.
          This is one of the most popular beaches in Udupi as it attracts a variety of tourists, and have been a part of a few movie shots because of its striking beauty.
          Another major attraction is the lighthouse which was built in 1901 giving panoramic views of the sea from the top of it.
          Travellers visiting the beach can witness one of the most beautiful coastal belts in India
          And engage themselves in beach activities like playing football or volleyball and have fun building a sand castle."
            location="9km from udupi,  Padu, Karnataka 574106"
            speciality="Light-House" />

          <TInfo id="tourist-info5"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.12439763839456!2d74.76112198152181!3d13.130404277967838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb2618e44d42d%3A0x3c54ed4484fe7145!2sPadubidri%20Beach!5e0!3m2!1sen!2sin!4v1680920801207!5m2!1sen!2sin"
            info="This discrete spot is a perfect weekend getaway as it has got something to offer to people of all age groups.
          Children can collect sea shells from sandy shores, teenagers can engage themselves in swimming.
          And other adventurous activities and businessman can enjoy the calm and serene nature.
          You can also plan a picnic with friends and family at the ‘padubidri end point' where the river meets the sea making it an ideal place to spend an evening.
          Feel blessed to watch the sunset in the west and moon rise from the east simultaneously as the gentle breeze will make you feel closer to nature."
            location="30kms from Udupi, Karnataka"
            speciality="Banana boats and water scooters." />

          <TInfo id="tourist-info6"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.4825846551194!2d74.69995531634522!3d13.567301705193815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc917126b5a313%3A0xce947ab640cc48c5!2sAnegudde%20Vinayaka%20Temple%20Road%2C%20Karnataka%20576257!5e0!3m2!1sen!2sin!4v1680947356525!5m2!1sen!2sin"
            info="Located in Kumbashi, almost 33 kilometers form Udupi, this particular temple is famous for attracting huge number of pilgrims.
          Located on the hills, the temple will let you enjoy the view of a beautiful lake.
          At this temple, people come to worship a not-so-deep pit which is filled by the Bhagirathi river water.
          The lake’s right side is known by the name, Surya Pushkarini, while the left side represents Chandra Pushkarini."
            location="Vokwadi Road, Kumbashi Proper, Karnataka 576257"
            speciality="" />

          <TInfo id="tourist-info7"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.4825846551194!2d74.69995531634522!3d13.567301705193815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb67564f2de7%3A0x4b7770cbdca0c760!2sKadiyali%20Mahishamardini%20Temple!5e0!3m2!1sen!2sin!4v1680947497150!5m2!1sen!2sin"
            info="Kadiyali Shree Mahishamardhini Temple is one of the oldest temples in Udupi district.
          History of temple dates back to more than 1400 years and closely linked to history of Udupi-Rajathapeetapuram.
          As per belief Kadiyali temple was built by King RajaBhoja around same time he built Udupi Shri Anantheshwara Temple.
          Historical and archaeological studies have revealed temple architecture corresponding to same time.
          Revered idol of Shri Mahishamardhini is very unique and made of smooth single black stone appears much ancient.
          Udupi Shri Krishna Mutt established by his holiness Shri Shri Shri Madhwacharya has a very close link with Kadiyali Shree Mahishamardhini Temple.
          Kadiyali temple being on northeast corner of original Udupi town limits is Grama Devi of shivalli and Kadiyali villages.
          Interestingly annual religious procession of boundary crossing (Seemollanghana) from Udupi Krishna Mutt ends with Pooja at Kadiyali temple on Vijaya Dashami day.
          Every year colourful procession of Holi celebration from Shri Krishna Mutt arrivesto Kadiyali Temple.
          Swamijis of 8 mutts (Ashta Mutts) of Udupi visit Shree Kadiyali temple before they start their Paryaya (2 year rotation Pooja of Lord Shri Krishna at Krishna Mutt).
          Udupi Shree Krishna Mutt partially supports annadhana program of Kadiyali temple every Friday since many centuries."
            location="Kadiyali Temple Rd, Kunjibettu, Udupi, Karnataka"
            speciality=""
          />

          <TInfo id="tourist-info8"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31047.552423887177!2d74.67886056903411!3d13.415790190630908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbddd71e4790f%3A0x83cd61fe1c3aa0aa!2sHoode%20Beach%20Udupi!5e0!3m2!1sen!2sin!4v1680947543260!5m2!1sen!2sin"
            info="Hude Beach is a beautiful beach located in Udupi, a coastal town in the state of Karnataka, India. 
          It is situated about 23 km from the town of Udupi and is known for its scenic beauty and peaceful atmosphere.
          The beach is a secluded and pristine stretch of coastline, which makes it a perfect destination for those looking to get away from the crowds.
          The water at Hude Beach is relatively calm and safe for swimming, although caution should always be taken when entering the water.
          The beach is surrounded by lush green hills, which make for a picturesque backdrop.
          There are several small shacks and restaurants near the beach that serve local delicacies and seafood.
          Hude Beach is not as commercialized as some of the other beaches in the area, which means that it is not crowded and maintains its natural beauty.
          Visitors can enjoy a variety of activities at Hude Beach, including swimming, sunbathing, beach volleyball, and taking long walks along the shore.
          The best time to visit Hude Beach is between the months of October and March, when the weather is pleasant and the sea is calm."
            location=""
            speciality="Delta Beach, where river and sea meets"
          />

          <TInfo id="tourist-info9"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.767578045798!2d74.64811350781248!3d13.630862500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc8d9e542b455d%3A0x1139e9d12cc1a46e!2sKodi%20beach%20Kundapura!5e0!3m2!1sen!2sin!4v1680947713732!5m2!1sen!2sin"
            info="Popularly known as delta beach or Kodi Bengare beach, this is a hidden gem located at a distance of 6kms from Kundapura town. 
          This beach is perfect for a day trip to refresh themselves by beach bumming and swimming while enjoying the fresh seafood.
          Its secluded location makes it a peaceful, serene and relaxing spot for all the beach goers while enjoying the beauty of the Arabian sea. 
          While you are here, you can spot some of the fishermen casting their nets, small shacks serving dosas and seafood
          And enjoy walking along the shorelines and gazing at the sunset right in front of you.If surfing excites you, then shaka surf club on the Kodi beach will
          help you with your surfing adventure."
            location="Bengre Estuary, Kodi Bengare, Karnataka"
            speciality="Delta Beach, where river and sea meets"
          />

          <TInfo id="tourist-info10"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.767578045798!2d74.64811350781248!3d13.630862500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb65e9c9b031%3A0xfef4cc6a3745acc3!2sCorporation%20Bank%20Heritage%20Museum%20(Coin%20Museum)%20Udpi!5e0!3m2!1sen!2sin!4v1680947791736!5m2!1sen!2sin"
            info="Famed as the Corporation Bank Heritage Museum is one of the best places to visit in Udupi.
          If you are passionate about collecting coins and history then this is one of the Udupi tourist attractions that deserve a spot on your itinerary. 
          These coins and notes are from 400 bc and this museum will also give you details about the important historical events in Udupi."
            location="Corporation Bank Road, Thenkpete, Maruthi Veethika, Udupi, Karnataka 576101"
            speciality="Have a lookout for the various coins available during post-independence, 
          pre-independence, hoistirical coibns of Kadambas, Cholas and Foreign coins"
          />

          <TInfo id="tourist-info11"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.767578045798!2d74.64811350781248!3d13.630862500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca34c22f315f3%3A0xd97c5cdb32660496!2sManipal%20End%20Point%20Park!5e0!3m2!1sen!2sin!4v1680947851374!5m2!1sen!2sin"
            info="Manipal End Point Park, It is a well-known tourist attraction in the city of Manipal (Karnataka). 
          As its name suggests, this place is a public park that is blest with the beauty of nature in abundance. 
          The surrounding of the park can mesmerize visitor owing to the calm and soul-soothing ambiance. 
           Manipal End Point Park is a famous tourist site in the city and is visited on a huge scale ,It is surrounded by the lush green vegetation in all directions and is a pure treat to eyes."
            location=""
            speciality="And This park, due to a slight elevation, serves as an appropriate place for relishing a short trek , Climbing atop the End Point offers a panoramic view of the nearby hills and the enchanting view of Sharavati River.
          Locals and visitors flock to this park alike for spending the leisure time or for a casual walk."
          />

          <TInfo id="tourist-info12"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.25926314535!2d74.78036250737291!3d12.95377224101788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351cb1e247f19%3A0x8cb26c939e3fe4ad!2sPanambur%20Beach!5e0!3m2!1sen!2sin!4v1682483094252!5m2!1sen!2sin"
            info="Panambur Beach is a popular tourist destination located in Mangalore city of Karnataka state, India. It is situated about 10 km from the city center and is known for its scenic beauty, clean waters, and water sports activities.
          Panambur Beach has a rich history and is believed to have been an important center of maritime trade during the reign of the Alupa dynasty. Later, it came under the control of the Portuguese, who used it as a port for their trade activities."
            location=""
            speciality="Panambur Beach is a bustling tourist spot, known for its beautiful golden sands, clear blue waters, and swaying palm trees. The beach is also known for its water sports activities such as surfing, jet skiing, parasailing, and boating. One of the specialities of Panambur Beach is the International Kite Festival, which is held annually in January or February. The festival features kite flying competitions, cultural programs, and other fun activities.
          Another speciality of Panambur Beach is the beach festival, which is held annually in April or May. The festival features beach volleyball, sand sculpting, and other fun activities."
          />

          <TInfo id="tourist-info13"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.695388295923!2d74.89684817501625!3d12.927289187383943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3576920d9b263%3A0xea0acaebe4241a6a!2sPilikula%20Biological%20Park!5e0!3m2!1sen!2sin!4v1682689455166!5m2!1sen!2sin"
            info="Pilikula Nisargadhama is a popular eco-education and tourism development project located in Mangalore, Karnataka, India. The word 'Pilikula' means ''pond of tigers'' in the ''Tulu'' language, and the park is named
          after a pond located within the park. The park is spread over an area of 370 acres and is situated at a distance of about 12 km from the city center. It was established in 1998 by the Government of Karnataka and 
          aims to promote eco-tourism and environmental conservation."
            location="Pilikula, Moodushedde Rd, Mangaluru, Karnataka 575028"
            speciality="The park features a wide range of attractions, including a zoo, botanical garden, boating facilities, an artificial waterfall,
          a science center, and an outdoor theatre. The park also has a golf course and a 27-hole mini-golf course. One of the major attractions of Pilikula
          Nisargadhama is the 3D planetarium, which provides a fascinating insight into the universe and the solar system. The park also has a biological 
          park that showcases the rich flora and fauna of the Western Ghats. Pilikula Nisargadhama is also home to several indigenous species of plants and 
          animals, including deer, wild boars, jackals, and various species of birds. The park is an excellent destination for nature lovers, wildlife enthusiasts,
          and families looking for a day out.
          
          In addition to its natural beauty and diverse range of attractions, Pilikula Nisargadhama also has a rich cultural heritage. The park is situated on the 
          site of an ancient temple, and several artifacts and inscriptions dating back to the 10th century have been discovered in the area.
          
          Overall, Pilikula Nisargadhama is an excellent destination for visitors looking to explore the natural
          beauty and cultural heritage of Mangalore."
          />

          <TInfo id="tourist-info14"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931372.4471295658!2d71.32777144720976!3d15.791774090618356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca73e5d5060d7%3A0x12df60a9a9a19135!2sShri%20Parashurama%20Theme%20Park!5e0!3m2!1sen!2sin!4v1683354609172!5m2!1sen!2sin"
            info="The Parashuram theme park, with a 33 feet bronze statue of Lord Parashuram, was inaugurated at Umikal hill at Bailur in Karnataka's Udupi district by Chief Minister Basavaraj Bommai. 
          Speaking after the inauguration on Friday evening in Karkala taluk in month of January, the Chief Minister said a master plan will be drawn to promote culture and temple tourism in coastal Karnataka. 
          The Parashuram statue installed atop Umikal hill in Bailur, located by the side of National Highway between Udupi and Karkala, is already attracting thousands of tourists from various parts of the country.
          The theme park has a bhajan mandir, museum, open air amphitheatre and many more."
            location="7WMM+2R3, Karkala - Hiriyadka Rd, Bailur, Karnataka 574102"
            speciality={`${<br />}${<br />} The beautiful Tulunadu which we see today was not the part of land long long back. It was the part of the ocean.
          It was Parashurama, who is said to be the sixth Avatara of Lord Vishnu according to Hindu mythology who made it a part of the land. Parashurama was 
          a Brahmin and was the son of sage Jamadagni and his wife Renuka. Once, Jamadagni ordered Parashurama to chop the head of his mother because he was angry on her.
          Parashurama being the follower of father's words, chopped his mother's head with his axe. Later when his father agreed to give him blessings, he asked Jmadagni to revive his mother.
          Jamadagni agreed and his wife came alive by his blessings. This is the early story of Parashurama.
          Parashurama hated all the Kshatriyas; so, he destroyed them all. And donated the gained land to sage Kashyapa. After donating all the land, he thought, staying in the donated land 
          is not right. So, he went on to Sahyadri to start a meditation on Lord Shiva. Shiva appeared before him and said, he would incarnate in Kadri which was then called Kadalivana and asked Parashurama to meditate there. 
          When Parashurama came to Kadalivana, it was occupied by the ocean. So, Parashurama went to the Ocean King and asked him to take back the ocean from that part of the land. When the ocean king refused to do so, 
          Parashurama threw his axe to an extent in anger. By the fear of Parashurama's anger, the ocean king took back the ocean from that much place where the axe had fallen. 
          This was how the Tulunadu was formed and so, it was called The Parashurama Srishti or Parashurama Kshetra.`}
          />

          <TInfo id="tourist-info15"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3431856272273!2d75.00298087502104!3d13.203757487133425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56644ac3981b%3A0x56e4f4ff65f1b00!2sKarkala%20Shri%20Gommateshwara%20Statue!5e0!3m2!1sen!2sin!4v1683354739887!5m2!1sen!2sin"
            info="The Bahubali statue in Karkala is a monolithic statue of Lord Bahubali, a revered figure in Jainism. It is one of the largest monolithic statues in India, and is a popular tourist attraction in the town.  
          The Bahubali Statue in Karkala is a 42-foot tall monolithic statue of Lord Bahubali, a revered figure in Jainism.
          The statue was erected in 1432 AD by a Jain king named Veera Pandya II. It is carved out of a single block of granite, and stands at a height of 42 feet (13 meters). The statue depicts Lord Bahubali, 
          the son of the first Tirthankara, Lord Adinatha. According to Jain mythology, Lord Bahubali 
          attained enlightenment after meditating for a year standing on one leg, with his arms raised above his head."
            location="Built in the 15th century, this soaring Jain statue stands 40 ft. tall on top of a hill called Gommateshwara Betta, about 1.5 km from the center of Karkala town. Karkala, Karnataka 574104"
            speciality={`Baahubali was the son of first Jain Tirthankara – Rishabhnath or Adinath. It is said that Adinath had 100 sons. But Bahubali and Bharat Chakravartin were the two main contenders to his legacy. 
          Adinath divided his kingdom and gave the northern kingdom to Bharat who ruled from Ayodhya or Ayodhyapuri.
          It is also referred to as Vinita in some texts. The southern kingdom was given to him.${<br />}
          When Bharat tried to be the Chakravarti or the king who rules all four directions, he went around the world and conquered all kingdoms. However, he still had to win his brother’s. 
          All brothers except he conceded. Two brothers then fought in all kinds of ways and Bahubali was the winner.${<br />}
          However, as soon as he won he was dejected. He felt guilty for defeating his own elder brother. He went to Mount Kailash and meditated in standing position on the mountain. And he was 
          so still that vegetation and ant hills grew around his legs and his body became part of the place he was standing on. A year later his brother Bharat came and prayed to him – at which point he was liberated of his guilt. 
          Metaphorically, he won over his own vices and attained the ultimate knowledge. He was liberated and he became a Siddha.
          ${<br />}Standing posture of his is known as Kayotsarga. Jain Tirthankaras can be seen in two postures while meditating – sitting in lotus pose or Kayotsarga.
          ${<br />}There are about 500 steps to climb – being small steps, they are not very difficult to climb. The intriguing bit is that you cannot see the statue until you have almost climbed 
          all the steps. If the weather is good, climbing can be fun, as you see the lush green landscape around the hill. As you go up, the view changes.`}
          />

          <TInfo id="tourist-info16"
            mapsrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3884.266763654523!2d75.0001762!3d13.2085613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb5667afce4e93%3A0xe1f344fd5c943d81!2sShri%20Chaturmukha%20Jaina%20Basadi!5e0!3m2!1sen!2sin!4v1683354999723!5m2!1sen!2sin"
            info={`The Chaturmukha Basadi is a Jain temple located in Karkala, known for its unique architecture and intricate carvings. It is one of the most important Jain temples in South India and is a popular tourist attraction in the town. The temple was built in 1432 AD by a Jain king named Veera Pandya II. 
          It is dedicated to Lord Adinatha, the first Jain Tirthankara, and has four identical entrances, each leading to a sanctum sanctorum. The temple is constructed entirely out of granite and features some of the most intricate carvings and sculptures in the region.
          `}
            location="The temple is located in the heart of Karkala town and can be easily accessed by road. The Chaturmukha Basadi is an important religious site for Jains and is visited by thousands of devotees every year. The Chaturmukha Basadi in Karkala is an important example of Jain architecture and is a testament to the 
          artistic skills of the artisans of the time. The temple's unique design and intricate carvings make it a must-visit destination for anyone interested in South Indian architecture and history. 6253+CXG, Market Rd, Karkala, Karnataka 574104"
            speciality="The Chaturmukha Basadi gets its name from the four identical faces carved on the outer walls of the temple. Each face is believed to represent one of the four Tirthankaras who have attained nirvana. The temple has a unique design, with four sanctum sanctorums facing each other, with a central hall connecting them. 
          The inner walls of the sanctum sanctorums are decorated with carvings of Tirthankaras, while the outer walls feature carvings of gods and goddesses from Hindu mythology."
          />

          <TInfo id="tourist-info17"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.260360260673!2d75.00596077502456!3d13.396198486959548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb5f1eab57593b%3A0xa7e870eb8e9d10f1!2sVaranga%20Lake%20Jain%20Temple!5e0!3m2!1sen!2sin!4v1683354943975!5m2!1sen!2sin"
            info={`The Varanga Jain temple is a 12th-century Jain temple located in Varanga, a small town near Karkala. It is known for its unique architecture and intricate carvings and is a popular tourist attraction in the region. The temple was built in the 12th century AD and is believed to have been built by the Hoysala kings. It is dedicated to Lord Neminatha, the 22nd Tirthankara of the Jains. The temple underwent several renovations over the years, and the current structure dates back to the 16th century.`}
            location="The Varanga Jain temple is located in Varanga, a small town near Karkala. It can be easily accessed by road and is an important religious site for Jains. The Varanga Jain temple in Karkala is an important example of Jain architecture and is a testament to the artistic skills of the artisans of the time. The temple's unique architecture and intricate carvings make it a must-visit destination for anyone interested in South Indian architecture and history.
          Varanga Jain Math Road, Varanga, Karnataka 574108"
            speciality="The Varanga Jain temple is known for its unique architecture and intricate carvings. The temple has a square-shaped sanctum sanctorum with a pyramidal roof. The outer walls of the temple are decorated with intricate carvings of gods and goddesses from Jain mythology. The temple also features several other smaller shrines dedicated to various deities. The most unique feature of the temple is the 108 pillars, each of which has a unique carving."
          />

          <TInfo id="tourist-info18"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3133984164824!2d74.96949027502113!3d13.20563008713173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb561edd890b79%3A0x8e9fcc685bc7c67d!2sChurch%20Of%20St%20Lawrence%2C%20Attur%2C%20Karnataka%20574110!5e0!3m2!1sen!2sin!4v1683355165438!5m2!1sen!2sin"
            info={`St. Lawrence Church is known for its unique blend of Indian and European architecture. The church has a distinct octagonal shape, with four altars dedicated to different saints. The interior of the church is decorated with intricate carvings and paintings, while the exterior features a blend of Indian and European architectural elements. The church also features a 200-foot high tower, which is a prominent landmark in the town.${<br />}
          The church is located in the heart of Karkala town and can be easily accessed by road. It is an important religious site for Catholics and is visited by thousands of devotees every year. St. Lawrence Church in Karkala is an important example of the blend of Indian and European architectural styles and is a testament to the cultural diversity of the town. The church's unique architecture and intricate decorations make it a must-visit destination for anyone interested in South Indian architecture and history.`}
            location="Attur, Karnataka 574110"
            speciality="St. Lawrence Church is a Catholic church located in Karkala, dedicated to St. Lawrence, a Roman Catholic saint. It is known for its unique blend of Indian and European architecture and is a popular tourist attraction in the town. The church was built in 1759 by a local landlord named Saldanha. It is believed to have been built in gratitude to St. Lawrence for saving Saldanha's life during a shipwreck. The church underwent several renovations over the years, and the current structure dates back to the early 20th century."
          />

          <TInfo id="tourist-info19"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.016421163007!2d74.68992507502372!3d13.349254587001884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbc00a32f4115%3A0x572fb4c434b8d1ca!2sSea%20Walk%20Malpe!5e0!3m2!1sen!2sin!4v1683355764440!5m2!1sen!2sin"
            info="Sea Walk Malpe is a unique and exciting underwater adventure located in Malpe, Udupi district of Karnataka, India. It is an adventure activity that allows you to walk on the seabed and explore the marine life without getting wet.
          During the sea walk, you will be equipped with a special helmet that allows you to breathe normally while walking on the seabed. The helmet is connected to an air supply on the surface, so you don't have to worry about carrying a tank of oxygen.
          The sea walk takes place in the shallow waters of the Arabian Sea, and you will be accompanied by trained professionals throughout the entire experience. The entire activity takes about 20-30 minutes, during which you can explore the colorful marine life and enjoy the breathtaking views."
            location="St.Mary's Island Boating Office Rd, near Tebma shipyard LTD, Malpe, Karnataka 576108"
            speciality="Sea Walk Malpe is a popular tourist attraction in Udupi and attracts visitors from all over the world. The best time to visit is between October to May when the weather is pleasant and the sea is calm. In addition to the sea walk, 
          there are plenty of other activities and attractions in Malpe, including water sports, beach walks, and sightseeing."
          />

          <TInfo id="tourist-info20"
            mapsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15532.925178017056!2d74.71465874817302!3d13.273481593123304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcba65277d7c89%3A0xbce72c5845f20ae2!2sMattu%20Beach!5e0!3m2!1sen!2sin!4v1683369276032!5m2!1sen!2sin"
            info={`Mattu Beach, located around 10 kilometres from the city of Udupi, is one of the untouched beauties of the state. Away from the bustling city, The Beach is a secluded paradise for those looking for relaxation amidst natural surroundings. This unexplored beach is blessed with the alluring beauty of nature, swaying coconut and palm trees, and the cool gushes of wind.
          The beach is known for its mesmerizing views, calm backwaters, and awe-inspiring sunsets. Surprisingly, The Beach is still away from the tourist radar, giving it a pristine and peaceful vibe. Besides giving the opportunity to connect with nature, the Beach also offers exciting activities to enjoy. ${<br />} With coconut trees and backwaters on one side and sea on the other, a drive along the beach is enough to lift up your spirits and rejuvenate your senses. You can also plan a relaxed picnic with your family and friends.
          Another interesting feature of Mattu beach is bioluminescence or sea sparkles. Yes, the beach has been lightning up by the bioluminescent organisms for the past two years. This phenomenon has turned the location all more beautiful and stunning. So, if you plan to stay on after the sun sets, you will be able to witness nature in its full glory. Not only this, but you can also expect water sports and other activities,`}
            location="Relaxed, secluded beach for swimming, also popular for walks, picnics & sunset views. 574118"
            speciality="The 30 kilometres long beach is also popular for ‘mattu gulla’, a special variety of eggplant grown in the area. This special eggplant beckons foodies from all across the state who flock here to treat themselves with its unique taste. Udupi’s Mattu Beach is easily accessible by different modes of transport, making it easier for tourists to commute in and around the region. You can take a bus to the Mattu bus stop and head to the beach.
          The heavenly and unexploited beauty of Mattu Beach in Udupi will leave you spellbound. The Beach is, thus, undoubtedly one of the best beaches in Karnataka for nature lovers, foodies, and adventure."
          />
        </div>
      </div>
    </>
  )
}