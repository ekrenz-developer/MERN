
import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';
import FormField from '../../components/formField/FormField';
import { Form , Button } from 'react-bootstrap';
import './SignUp.css';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { signUp } from '../../state/user/actions';
import { userRegister } from '../../services/users/users';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				userName: '',
				password: '',
				email: '',
				firstName: '',
				lastName: '',
				country: '',
				conditions: ''				
			}
		}
		/*
		this.state = {
			signUp: {
				user: {
					userName: '',
					password: '',
					email: '',
					firstName: '',
					lastName: '',
					country: '',
					conditions: ''
				},
				status: 'init'
			}
		};
		*/
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log('aca')
		let init = {
			method: 'POST',
			body: JSON.stringify(this.state.user),
			headers: { 'Content-Type': 'application/json'}				
		}
		this.props.signUp(userRegister, init);
		/*
		e.preventDefault();
		this.setState(
			{
				signUp: {
					...this.state.signUp,
					status: 'loading'
				}
			}
		);
		await this.props.signUp(this.state.signUp);
		fetch(
			userRegister, 
			{
				method: 'POST',
				body: JSON.stringify(this.state.signUp.user),
				headers: { 'Content-Type': 'application/json'}				
			}
		).then(response => response.json())
		.then(data => {
			this.setState(
				{
					signUp: {
						...this.state.signUp,
						status: 'succes'
					}
				}
			);
			console.log(data);
			this.props.success(this.state.signUp);
			console.log(this.state);
		});
		console.log(this.state);
		console.log('fin')*/
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
				<LayoutView withHeader={true} scrollbar={true}>
					<p>Create Account</p>
					<Form onSubmit={this.handleSubmit}>
						<Avatar alt='userImage' src={require('../../assets/user.png')}/>
						<FormField
							controlId={'userName'}
							label={'Username:'}
							type={'text'}
							placeholder={'username'}
							onChange={this.handleChange('userName', 'text')}
						/>
						<FormField
							controlId={'password'}
							label={'Password:'}
							type={'password'}
							placeholder={'password'}
							onChange={this.handleChange('password', 'password')}
						/>
						<FormField
							controlId={'email'}
							label={'Email:'}
							type={'email'}
							placeholder={'email'}
							onChange={this.handleChange('email', 'email')}
						/>
						<FormField
							controlId={'firstName'}
							label={'Firt Name:'}
							type={'text'}
							placeholder={'first name'}
							onChange={this.handleChange('firstName', 'text')}
						/>
						<FormField
							controlId={'lastName'}
							label={'Last Name:'}
							type={'text'}
							placeholder={'last name'}
							onChange={this.handleChange('lastName', 'text')}
						/>
						<FormField
							controlId={'country'}
							label={'Country:'}
							as={'select'}
							onChange={this.handleChange('country', 'select')}
						>
							<option>Choose...</option>
							<option>Spain</option>
							<option>Germany</option>
						</FormField>	
						<FormField
							fieldType={'checkbox'}
							label={'I agree to MYinerary Terms & Conditions.'}
							onChange={this.handleChange('termsAndConditions', 'checkbox')}
							controlId={'termsAndConditions'}
						/>
						<Button type='submit' variant='dark' block size='sm'>OK </Button>
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
	signUp: (endpoint, init) => signUp(endpoint, init)
	/*,
	success: user => dispatch(success(user)),
	failure: error => dispatch(failure(error))*/
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);