import React from 'react';
import { Layout } from '../../containers/layout/layout';
import { Section } from '../../containers/section/section';
import { Card } from '../../containers/card/card';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';


interface RegisterFormProps {
	onSubmit: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => void;
}

const handleRegisterSubmit = (
	name: string,
	email: string,
	password: string,
	confirmPassword: string
) => {
	console.log('Register submitted:', {
		name,
		email,
		password,
		confirmPassword,
	});
};

const RegisterPage: React.FC = () => {
	return (
		<Layout>
			<Section>
				<Card>
					<RegisterForm onSubmit={handleRegisterSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default RegisterPage;