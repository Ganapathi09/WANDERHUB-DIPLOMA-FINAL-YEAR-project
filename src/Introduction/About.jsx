import React from 'react'
import Queries from './Queries'
import Layout from '../Components/Layout'
import './intro.css'

export default function About() {
    return (
        <>
            <Layout title='Welcome Home - WanderHub' />
            <div className='about'>
                <p className='faq-intro'>
                    <h3>About Us</h3>
                    <h4 style={{ textAlign: 'center' }} >Some of the Frequently Asked questions (FAQs) About Our Hotel </h4>
                    We understand that planning a trip can be overwhelming and that you may have some questions
                    about our hotel. Below are some of the questions to help you plan your stay with us. If
                    you don't hesitate to contact us. Our friendly staff are always there to help you with any questions
                    or concerns you may have.
                </p>
                <Queries />
            </div></>
    )
}
