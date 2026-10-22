import { copy } from '../data/copy.ts';
import type { ContactFormResult, ContactValues, Locale } from '../types.ts';

export type ContactSender = (values: ContactValues) => Promise<{ id?: string; error?: unknown }>;

/** Testable without a SvelteKit server or a real email service. */
export async function processContact(locale: Locale, data: FormData, send?: ContactSender): Promise<{ status: number; body: ContactFormResult }> {
	const text = (field: string) => typeof data.get(field) === 'string' ? String(data.get(field)).trim() : '';
	const values: ContactValues = { name: text('name'), email: text('email'), message: text('message') };
	const strings = copy[locale].form;
	const fieldErrors: ContactFormResult['fieldErrors'] = {};
	for (const field of ['name', 'email', 'message'] as const) {
		if (!values[field]) fieldErrors[field] = strings.required;
	}
	if (values.name.length > 100 || /[\r\n]/.test(values.name)) fieldErrors.name = strings.nameLength;
	if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) fieldErrors.email = strings.invalidEmail;
	if (values.email.length > 254) fieldErrors.email = strings.emailLength;
	if (values.message.length > 5000) fieldErrors.message = strings.messageLength;

	const result = (status: number, message: string, success = false) => ({
		status,
		body: { success, message, values: success ? { name: '', email: '', message: '' } : values, fieldErrors }
	});
	if (Object.keys(fieldErrors).length) return result(400, strings.invalid);
	if (!send) return result(503, strings.unavailable);
	try {
		const response = await send(values);
		if (response.error || !response.id) return result(502, strings.failure);
		return result(200, strings.success, true);
	} catch {
		return result(502, strings.failure);
	}
}
