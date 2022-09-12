/* eslint-disable react/react-in-jsx-scope */
import {Typography, Button, Input} from '@material-tailwind/react';

export default function SignIn() {
	return (
		<div className='flex justify-center'>
			<section className='flex flex-col items-center space-y-5 m-10 bg-white shadow-md rounded p-10 max-w-md'>
				<Typography className=''>Sign In</Typography>
				<Input
					label='Email'
				/>
				<Input
					label='Password'
				/>
				<Button color='blue'>Sign In</Button>
			</section>
		</div>
	);
}
