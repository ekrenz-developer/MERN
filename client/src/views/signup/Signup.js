import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';
import FormField from '../../components/formField/FormField';
import { Form , Button } from 'react-bootstrap';
import './Signup.css';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { signUp , success , failure } from '../../state/users/actions';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signUp: {
				user: {
					userName: '',
					password: '',
					email: '',
					firstName: '',
					lastName: '',
					country: '',
					termsAndConditions: ''
				},
				status: ''
			}
		};
	}

  handleSubmit = () => {
			console.log('submit')
			console.log(this.state)
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
		console.log('name= ' + name + ',value= ' +value)
	
		this.setState(
			{
				signUp: {
					user: {
						[name]: value 
					}
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
					<Form onSubmit={(e)=>{e.preventDefault()}}>
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
						<Button type='submit' variant='dark' block size='sm' onClick={() => this.handleSubmit()}>OK </Button>
					</Form>
				</LayoutView>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
	success: user => dispatch(success(user)),
  failure: error => dispatch(failure(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);