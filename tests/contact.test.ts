import test from 'node:test';
import assert from 'node:assert/strict';
import { processContact } from '../src/lib/server/contact.ts';
import { copy } from '../src/lib/data/copy.ts';
import type { ContactValues, Locale } from '../src/lib/types.ts';

const valid: ContactValues = { name: 'Test Recruiter', email: 'recruiter@example.com', message: 'A test internship opportunity.' };
const formData = (values: Partial<ContactValues> = valid) => {
	const data = new FormData();
	for (const [key, value] of Object.entries(values)) data.set(key, value);
	return data;
};

for (const locale of ['id', 'en'] as Locale[]) {
	test(`${locale}: empty fields are rejected before calling the email service`, async () => {
		let called = false;
		const response = await processContact(locale, formData({}), async () => { called = true; return { id: 'test' }; });
		assert.equal(response.status, 400);
		assert.equal(called, false);
		assert.deepEqual(Object.keys(response.body.fieldErrors), ['name', 'email', 'message']);
		assert.equal(response.body.fieldErrors.name, copy[locale].form.required);
	});
	test(`${locale}: invalid email preserves submitted values`, async () => {
		const values = { ...valid, email: 'not-an-email' };
		const response = await processContact(locale, formData(values));
		assert.equal(response.status, 400);
		assert.deepEqual(response.body.values, values);
		assert.equal(response.body.fieldErrors.email, copy[locale].form.invalidEmail);
	});
	test(`${locale}: oversized input is rejected`, async () => {
		const response = await processContact(locale, formData({ ...valid, name: 'a'.repeat(101), message: 'a'.repeat(5001) }));
		assert.equal(response.status, 400);
		assert.equal(response.body.fieldErrors.name, copy[locale].form.nameLength);
		assert.equal(response.body.fieldErrors.message, copy[locale].form.messageLength);
	});
	test(`${locale}: successful delivery trims values and clears the form`, async () => {
		let delivered: ContactValues | undefined;
		const response = await processContact(locale, formData({ ...valid, name: '  Test Recruiter  ' }), async (values) => { delivered = values; return { id: 'mock-email-id' }; });
		assert.equal(response.status, 200);
		assert.deepEqual(delivered, valid);
		assert.equal(response.body.success, true);
		assert.equal(response.body.message, copy[locale].form.success);
		assert.deepEqual(response.body.values, { name: '', email: '', message: '' });
	});
	test(`${locale}: a resolved provider error never reports success`, async () => {
		const response = await processContact(locale, formData(), async () => ({ error: { message: 'Provider rejected the request' } }));
		assert.equal(response.status, 502);
		assert.equal(response.body.success, false);
		assert.deepEqual(response.body.values, valid);
		assert.equal(response.body.message, copy[locale].form.failure);
	});
	test(`${locale}: exceptions preserve form input without exposing provider details`, async () => {
		const response = await processContact(locale, formData(), async () => { throw new Error('private provider diagnostics'); });
		assert.equal(response.status, 502);
		assert.deepEqual(response.body.values, valid);
		assert.equal(response.body.message, copy[locale].form.failure);
	});
	test(`${locale}: incomplete provider response is treated as a failure`, async () => {
		const response = await processContact(locale, formData(), async () => ({}));
		assert.equal(response.status, 502);
		assert.equal(response.body.success, false);
	});
	test(`${locale}: missing configuration returns a helpful localized error`, async () => {
		const response = await processContact(locale, formData());
		assert.equal(response.status, 503);
		assert.equal(response.body.message, copy[locale].form.unavailable);
		assert.deepEqual(response.body.values, valid);
	});
}
