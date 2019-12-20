import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';
import FormField from '../../components/formField/FormField';
import { Form , Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../state/user/actions';
import { userLogin } from '../../services/users/users';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: '',
				password: '',
				rememberMe: ''
			},
		};
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		let init = {
			method: 'POST',
			body: JSON.stringify(this.state.user),
			headers: { 'Content-Type': 'application/json'}				
		}
		this.props.signIn(userLogin, init);
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
					<Form onSubmit={this.handleSubmit}>
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
						<FormField
							fieldType={'checkbox'}
							label={'Remember me'}
							onChange={this.handleChange('rememberMe', 'checkbox')}
							controlId={'rememberMe'}
						/>
						<Button type='submit' variant='dark' block size='sm'>Sign In</Button>
					</Form>
				</LayoutView>
			</React.Fragment>  
		)
	}
}

const mapStateToProps = state => ({
	user: state.user
});

const mapDispatchToProps = {
	signIn: (endpoint, init) => signIn(endpoint, init)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);