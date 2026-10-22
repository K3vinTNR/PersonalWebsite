<script lang="ts">
	import type { Locale } from '$lib/types';
	import type { PortfolioCopy } from '$lib/data/copy';
	import { profile } from '$lib/data/portfolio';

	let { locale, copy, activeSection = 'top' }: { locale: Locale; copy: PortfolioCopy; activeSection?: string } = $props();
	let menuOpen = $state(false);
	let menuButton: HTMLButtonElement | undefined = $state();
	const sections = ['projects', 'about', 'skills', 'contact'] as const;
	let otherLocale = $derived(locale === 'id' ? 'en' : 'id');
	let languageUrl = $derived(`/${otherLocale}${activeSection === 'top' ? '' : `#${activeSection}`}`);
</script>

<a class="skip-link" href="#main-content">{copy.skip}</a>
<svelte:window onkeydown={(event) => {
	if (event.key === 'Escape' && menuOpen) {
		menuOpen = false;
		menuButton?.focus();
	}
}} />
<header class="site-header">
	<div class="container header-inner">
		<a class="brand" href={`/${locale}#top`} aria-label={profile.name} onclick={() => menuOpen = false}>
			<span class="brand-monogram" aria-hidden="true">k<span>.</span></span>
			<span>{profile.name}</span>
		</a>
		<nav class="desktop-navigation" aria-label={copy.nav.label}>
			{#each sections as section}
				<a href={`#${section}`} class:active={activeSection === section} aria-current={activeSection === section ? 'location' : undefined}>{copy.nav[section]}</a>
			{/each}
		</nav>
		<div class="header-actions">
			<div class="language-switch" aria-label={locale === 'id' ? 'Bahasa' : 'Language'}>
				<span class="current-language" aria-current="true">{locale.toUpperCase()}</span>
				<span class="language-divider" aria-hidden="true">/</span>
				<a href={languageUrl} hreflang={otherLocale} lang={otherLocale} aria-label={copy.nav.language} onclick={() => menuOpen = false}>{otherLocale.toUpperCase()}</a>
			</div>
			<button bind:this={menuButton} class="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? copy.nav.close : copy.nav.menu} onclick={() => menuOpen = !menuOpen}>
				<span>{menuOpen ? copy.nav.close : copy.nav.menu}</span>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
					{#if menuOpen}<path d="m4 4 10 10M4 14 14 4" />{:else}<path d="M2 6h14M2 12h14" />{/if}
				</svg>
			</button>
		</div>
	</div>
	<nav id="mobile-navigation" class="mobile-navigation" class:open={menuOpen} aria-label={copy.nav.label} inert={!menuOpen}>
		{#each sections as section}
			<a href={`#${section}`} aria-current={activeSection === section ? 'location' : undefined} onclick={() => menuOpen = false}>{copy.nav[section]} <span aria-hidden="true">↗</span></a>
		{/each}
	</nav>
</header>
