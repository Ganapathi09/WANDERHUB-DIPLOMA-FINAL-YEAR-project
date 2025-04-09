import React from 'react'
import SweetCard from '../SweetCard'
import './sweet.css'
import SliderofImages from '../../Components/SliderofImages'
import Layout from '../../Components/Layout'
export default function SweetHome() {

    return (
        <>
            <Layout title='GetStarted with Sweets- WanderHub' />
            <div className='sweet-content'>
                <h3 style={{ textAlign: 'center' }}>SweetHub (Sweet Mandige).</h3>
                <legend style={{ textAlign: 'center' }} >Tasting 5000-Year-Old Sweet Mandige in Belgaum:</legend>
                <p id="sweet-intro">While continuing our food tour in North Karnataka, Unbox Karnataka introduces you to a rare Indian sweet dish called Mandige which has a history of over 5000 years.
                    This special sweet dish is quite difficult to prepare but the end product is totally worthy of all the hard work.
                    It is believed that Lord Krishna mentioned about this special sweet during Dvapara Yuga. We are proud to introduce such exquisite dish to our audience.
                    So, enjoy the video and do share your views and opinions in the comments section. <br /><br />
                    Unbox Karnataka is a Kannada food review channel that explores the food culture across Karnataka. The team travels to various places in search of delicacies and local favorites relish the food and give an honest review to help the audience choose the right cuisine at the right places. We also interact with the audience, and they suggest we try their local specialties, which we do eventually.
                    Our audience enjoys our videos, and we strive to meet their ever-increasing expectations with each new release.
                </p>{<SweetCard />}

                <SliderofImages heading="Welcome to SWEET HUB"
                    src1="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/Mand.jpg"
                    alt1="Mandige" text1="Mandige"
                    src2="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/ladoo.jpg"
                    alt2="Ladoo" text2="Ladoo"
                    src3="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/myspsk.jpg"
                    alt3="Mysore Palk" text3="Mysore Palk"
                    src4="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/gulab-jamoon.jpg"
                    alt4="Gulab Jamoon" text4="Gulab Jamoon"
                    src5="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/pedha.jpg"
                    alt5="Doodh Pedha" text5="Doodh Pedha"
                    src6="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/jalebi.jpg"
                    alt6="Jalebi" text6="Jalebi"
                />
            </div></>
    )
}
