import { Button } from "@/components/action/action";
import { Field } from "@/containers/field/field";
import { InputEmail } from "@/components/input/input";
import { Input, InputPassword } from "@/ui";
import { useState } from "react";
import { RegisterFormProps } from "./types";

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(name, email, password, confirmPassword);
	};

	return (
		<form onSubmit={handleSubmit}>
      <Field><Input value={email} onChange={(e: any) => setName(e.target.value)}></Input></Field>
			<Field><InputEmail value={email} onChange={(e) => setEmail(e.target.value)}></InputEmail></Field>
			<Field><InputPassword value={password} onChange={(e: any) => setPassword(e.target.value)}></InputPassword></Field>
			<Button onClick={() => {}} >Register</Button>
		</form>
	);
};

export default RegisterForm;