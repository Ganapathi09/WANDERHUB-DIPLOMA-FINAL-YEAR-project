import React, { useEffect, useState } from 'react'
import { Carousel, Card, CardGroup } from 'react-bootstrap';

export default function SweetCard() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1)
		}, 1000);
	})
	return (
		<>
			<Carousel>
				<Carousel.Item interval={1500}>
					<CardGroup>
						<Card>
							<Card.Img variant="top" className=" mx-auto w-50" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/jalebi.jpg' />
							<Card.Body>
								<Card.Title>Jalebi</Card.Title>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated {count} sec ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" className=" mx-auto w-50" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/laddoo.jpg' />
							<Card.Body>
								<Card.Title>Laddoo</Card.Title>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated {count} sec ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" className=" mx-auto w-50" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/mysorepalk.jpg' />
							<Card.Body>
								<Card.Title>Mysore Palk</Card.Title>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated {count} sec ago</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					{/* 100 cards */}
					<CardGroup>
						<Card>
							<Card.Img variant="top" className=" mx-auto w-50" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/holige.jpg' />
							<Card.Body>
								<Card.Title>Puran poli</Card.Title>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated {count} sec ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" className=" mx-auto w-50" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/rabdi.jpg' />
							<Card.Body>
								<Card.Title>Rubdi</Card.Title>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated {count} sec ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" className=" mx-auto w-50" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/gulab-jamoon.jpg' />
							<Card.Body>
								<Card.Title>Gulab Jamoon</Card.Title>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated {count} sec ago</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Carousel.Item>
			</Carousel>
		</>
	)
}
