import { Accordion } from 'react-bootstrap'
import React from 'react'
import './intro.css'
import { Link } from 'react-router-dom'

export default function Queries() {
    return (
        <div className='mb-2'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>General Hotel Information</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. What time can I check-in and check-out?</b>
                        <span className='question'><br />
                            Standard check-in time and check-out  is at all hours (24hrs service).
                        </span><br /><br />

                        <b> 2. How to avail any room services from our hotel ?</b>
                        <span className='question'><br />
                            Please press service key “1” in the landline of your room for assistance.
                        </span><br /><br />

                        <b> 5. Do you have wifi?</b>
                        <span className='question'><br />
                            Stay connected during your stay with 40MB bandwidth internet service provided throughout our guestrooms and public areas. Please log-in with your username and password provided at check-in. User name is your room no. Password is *followed by room no. eg: USER NAME: 2803 PASSWORD: *2803.
                        </span><br /><br />

                        <b> 6. Do you allow early check in and late check-out?</b>
                        <span className='question'><br />
                            Requests for early check-in and late check-out are honored but subject to availability. Allowable free-of-charge early check-in is from 12 PM and late check-out until 2 PM only. This privilege is extended to guests who book directly with us. Applicable charges will be billed for exceeding hours.
                        </span><br /><br />

                        <b> 7. Can I store my bag?</b>
                        <span className='question'><br />
                            Yes, we do offer luggage storage free of charge. I’M hotel reserves to right to deny storage of oversized and suspicious items.
                        </span><br /><br />

                        <b> 8. Do you have an elevator?</b>
                        <span className='question'><br />
                            We are equipped with six (6) guest elevators (3 high rise, 3 low rise elevators) and two (2) separate elevators serving the spa floors. Guest elevators are equipped with a high-level security feature that enables guests to access each designated floor using a keycard.
                        </span><br /><br />

                        <b>9. Can I bring my pet inside the hotel?</b>
                        <span className='question'><br />
                            As much as we love pets, unfortunately, we are unable to accommodate them in our rooms or any of our common areas. We can refer you to the local pet house, while you choose to stay with us.
                        </span><br /><br />

                        <b>10. Do you offer parking slot for hotel guests?</b>
                        <span className='question'><br />
                            Yes, however parking space is subject to availability. Registered hotel guests are entitled to one (1) complimentary parking slot per room.
                        </span><br /><br />

                        <b> 11. Do you offer accommodation for the physically challenged?</b>
                        <span className='question'><br />
                            Yes, we have PWD rooms specially available for senior citizens and persons with disabilities.
                        </span><br /><br />

                        <b> 12. What is your smoking policy?</b>
                        <span className='question'><br />
                            Healthier. Happier. Fresher. Our Hotel is committed to catering to the needs of all guests. A designated smoking area is located on the 2nd floor for your convenience. However, usage of shisha, cigarettes, vape pens, and e-cigarettes is prohibited in all guest rooms. A fee equivalent to Php 10,000.00 per incident will be charged to your account if a smoking incident occurs in your room during your stay.
                        </span><br /><br />

                        <b>13. If I need assistance in my Flight whom do I Contact?</b>
                        <span className='question'><br />
                            Our front desk will be glad to assist you with your flight information, reconfirmation and airline schedules. Please press the service key “1” for assistance.
                        </span><br /><br />

                        <b>14. Do you offer airport shuttle service?</b>
                        <span className='question'><br />
                            Airport transportation is only from Php 2,300 per way. Please dial 1 for more information or assistance.
                        </span><br /><br />

                        <b>15. Can I request for transfers?</b>
                        <span className='question'><br />
                            A great way to enjoy your trip while on vacation is to drive around the metro in style. For transfer requirements, please press service key “1” for assistance.
                        </span><br /><br />

                        <b>16. What is your linen & damage Policy?</b>
                        <span className='question'><br />
                            Please note that additional charges are applicable for linen stains and other cleaning or damages caused intentionally or unintentionally. Penalties vary depending on the extent and severity of the damage. These include, but are not limited to, cleaning, repair, or replacement charges for stained walls, vomit, blood and food stain on linens, and broken furniture and fittings. The exact cost will be determined on a case-by-case basis by the Manager in charge.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Reservations & Cancellations</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. Can I cancel my booking?</b>
                        <span className='question'><br />
                            Yes, but keep in mind that cancellations made less than three (3) days prior to arrival are subject to 100% charge.
                        </span><br /><br />
                        <b>2. Will a security deposit be required upon check-in?</b>
                        <span className='question'><br />
                            The hotel requires an incidental deposit that may be settled through cash or credit card upon check-in. It is fully refundable if not used. If you are using a credit card, released upon check-out. Kindly note that it might take at least 7-14 banking days for your bank to activate the release.
                        </span><br /><br />
                        <b>3. Where can i make my reservation?</b>
                        <span className='question'><br />
                            For room reservation at our hotel, please /email./ us or visit our website link. Direct bookers enjoy the best rate guarantee and other exclusive perks.
                        </span><br /><br />
                        <b>4. What payment methods are accepted? Do you accept credit cards?</b>
                        <span className='question'><br />
                            We accept cash and all major credit cards as payment.We honor all major credit cards (Visa, MasterCard, Amex, JCB, Diners, UnionPay). Please present your credit card upon check-in.
                        </span><br /><br />
                        <b>5. Can I book on someone else’s behalf?</b>
                        <span className='question'><br />
                            Yes, you can book on behalf of someone else. For guests using another person’s credit card, a credit card authorization (CCA) form will be required.
                        </span><br /><br />
                        <b>6. Does the online rate include breakfast?</b>
                        <span className='question'><br />
                            Yes, we do have breakfast included in our online offerings! All rates can be accessed here.With our best rate guarantee, our direct online rate is definitely more favourable than online travel agencies such as booking.com, Agoda, and Expedia. Simply opt for our Best Available Rate (with breakfast).
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Rooms and Rates</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. Are smoking rooms available?</b>
                        <span className='question'>
                            We are sorry, but our Hotel rooms are strictly non-smoking. Also smoking are injurious to health.
                        </span><br /><br />
                        <b>2. Do kids stay free?</b>
                        <span className='question'>
                            Yes, kids 12 years old and below are allowed to stay free-of-charge. The number of kids may vary depending on the room type.
                        </span><br /><br />
                        <b>3. Can I change my room type upon check-in?</b>
                        <span className='question'>
                            Yes, but such requests are subject to room availability, applicable charges, and rate difference at the time of check-in.
                        </span><br /><br />
                        <b>4. Are extra beds available?</b>
                        <span className='question'>
                            Yes, we offer extra beds should you require one. These are only available for the Indulgence room category and above and are offered at PHP 2,000 nett with a buffet breakfast for one (1)
                        </span><br /><br />
                        <b>5. Are guests allowed in the hotel room?</b>
                        <span className='question'>
                            Guests are allowed to visit the room. However, for overnight stays beyond the capacity of each room, there will be an extra person surcharge.
                        </span><br /><br />
                        <b>6. Do I have privacy in my room?</b>
                        <span className='question'>
                            For rooms, we have an electronic “Do Not Disturb” button located by the door next to “Make up Room” button. For suites, a physical door tag is provided to hang outside your door to serve the same purpose. You may also request the front desk to take messages for you during this time.
                        </span><br /><br />
                        <b>7. What bath amenities do the rooms have?</b>
                        <span className='question'>
                            Explore our signature bath and body collections designed to rejuvenate your body and mind. Your rooms are provided with towels and toiletries based on the number of registered occupants.
                        </span><br /><br />
                        <b>8. Does my room have a safe deposit box?</b>
                        <span className='question'>
                            Your safety is our business. For your security and convenience, we strongly recommend that all valuables be kept in your safe for the duration of your stay. The management shall not be held liable for any loss within the hotel.
                        </span><br /><br />
                        <b>9 Will I be safe during my stay?</b>
                        <span className='question'>
                            We would like to reassure you that we maintain strict security at the hotel on a 24-hour basis. For immediate assistance, please dial service key “1”.
                        </span><br /><br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Hotel ammenties/facilites and Location</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. Is there a fitness center?</b>
                        <span className='question'>
                            Yes, We have a fitness center available for all guests. Equipments are powered by Lifefitness
                        </span><br /><br />
                        <b>2. Do you have Gym Facility?</b>
                        <span className='question'>
                            Situated on the Mezzanine (M1) floor, our state-of-the-art gym facilities powered by Life Fitness. Operating Schedule: Daily, 6:00 AM to 12:00 MN
                        </span><br /><br />
                        <b>3. How deep is the water in the pool?</b>
                        <span className='question'>
                            Get ready to make your swimming an elevated and sensorial experience! Our acrylic-bottom swimming pool is located on the 2nd floor. Guests entering the hotel will be treated with the glistening water of the pool when they look up. Maximum depth of the pool is 4 feet.
                        </span><br /><br />
                        <b>4. Where are you located?</b>
                        <span className='question'>
                            Our five (5) star hotel is located along the bustling 3rd cross Gopalpura, Santhekatte in the (City of Temple) Udupi.
                        </span><br /><br />
                        <b>5. What tourists places are there in your nearby location?</b>
                        <span className='question'>

                        </span><br /><br />
                        <b>6. What shops are there in your nearby location.</b>
                        <span className='question'>
                        </span><br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Promotion and Offers</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. What are your existing promotions?</b>
                        <span className='question'>
                            Please <Link href=''> click HERE </Link> for our latest promotions.
                        </span><br /><br />
                        <b>2. Can I avail Gift cards and certificates?</b>
                        <span className='question'>
                            Give the gift of an /hotel name./ experience to your friends, colleagues, or business associates! Gift certificates are available for purchase for the hotel, spa, and food and beverage outlets. Kindly approach our friendly front desk for assistance.
                        </span><br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <h3 className='text-center mt-4' >Some of the Frequently Asked questions (FAQs) of Our SweetHub </h3>
                    <p className='faq-intro'>We want to make our online shopping experience as easy and enjoyable as possible. Below are the
                        frequently asked questions that help you navigate our website and make order. If you dont find
                        the answers for your questions please do not hesitate to contact us. Our customer service team is always
                        happy to help you with any questions or concerns you may have.
                    </p>
                    <Accordion.Header>General Questions</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. What is the best time to visit Udupi?</b><br />
                        <span className="question">
                            The best time to visit Udupi is during Winters from October to March because of its unabated heat during summers. The winters are pleasant here, while the temperatures soar up to 40 degrees during the summers. However, evenings are relatively cooler in Udupi. Monsoon, on the other hand, is a suitable time for travelling to Udupi and the nearby places because the temple town has a lush green surrounding after the rains. Udupi is the cultural centre of Karnataka, and there are several festivals and events celebrated there with unmatched pomp. The mutts and temples are patrons of art, hosting many cultural events regularly. Most of these take place in winter
                        </span><br /><br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <h3 className='text-center mt-4' >Some of the Frequently Asked questions (FAQs) of Our Tourism </h3>
                    <p className='faq-intro'>Tourism can be wonderful and enriching experience, but we understand it can also be confusion and
                        overwhelming. Below are some of the Frequently Asked Questions to help you plan your trip and make the most
                        of your time. If you dont find the answers fo ryour questions please do not hesitate to contact us. Our customer service team is always
                        happy to help you with any questions or concerns you may have.
                    </p>
                    <Accordion.Header>General Questions</Accordion.Header>
                    <Accordion.Body className='answer'>
                        <b>1. What is the best time to visit Udupi?</b><br />
                        <span className="question">
                            The best time to visit Udupi is during Winters from October to March because of its unabated heat during summers. The winters are pleasant here, while the temperatures soar up to 40 degrees during the summers. However, evenings are relatively cooler in Udupi. Monsoon, on the other hand, is a suitable time for travelling to Udupi and the nearby places because the temple town has a lush green surrounding after the rains. Udupi is the cultural centre of Karnataka, and there are several festivals and events celebrated there with unmatched pomp. The mutts and temples are patrons of art, hosting many cultural events regularly. Most of these take place in winter
                        </span><br /><br />
                        <b>2. What are the things to do in Udupi?</b><br />
                        <span className="question">
                            The top things to do in Udupi are St. Mary's Island, Krishna Temple, Malpe Beach, Kaup Beach, Mookambika Temple, Kudlu Falls. You can see all the places to visit in Udup
                        </span><br /><br />
                        <b>3. What is the best way to reach Udupi? </b><br />
                        <span className="question">
                            Udupi is well connected to the rest of India by rail & road. Regular rail and bus services ply to and from the city of Udupi; buses being operated both by private and government owners. There is no direct flight connectivity from Udupi. But Mangalore airport, 60 km away, is the nearest airport that connects Udupi to the rest of  India and a few Gulf countries
                        </span> <br /><br />
                        <b>4. What is the local food in Udupi? </b><br />
                        <span className="question">
                            Udupi is almost synonymous to Udupi restaurants popular all over the world and the traditional Udupi cuisine which gives the cuisine of Karnataka a distinct flavor and personality of its own. Hence, while in Udupi, one must experience the local Udupi cuisine which is rich in flavors, ingredients and variety. The popular items of the platter here are Upma, a wide variety of dosas, Bisi bele bath (a spicy preparation of rice), Idlis, Rasam, Goli baje, Payasa, Kheer, Pelakai Halwa ( Jackfruit Halwa) and countless more
                        </span><br /><br />
                        <b>Who should visit Udupi? What is famous about Udupi?</b><br />
                        <span className="question">
                            Ideal for cultural seekers. Suitable for backpackers touring nearby sites like Bengaluru, Mysore etc. A beautiful confluence of history and culture
                        </span><br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
