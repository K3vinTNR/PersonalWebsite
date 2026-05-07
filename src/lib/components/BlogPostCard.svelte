<script lang="ts">
	import type { BlogPost } from '$lib/types';

	let { post, onReadMore }: { post: BlogPost; onReadMore?: (post: BlogPost) => void } = $props();
</script>

<article class="glass-panel-strong flex h-full flex-col gap-4 rounded-3xl p-6">
	<img src={post.image} alt={post.title} class="h-48 w-full rounded-2xl object-cover" />
	<div class="flex flex-1 flex-col gap-2">
		<h3 class="text-2xl font-semibold">
			{post.title}
		</h3>
		<p class="text-sm uppercase tracking-[0.2em] text-white/60">{post.date} · {post.author}</p>
		<p class="text-sm text-white/80">{post.excerpt}</p>
	</div>
	<button
		type="button"
		class="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200"
		onclick={() => onReadMore?.(post)}
	>
		Read More
	</button>
</article>
