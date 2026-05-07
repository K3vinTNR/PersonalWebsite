<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import instagram from '$lib/assets/instagram-logo.png';
	import linkedin from '$lib/assets/linkedin-logo.png';
	import facebook from '$lib/assets/facebook-logo.png';

	let { form }: { form: { success?: boolean; error?: string } | undefined } = $props();

	let isSubmitting = $state(false);
	let enhanceForm = $state<ReturnType<typeof enhance> | undefined>(undefined);

	onMount(() => {
		enhanceForm = enhance(() => {
			isSubmitting = true;

			return async ({ update }) => {
				await update();
				isSubmitting = false;
			};
		});
	});
</script>

<section class="mx-auto w-full max-w-6xl px-4 py-12">
	<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
		<div class="glass-panel rounded-3xl p-8">
			<h1 class="text-4xl font-semibold">Contact Me</h1>
			<p class="mt-3 text-sm text-white/70">Drop a message and I'll get back to you soon.</p>

			<form class="mt-8 space-y-4" method="POST" use:enhance={enhanceForm}>
				<div>
					<label class="text-xs font-semibold uppercase tracking-[0.3em] text-white/60" for="name">
						Name
					</label>
					<input
						id="name"
						name="name"
						required
						class="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
						placeholder="Enter your name"
					/>
				</div>
				<div>
					<label class="text-xs font-semibold uppercase tracking-[0.3em] text-white/60" for="email">
						Email
					</label>
					<input
						id="email"
						name="email"
						required
						type="email"
						class="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label class="text-xs font-semibold uppercase tracking-[0.3em] text-white/60" for="message">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={5}
						class="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
						placeholder="Enter your message"
					></textarea>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					class="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
				>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>
			</form>

			{#if form?.success}
				<p class="mt-4 rounded-2xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
					Thanks! Your message has been sent.
				</p>
			{:else if form?.error}
				<p class="mt-4 rounded-2xl border border-rose-300/40 bg-rose-300/10 px-4 py-3 text-sm text-rose-100">
					{form.error}
				</p>
			{/if}
		</div>

		<div class="glass-panel rounded-3xl p-8">
			<h2 class="text-2xl font-semibold">Contact Information</h2>
			<p class="mt-4 text-sm text-white/70">
				Email: <a class="text-amber-200" href="mailto:kevint101106@gmail.com">kevint101106@gmail.com</a>
			</p>
			<p class="mt-2 text-sm text-white/70">
				Phone: <a class="text-amber-200" href="tel:+6287781033636">+62 877 8103 3636</a>
			</p>

			<div class="mt-8">
				<h3 class="text-lg font-semibold">Follow Me</h3>
				<div class="mt-4 flex gap-4">
					<a href="https://www.instagram.com/kevin_taniar?igsh=MTNycjk4cndtcjYzcQ==" target="_blank" rel="noreferrer">
						<img src={instagram} alt="Instagram" class="h-10 w-10 rounded-full bg-white/10 p-2" />
					</a>
					<a
						href="https://www.linkedin.com/in/kevin-taniar-4854692ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
						target="_blank"
						rel="noreferrer"
					>
						<img src={linkedin} alt="LinkedIn" class="h-10 w-10 rounded-full bg-white/10 p-2" />
					</a>
					<a href="https://www.facebook.com/share/1BWRptNNuH/" target="_blank" rel="noreferrer">
						<img src={facebook} alt="Facebook" class="h-10 w-10 rounded-full bg-white/10 p-2" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
