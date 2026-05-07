import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import {
	RESEND_API_KEY,
	RESEND_FROM,
	RESEND_TO
} from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || !email || !message) {
			return fail(400, { error: 'Please fill in all required fields.' });
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { error: 'Please use a valid email address.' });
		}

		if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
			return fail(500, { error: 'Missing Resend configuration.' });
		}

		try {
			await resend.emails.send({
				from: RESEND_FROM,
				to: RESEND_TO,
				subject: `New message from ${name}`,
				replyTo: email,
				text: `Name: ${name}\nEmail: ${email}\n\n${message}`
			});

			return { success: true };
		} catch (error) {
			console.error('Resend error:', error);
			return fail(500, { error: 'Unable to send message right now.' });
		}
	}
};
