
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/react-in-jsx-scope */
import {Typography, Button, Input} from '@material-tailwind/react';
import {useState} from 'react';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(e: {preventDefault: () => void}) {
		e.preventDefault();

		const response = await fetch('/api/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (response.status === 200) {
			const data = await response.json();
			console.log('success', data);
		} else {
			console.log('Invalid email or password');
		}
	}

	return (
		<div className='flex justify-center'>
			<section className='flex flex-col items-center space-y-5 m-10 bg-white shadow-md rounded p-10 max-w-md'>
				<Typography className=''>Sign In</Typography>
				<Input
					label='Email'
					onChange={e => {
						setEmail(e.target.value);
					}}
				/>
				<Input
					label='Password'
					onChange={e => {
						setPassword(e.target.value);
					}}
				/>
				<Button color='blue' onClick={handleSubmit}>Sign In</Button>
			</section>
		</div>
	);
}
