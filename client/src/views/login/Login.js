import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';
import { Form } from 'react-bootstrap';

class Login extends React.Component {
	render(){
		return (
			<React.Fragment>
			<div className=''></div>
					<Header />            
					<LayoutView withHeader={true}>
							<p>Login</p>
							<Form>
									<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
									We'll never share your email with anyone else.
									</Form.Text>
									</Form.Group>                        
							</Form>
					</LayoutView>
			</React.Fragment>  
		)
	}
}

export default Login;