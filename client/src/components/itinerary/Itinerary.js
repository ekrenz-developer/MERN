import React from 'react';
import './Itinerary.css';
import { Card , Row , Col , Collapse , Button } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
	render() {
    return (
      <div className='itinerariy-container'>
				{
					<Card className="card-container">
						<div className='card-content'>
							<Row className='card-row'>
								<Col>
									<Avatar>H</Avatar>
								</Col>
								<Col>
									Prueba
								</Col>
							</Row>
							<Collapse in={this.state.open}>
								<Row id='activities' className='card-row'>
									<div>Actividades</div>
									</Row>
							</Collapse>			
						</div>
						<Button className="viewAll-button"
							variant='light' 
							size='sm' 
							onClick={() => this.setState({open: !this.state.open})}
						>
							<span className="card-text">View All</span>
						</Button>							
					</Card>				
				}
      </div>
    );
  }
}

export default Itinerary;