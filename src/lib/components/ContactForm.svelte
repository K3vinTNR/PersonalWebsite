<script lang="ts">
	import { enhance } from '$app/forms';
	import { tick } from 'svelte';
	import type { ContactFormResult } from '$lib/types';
	import type { PortfolioCopy } from '$lib/data/copy';

	let { copy, form }: { copy: PortfolioCopy; form: ContactFormResult | null | undefined } = $props();
	let submitting = $state(false);
	let networkError = $state('');
	let feedback: HTMLDivElement | undefined = $state();
</script>

<form class="contact-form" method="POST" aria-busy={submitting} use:enhance={() => {
	submitting = true;
	networkError = '';
	return async ({ result, update }) => {
		try {
			if (result.type === 'error') networkError = copy.contact.networkError;
			else await update({ reset: result.type === 'success', invalidateAll: false });
		} finally {
			submitting = false;
			await tick();
			feedback?.focus({ preventScroll: true });
		}
	};
}}>
	<div class="form-row">
		<div class="form-field">
			<label for="name">{copy.contact.name}</label>
			<input id="name" name="name" autocomplete="name" required maxlength="100" placeholder={copy.contact.namePlaceholder} value={form?.values.name ?? ''} aria-invalid={!!form?.fieldErrors.name} aria-describedby={form?.fieldErrors.name ? 'name-error' : undefined} />
			{#if form?.fieldErrors.name}<p id="name-error" class="field-error">{form.fieldErrors.name}</p>{/if}
		</div>
		<div class="form-field">
			<label for="email">{copy.contact.email}</label>
			<input id="email" name="email" type="email" autocomplete="email" required maxlength="254" placeholder={copy.contact.emailPlaceholder} value={form?.values.email ?? ''} aria-invalid={!!form?.fieldErrors.email} aria-describedby={form?.fieldErrors.email ? 'email-error' : undefined} />
			{#if form?.fieldErrors.email}<p id="email-error" class="field-error">{form.fieldErrors.email}</p>{/if}
		</div>
	</div>
	<div class="form-field">
		<label for="message">{copy.contact.message}</label>
		<textarea id="message" name="message" rows="4" required maxlength="5000" placeholder={copy.contact.messagePlaceholder} value={form?.values.message ?? ''} aria-invalid={!!form?.fieldErrors.message} aria-describedby={form?.fieldErrors.message ? 'message-error' : undefined}></textarea>
		{#if form?.fieldErrors.message}<p id="message-error" class="field-error">{form.fieldErrors.message}</p>{/if}
	</div>
	<div class="form-bottom">
		<button class="button button-light" type="submit" disabled={submitting}>{submitting ? copy.contact.sending : copy.contact.submit}<span aria-hidden="true">↗</span></button>
		<p class="form-note">{copy.contact.note}</p>
	</div>
	{#if networkError || form?.message}
		<div bind:this={feedback} class="form-feedback" class:success={!networkError && form?.success} role={!networkError && form?.success ? 'status' : 'alert'} tabindex="-1">{networkError || form?.message}</div>
	{/if}
</form>
