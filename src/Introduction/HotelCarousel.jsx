import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './intro.css'

function HotelCarousel() {
  const [showtext, setshowtext] = useState(false)
  const handleClick = () => {
    setshowtext(!showtext)
  }
  return (
    <Carousel prevLabel='' nextLabel='' className='slides'>
      <Carousel.Item interval={1500}>
        <img className='img' onClick={handleClick} src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/reception.jpg' alt={`First Slide`} />
        {showtext && <Carousel.Caption>
          <h4 className='text-black t'>Reception</h4>
          <p className='text-white t'>The reception in a hotel is typically the first point of contact for guests.
            It is the area where guests check in and out of their rooms, receive assistance with any questions or concerns,
            and can make requests for additional services such as housekeeping, room service, or transportation.
            The reception area may also have a concierge desk to help guests with recommendations for local attractions,
            restaurants, or events. Additionally, the reception area may house safety deposit boxes for guests to store
            their valuables during their stay. Overall, the reception in a hotel is a central hub for guests to receive
            assistance and information during their stay.</p>
        </Carousel.Caption>}
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img className='img' onClick={handleClick} src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/attraction.jpg' alt={`First Slide`} />
        {showtext && <Carousel.Caption>
          <h4 className='text-black t'>Attraction and Cleanliness</h4>
          <p className='text-white t'>Cleanliness is a crucial factor in the hotel industry, as it can make or break a guest's experience.
            Hotel guests expect a high level of cleanliness, hygiene, and sanitation to ensure their safety and comfort during their stay. Maintaining a clean
            and tidy hotel not only ensures guest satisfaction but also helps to prevent the spread of illnesses and diseases.
            To maintain cleanliness in hotels, regular cleaning schedules should be established for every area of the
            hotel, including guest rooms, public areas, and facilities such as swimming pools and gyms.</p>
        </Carousel.Caption>}
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img className='img' onClick={handleClick} src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/environment.jpg' alt={`First Slide`} />
        {showtext && <Carousel.Caption>
          <h4 className='t'>Environment around the hotel</h4>
          <p className='t'>The environment and scenery of a hotel play a significant role in shaping a guest's overall experience. Hotels
            situated in natural surroundings, such as mountains, beaches, or forests, offer guests the opportunity to connect with nature and enjoy
            breathtaking views.In contrast, hotels located in urban areas offer a different environment and scenery,
            such as cityscapes, skylines, and cultural attractions. These hotels provide guests with access to local shops,
            restaurants, and entertainment options.
          </p>
        </Carousel.Caption>}
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img className='img' onClick={handleClick} src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/foods_services.jpg' alt={`First Slide`} />
        {showtext && <Carousel.Caption>
          <h4 className='text-danger t'>Foods and Services</h4>
          <p className='text-danger t'>Dining and restaurants are important components of the hotel experience, as they provide guests with
            the opportunity to indulge in delicious cuisine and enjoy social gatherings with friends, family, or colleagues.
            Hotels typically offer a variety of dining options, ranging from fine-dining restaurants to casual cafes
            and bars. Many hotels also provide in-room dining services, where guests can order food and drinks directly
            to their rooms.</p>
        </Carousel.Caption>}
      </Carousel.Item>
    </Carousel>
  );
}

export default HotelCarousel;