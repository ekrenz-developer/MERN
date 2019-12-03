import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';
import FormField from '../../components/formField/FormField';
import { Form , Button } from 'react-bootstrap';
import './Signup.css';
import { Avatar } from '@material-ui/core';

class Signup extends React.Component {
  handleSubmit = () => {
    return (
			console.log('submit')
    );
  }
	
	render(){
		return (
			<React.Fragment>
				<Header />            
				<LayoutView withHeader={true} scrollbar={true}>
					<p>Create Account</p>
					<Form onSubmit={() => this.handleSubmit}>
						<Avatar alt='userImage' src={require('../../assets/user.png')}/>
						<FormField
							controlId={'username'}
							label={'Username:'}
							type={'text'}
							placeholder={'username'}
						/>
						<FormField
							controlId={'password'}
							label={'Password:'}
							type={'password'}
							placeholder={'password'}
						/>
						<FormField
							controlId={'email'}
							label={'Email:'}
							type={'email'}
							placeholder={'email'}
						/>
						<FormField
							controlId={'firstname'}
							label={'Firt Name:'}
							type={'text'}
							placeholder={'first name'}
						/>
						<FormField
							controlId={'lastname'}
							label={'Last Name:'}
							type={'text'}
							placeholder={'last name'}
						/>
						<FormField
							controlId={'country'}
							label={'Country:'}
							as={'select'}
						>
							<option>Choose...</option>
							<option>Spain</option>
							<option>Germany</option>
						</FormField>	
						<FormField
							fieldType={'checkbox'}
							label={'I agree to MYinerary Terms & Conditions.'}
						/>
						<Button type='submit' variant='dark' block size='sm'>OK </Button>
					</Form>
				</LayoutView>
			</React.Fragment>
		)
	}
}

export default Signup;