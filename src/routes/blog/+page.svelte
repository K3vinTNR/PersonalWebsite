<script lang="ts">
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import type { BlogPost } from '$lib/types';

	let { data }: { data: { posts: BlogPost[] } } = $props();
	let activePost = $state<BlogPost | null>(null);

	const openModal = (post: BlogPost) => {
		activePost = post;
	};

	const closeModal = () => {
		activePost = null;
	};
</script>

<section class="mx-auto w-full max-w-6xl px-4 py-12">
	<div class="glass-panel rounded-3xl px-8 py-10">
		<h1 class="text-4xl font-semibold">Projects</h1>
		<p class="mt-3 max-w-2xl text-sm text-white/70">
			A selection of work-in-progress builds, experiments, and shipped ideas.
		</p>
	</div>

	<div class="mt-10 grid gap-8 md:grid-cols-2">
		{#each data.posts as post}
			<BlogPostCard {post} onReadMore={openModal} />
		{/each}
	</div>

	{#if activePost}
		<div class="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm" onclick={closeModal}></div>
		<div class="fixed inset-0 z-50 flex items-center justify-center px-4">
			<div class="glass-panel-strong w-full max-w-2xl rounded-3xl p-8 shadow-2xl" role="dialog" aria-modal="true">
				<img
					src={activePost.image}
					alt={activePost.title}
					class="h-56 w-full rounded-2xl object-cover"
				/>
				<div class="mt-6 flex items-start justify-between gap-6">
					<div>
						<h2 class="text-3xl font-semibold">{activePost.title}</h2>
						<p class="mt-2 text-sm text-white/60">{activePost.date} · {activePost.author}</p>
					</div>
					<button
						type="button"
						class="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40"
						onclick={closeModal}
					>
						Close
					</button>
				</div>
				<p class="mt-6 text-sm leading-6 text-white/80">{activePost.description}</p>
			</div>
		</div>
	{/if}
</section>
