import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import { processContact, type ContactSender } from '$lib/server/contact';
import { cvUrl } from '$lib/data/portfolio';
import type { Locale } from '$lib/types';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, url }) => ({ locale: params.locale as Locale, origin: url.origin, cvUrl });

export const actions: Actions = {
	default: async ({ params, request }) => {
		let send: ContactSender | undefined;
		if (env.RESEND_API_KEY && env.RESEND_FROM && env.RESEND_TO) {
			send = async (values) => {
				const resend = new Resend(env.RESEND_API_KEY);
				const response = await resend.emails.send({
					from: env.RESEND_FROM!, to: env.RESEND_TO!, replyTo: values.email,
					subject: `Portfolio — ${values.name}`,
					text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
				});
				return { id: response.data?.id, error: response.error };
			};
		}
		const { status, body } = await processContact(params.locale as Locale, await request.formData(), send);
		return status === 200 ? body : fail(status, body);
	}
};
