import React from 'react'
import { Tabs } from 'antd'
import './hotel.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import SliderofImages from '../Components/SliderofImages'

const { TabPane } = Tabs

export default function HotelsTabular() {
  return (
    <Tabs defaultActiveKey='1'>
      <TabPane tab='About Us' key='1'>
        <h1 className="text-center">Lists of Services Offered by our Hotel</h1>
        <p className="contentinfos">
          <strong> <BsFillArrowRightCircleFill /> Brindavan in Santhekatte, Udupi </strong><br />
          Brindavan In Udupi. Hotels with Address, Contact Number, Photos, Maps. View Brindavan, Udupi on Justdial
          Whether it is a vacation with family or a business trip, everyone looks for safe hotels Hotels that have the best facilities.
          Apart from the basic facilities, some of the exclusive places also have a spa, kid's area, pool and more to offer the best
          service to the guests. From bed and breakfast to complimentary meals, you can enjoy some of the best services when you
          book the right place. Brindavan in Santhekatte Udupi welcomes people from all walks of life. <br /><br />
        </p>
        <p className="contentinfos">
          <strong> <BsFillArrowRightCircleFill /> Brindavan Location and Overview: </strong><br />
          Established in the year 2005, Brindavan in Santhekatte, Udupi is a top player in the category Hotels in the
          Udupi. This well-known establishment acts as a one- stop destination servicing customers both local and
          from other parts of IJdupi. Over the course of its journey, this business has established a firm foothold
          in it's industry. The belief that customer satisfaction is as important as their products and services, have
          helped this establishment garner a vast base of customers, which continues to grow by the day. This
          business employs individuals that are dedicated towards their respective roles and put in a lot of effort
          to achieve the common vision and larger goals of the company. In the near future, this business aims to
          expand its line of products and services and cater to a larger client base. In IJdupi, this establishment
          occupies a prominent location in Santhekatte. It is an effortless task in commuting to this establishment as
          there are various modes of transport readily available. It is at , Near Kalyanpura, which makes it easy for first-
          time visitors in locating this establishment. It is known to provide top service in the following categories:
          <strong>Hotels, Lodging Services, AC Lodging Services, Hotel Reservations. </strong><br /><br />
        </p>
        <p className="contentinfos">
          <strong> <BsFillArrowRightCircleFill /> Brindavan Products and Services offered: </strong><br />
          Brindavan in Santhekatte has a wide range of products and / or services to cater to the varied requirements of
          their customers. The staff at this establishment are courteous and prompt at providing any assistance,
          They readily answer any queries or questions that you may have. Pay for the product or service with ease by
          using any of the available modes of payment, such as Cash, phonepe, G Pay. This establishment is functional
          from 11 - 23:00. Please scroll to the top for the address and contact details of arindavan at Santhekatte, Udupi_
        </p>
      </TabPane>
      <TabPane tab='ArtGallery' key='2'>
        <h1 className='text-center'>The Services offered by our hotel are:</h1>
        <ol className='justify-content-center list-unstyled'>
          <li className='text-center linkers'>Parking</li>
          <li className='text-center linkers'>24hr Reception facilities</li>
          <li className='text-center linkers'>Food and Accessories</li>
          <li className='text-center linkers'>Laundaries</li>
        </ol>
        <SliderofImages heading="Have a look-out of ART_GALLERY of our Hotel Brindavan"
          src1="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/1(1).jpg"
          alt1="WELCOME TO OUR HOTEL BRINDAVAN" text1="Our Hotel"
          src2="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/1(2).jpg"
          alt2="WELCOME TO OUR HOTEL BRINDAVAN" text2="Entrance-inside"
          src3="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/1(3).jpg"
          alt3="WELCOME TO OUR HOTEL BRINDAVAN" text3="Double Bed Room"
          src4="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/1(4).jpg"
          alt4="WELCOME TO OUR HOTEL BRINDAVAN" text4="Gym"
          src5="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/1(5).png"
          alt5="WELCOME TO OUR HOTEL BRINDAVAN" text5="Pool"
          src6="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/1(6).jpg"
          alt6="WELCOME TO OUR HOTEL BRINDAVAN" text6="AC-Room"
        /> <br />
        <SliderofImages heading="Have a look-out of Food-facilities of our Hotel Brindavan"
          src1="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/2(1).jpeg"
          alt1="WELCOME TO OUR HOTEL BRINDAVAN" text1="Food Menu"
          src2="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/2(2).jpg"
          alt2="WELCOME TO OUR HOTEL BRINDAVAN" text2="Rice-Thali"
          src3="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/2(3).jpeg"
          alt3="WELCOME TO OUR HOTEL BRINDAVAN" text3="Fish Dishes"
          src4="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/2(4).jpeg"
          alt4="WELCOME TO OUR HOTEL BRINDAVAN" text4="Chicken Dishes"
          src5="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/2(5).jpg"
          alt5="WELCOME TO OUR HOTEL BRINDAVAN" text5="Veg Dishes"
          src6="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/after_loggedin/artgallery/2(6).jpeg"
          alt6="WELCOME TO OUR HOTEL BRINDAVAN" text6="Juices and Snacks"
        />
      </TabPane>
    </Tabs>
  )
}
