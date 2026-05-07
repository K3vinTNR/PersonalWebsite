<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Navigation from '$lib/components/Navigation.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import bgJalan from '$lib/assets/bg-jalan.jpg';
	import bgSmoke from '$lib/assets/bg-smoke.jpg';
	import bgSmokeTp from '$lib/assets/bg-smoketp.jpg';
	import bgAir from '$lib/assets/bg-air.jpeg';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const root = document.documentElement;
		root.style.setProperty('--bg-1', `url(${bgJalan})`);
		root.style.setProperty('--bg-2', `url(${bgSmoke})`);
		root.style.setProperty('--bg-3', `url(${bgSmokeTp})`);
		root.style.setProperty('--bg-4', `url(${bgAir})`);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation />

<main in:fade={{ duration: 400 }} class="pb-16">
	{@render children()}
</main>
