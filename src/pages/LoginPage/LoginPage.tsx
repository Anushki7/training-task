import React from 'react';
import { Layout } from '../../containers/layout/layout';
import { Section } from '../../containers/section/section';
import { Card } from '../../containers/card/card';
import  LoginForm  from '../../screens/LoginForm/LoginForm';

const handleLoginSubmit = (email: string, password: string) => {
	console.log('Login submitted:', { email, password });
};

const LoginPage: React.FC = () => {
    return (
		<Layout>
			<Section>
				<Card>
					<LoginForm onSubmit={handleLoginSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default LoginPage;
