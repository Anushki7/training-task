import { Field } from "@/containers/field/field";
import { InputEmail, InputPassword } from "@/components/input/input";
import { Button } from "@/components/action/action";
import { useState } from "react";
import { LoginFormProps } from "./types";
import { ButtonType } from "@/components/action/types";


const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
  
	const handleSubmit = (e: React.FormEvent) => {
	  e.preventDefault();
  
	  setIsLoading(true);
	  onSubmit(email, password);
	  setIsLoading(false); 
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<Field>
		  <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
		</Field>
		<Field>
		  <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} />
		</Field>
		<Button type={ButtonType.Submit}  disabled={isLoading}>
		  {isLoading ? "Logging in..." : "Login"}
		</Button>
	  </form>
	);
  };
  
  export default LoginForm;
  