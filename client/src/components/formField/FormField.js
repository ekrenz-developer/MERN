import React from 'react';
import './FormField.css';
import { Form } from 'react-bootstrap';

class FormField extends React.Component {
	render() {
		return (
			<Form.Group className='formfield-container' controlId={this.props.controlId}>
				{this.props.fieldType === 'checkbox' && (
					<React.Fragment>
						<Form.Check
							required
							name={this.props.name}
							label={this.props.label}
						/>
					</React.Fragment>
				)}
				{!this.props.fieldType && (
					<React.Fragment>
						<div className='label-container'>
							<Form.Label>
								{this.props.label}
							</Form.Label>
						</div>
						<div className='control-container'>
							<Form.Control className='control-container'
								as={this.props.as}
								type={this.props.type} 
								placeholder={this.props.placeholder} 
							>
								{this.props.children}
							</Form.Control>
						</div>
					</React.Fragment>
				)}
			</Form.Group>
		);
	}
}

export default FormField;