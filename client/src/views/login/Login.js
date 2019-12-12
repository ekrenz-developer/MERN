import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';
import FormField from '../../components/formField/FormField';
import { Form , Button } from 'react-bootstrap';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: '',
				password: ''
			},
		};
	}

	handleChange = (name, type) => (e) => {
		let value = '';
		switch(type){
			case 'image':
				value = e.target.file[0]
				break;
			
			case 'checkbox':
				value = e.target.checked
				break;
			
			default:
				value = e.target.value
				break;
		}
		/*console.log('name= ' + name + ',value= ' +value)*/
		this.setState(
			{
				user: {
					...this.state.user,
					[name]: value
				}
			}
		)
	}

	render(){
		return (
			<React.Fragment> 
				<Header />         
				<LayoutView withHeader={true}>
					<Form>
						<FormField
							controlId={'email'}
							label={'Email:'}
							type={'email'}
							placeholder={'email'}
							onChange={this.handleChange('email', 'email')}
						/>
						<FormField
							controlId={'password'}
							label={'Password:'}
							type={'password'}
							placeholder={'password'}
							onChange={this.handleChange('password', 'password')}
						/>
						<Button type='submit' variant='dark' block size='sm'>Sign In</Button>
					</Form>
				</LayoutView>
			</React.Fragment>  
		)
	}
}

export default Login;