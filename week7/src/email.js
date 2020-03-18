import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer'

const generatePasswordResetKey = async() =>
    (await randomBytes(16)).toString('hex');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kenuciwebserverclass@gmail.com',
      pass: 'Osmo76029@'
    }
});

const generatePasswordResetMessage = (display_name, key) => `
Hello ${display_name},
Someone has requested that your password to the travel site be reset, 
Please visit our reset page and provide the following token: "${key}".
`;

export const sendResetEmail = async({ display_name, email, id }) => {
	const key = await generatePasswordResetKey();

	await transport.sendMail({
		from: 'kenuciwebserverclass@gmail.com',
		to: email,
		subject: 'Password Reset for Travel Site',
		text: generatePasswordResetMessage(display_name, key)
	});

	console.log("sendResetEmail key = ", key);

	return key;
};
