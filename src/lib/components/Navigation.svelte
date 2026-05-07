<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/blog' },
		{ label: 'Contact', href: '/contact' }
	];

	const isActive = (path: string, current: string) =>
		path === '/' ? current === '/' : current.startsWith(path);
</script>

<nav class="mx-auto mt-6 w-full max-w-5xl px-4">
	<div class="glass-panel flex items-center justify-between rounded-full px-6 py-3">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold">
				KT
			</div>
			<span class="text-sm uppercase tracking-[0.35em] text-white/70">Portfolio</span>
		</div>
		<div class="hidden items-center gap-6 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class={`text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-amber-200 ${
						isActive(link.href, $page.url.pathname) ? 'text-amber-200' : 'text-white/80'
					}`}
				>
					{link.label}
				</a>
			{/each}
		</div>
		<div class="md:hidden">
			<select
				class="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
				onchange={(event) => {
					const target = event.currentTarget as HTMLSelectElement;
					if (target.value) {
						window.location.href = target.value;
					}
				}}
			>
				{#each links as link}
					<option value={link.href} selected={isActive(link.href, $page.url.pathname)}>
						{link.label}
					</option>
				{/each}
			</select>
		</div>
	</div>
</nav>
