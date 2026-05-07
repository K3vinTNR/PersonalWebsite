<script lang="ts">
	import profileImage from '$lib/assets/personal_img.jpg';
</script>

<section class="mx-auto w-full max-w-6xl px-4 py-16">
	<div class="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
		<div class="glass-panel rounded-3xl p-10">
			<p class="text-sm uppercase tracking-[0.35em] text-white/60">Hello. I'm</p>
			<h1 class="mt-4 text-5xl font-semibold gradient-text">Kevin Taniar</h1>
			<p class="mt-4 text-base text-white/70">Welcome to my personal website.</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href="/about"
					class="rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-amber-200"
				>
					Discover More
				</a>
				<a
					href="/contact"
					class="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 transition hover:border-white/60"
				>
					Get in Touch
				</a>
			</div>
		</div>
		<div class="flex justify-center">
			<img
				src={profileImage}
				alt="Kevin Taniar"
				class="h-72 w-72 rounded-full object-cover shadow-[0_0_40px_rgba(94,234,212,0.55)]"
			/>
		</div>
	</div>
</section>
