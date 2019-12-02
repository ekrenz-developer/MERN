import React from 'react';
import './Itinerary.css';
import { Card , Row , Collapse , Button } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import CarouselActivities from '../carouselActivities/CarouselActivities.js';
import { connect } from 'react-redux';

class Itinerary extends React.Component {
	render() {
    return (
      <div className='itinerariy-container'>
					<Card className="card-container" border='dark'>
							<div className='card-content'>
								<Row className='card-itinerary'>
									<div className='col-user'>
										<Avatar className='avatar-user'>H</Avatar>
										<span className='text-itinerary'>{this.props.itinerary.username}</span>
									</div>
									<div className='col-itinerary'>
										<div className='row-itinerary'>
											<span className='title-itinerary'>{this.props.itinerary.title}</span>
										</div>
										<div className='row-itinerary'>
											<span className='text-itinerary'>Rating: {this.props.itinerary.rating}</span>
											<span className='text-itinerary'>{this.props.itinerary.duration} Hours</span>
											<span className='text-itinerary'>{this.props.itinerary.price}</span>
										</div>
										<div className='row-itinerary'>
											{
												this.props.itinerary.hashtags.map((hashtag, key) => (
													<span className='text-itinerary'>
														{hashtag} 
													</span>
												))
											}
										</div>
									</div>
								</Row>
								<Collapse in={this.props.itineraries.open ? true : false}>
									<Row id='activities' className={!this.props.itineraries.open ? 'card-activities' : 'card-activities-open '}>
										<CarouselActivities 
											activities={this.props.itinerary.activities}
										/>
									</Row>
								</Collapse>			
							</div>
							<Button className="viewAll-button"
								variant='light' 
								size='sm'
								onClick={
									this.props.onClick.bind(this)
								}
							>
								<span className="card-text">
									{
										!this.props.itineraries.open ? 'View All' : 'Close'
									}
								</span>
							</Button>											
					</Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraries
});

export default connect(mapStateToProps, null)(Itinerary);