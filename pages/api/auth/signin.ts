/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function userAuth(req: any, res: any) {
	const {email, password} = req.body;
	const user = await prisma.users.findFirst({
		where: {
			email,
			password,
		},
	});
	if (!user) {
		return res.status(401).json({
			error: 'Invalid credentials',
		});
	}

	return res.status(200).json({
		message: 'Successfully logged in',
		useremail: user.email,
	});
}

export default function handler(req: any, res: any) {
	if (req.method === 'POST') {
		return userAuth(req, res);
	}
}
