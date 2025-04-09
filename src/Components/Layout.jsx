import React from 'react'
import { Helmet } from 'react-helmet'

function Layout({ title, author, description, keywords }) {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
  )
}

Layout.propTypes = {
  title: 'WanderHub : RoomBooking by Hotel Brindavan',
  author: 'Hotel Brindavan',
  description: `WanderHub-Udupi 'Hotel Brindavan' Experience luxury and comfort at our hotel. Enjoy modern amenities and personalized service in the heart of Udupi. Book your stay now!
  SweetHub-The Sweet Mandige :Indulge in our irresistible sweets and treats at SweetHub. Our handcrafted confections are made with the finest ingredients and are sure to satisfy your sweet tooth. Visit us today!
  Tourism: Discover the world with our comprehensive tourism guide. From exotic destinations to hidden gems, we've got everything you need to plan your next adventure. Start exploring today!`,
  keywords: 'Hotel Room Booking, room book, Hotel Brindavan, Brindavan'
}

export default Layout

