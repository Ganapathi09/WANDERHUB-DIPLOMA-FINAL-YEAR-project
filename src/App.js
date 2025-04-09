import React from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import SiteFeedBack from "./Components/SiteFeedBack";
import Pagenotfound from "./Introduction/Pagenotfound";
import Signin from './Components/Signin';
import Registration from "./Components/Registration";

import Home from './Introduction/Home'
import About from './Introduction/About'
import Footer from './Components/Footer';

import HotelHome from './Hotel_Operation/HotelHome';
import BookingConfirmation from './Payment/BookingConfirmation';

import SweetHome from "./Introduction/Sweethub_operation/SweetHome";
import SweetShopsList from "./Introduction/Sweethub_operation/SweetShopsList";
import Krish from "./Introduction/Sweethub_operation/SweetShops/Krish"
import Vipra from "./Introduction/Sweethub_operation/SweetShops/Vipra"
import Venkatesh from "./Introduction/Sweethub_operation/SweetShops/Venkatesh"
import OM from "./Introduction/Sweethub_operation/SweetShops/OM"
import Mishra from "./Introduction/Sweethub_operation/SweetShops/Mishra"
import UdupiSweets from "./Introduction/Sweethub_operation/SweetShops/UdupiSweets"
import SaiParivar from "./Introduction/Sweethub_operation/SweetShops/SaiParivar"
import Madhuram from "./Introduction/Sweethub_operation/SweetShops/Madhuram"
import Parivar from "./Introduction/Sweethub_operation/SweetShops/Parivar"

import TouristHome from "./Tourism_Operation/TouristHome";

import ForgotPassword from "./Components/ForgotPassword";
import PrivateRoute from "./Authentication/PrivateRoute";
import AdminRoute from "./Authentication/AdminRoute";

import AdminDashboard from "./Authentication/Admin_User/AdminDetails/AdminDashboard";
import BookingScreen from "./Hotel_Operation/BookingScreen";

import UserDashBoard from "./Authentication/Admin_User/UserDetails/UserDashboard";
import HomeScreen from "./Hotel_Operation/HomeScreen";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        {/* Normally intro of our website */}
        <Route path='/' element={<Home />} />

        {/* if entered some random address out of this website */}
        <Route path='*' element={<Pagenotfound />} />

        {/* Booking status page */}
        <Route path="/booking_confirmation" element={<PrivateRoute />}>
          <Route path='' element={<BookingConfirmation />} />
        </Route>

        {/* Consists of frequently asked questions */}
        <Route path="/About" element={<PrivateRoute />}>
          <Route path='' element={<About />} />
        </Route>

        {/* Features offered by our hotel */}
        <Route path="/Welcome_to_our_HotelBrindavan" element={<PrivateRoute />}>
          <Route exact path='' element={<HotelHome />} />
        </Route>

        {/* Booking Room by our hotel */}
        <Route path="/Welcome_to_our_HotelBrindavan/Book_Your_Room" element={<PrivateRoute />}>
          <Route exact path='' element={<HomeScreen />} />
        </Route>

        {/* Booking  */}
        <Route exact path="/book/:roomid/:fromDate/:toDate" element={<BookingScreen />} />

        {/*  Admin  Personae*/}
        <Route path="/DashBoard" element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
        </Route>

        {/* User Personae*/}
        <Route path="/DashBoard" element={<PrivateRoute />}>
          <Route path='user' element={<UserDashBoard />} />
        </Route>

        {/* SWeetshop near udupi */}
        <Route path="/Sweethub" element={<PrivateRoute />}>
          <Route path='' element={<SweetHome />} />
        </Route>

        {/* This page will produce the features offered by each sweethub */}
        <Route path="/Sweethub/BuySweets" element={<PrivateRoute />}>
          <Route path='' element={<SweetShopsList />} />
        </Route>

        {/* List of tourist places in our coastal areas*/}
        <Route path="/Tourism" element={<PrivateRoute />}>
          <Route path='' element={<TouristHome />} />
        </Route>

        {/* Suggestion features */}
        <Route path="/FeedbackForm" element={<PrivateRoute />}>
          <Route path='' element={<SiteFeedBack />} />
        </Route>

        {/* Sweets available in the sweetshops */}
        <Route path="/Welcometo_Saralayas_Mandige" element={<PrivateRoute />}>
          <Route path='' element={<Krish />} />
        </Route>
        <Route path="/Welcometo_VIPRA_SWEET_HOME" element={<PrivateRoute />}>
          <Route path='' element={<Vipra />} />
        </Route>
        <Route path="/Welcometo_Sri_Venkateshwara_Sweets" element={<PrivateRoute />}>
          <Route path='' element={<Venkatesh />} />
        </Route>
        <Route path="/Welcometo_OM_UTSAV_SWEETS" element={<PrivateRoute />}>
          <Route path='' element={<OM />} />
        </Route>
        <Route path="/Welcometo_BIG_MISHRA_PEDHA" element={<PrivateRoute />}>
          <Route path='' element={<Mishra />} />
        </Route>
        <Route path="/Welcometo_UDUPI_SWEETS" element={<PrivateRoute />}>
          <Route path='' element={<UdupiSweets />} />
        </Route>
        <Route path="/Welcometo_SRI_SAI_PARIVAR" element={<PrivateRoute />}>
          <Route path='' element={<SaiParivar />} />
        </Route>
        <Route path="/Welcometo_MADHURAM_MISTHAN_BHANDHAR" element={<PrivateRoute />}>
          <Route path='' element={<Madhuram />} />
        </Route>
        <Route path="/Welcometo_PARIVAR_SWEETS" element={<PrivateRoute />}>
          <Route path='' element={<Parivar />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
