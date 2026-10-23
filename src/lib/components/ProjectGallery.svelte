<script lang="ts">
	import type { Locale, PortfolioProject } from '$lib/types';
	import type { PortfolioCopy } from '$lib/data/copy';

	let { images, locale, labels, title, id }: {
		images: NonNullable<PortfolioProject['gallery']>;
		locale: Locale;
		labels: PortfolioCopy['projects']['gallery'];
		title: string;
		id: string;
	} = $props();

	let viewport: HTMLDivElement;
	let current = $state(0);

	function showSlide(index: number) {
		const next = (index + images.length) % images.length;
		viewport.scrollTo({
			left: next * viewport.clientWidth,
			behavior: 'instant'
		});
		current = next;
	}

	function syncSlide() {
		if (viewport.clientWidth) {
			current = Math.max(0, Math.min(images.length - 1, Math.round(viewport.scrollLeft / viewport.clientWidth)));
		}
	}

	function handleKey(event: KeyboardEvent) {
		if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
			event.preventDefault();
			showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
		}
	}
</script>

<div class="project-gallery">
	<div
		class="gallery-viewport"
		id={`gallery-${id}`}
		bind:this={viewport}
		role="region"
		aria-roledescription={labels.carousel}
		aria-label={`${labels.label}: ${title}`}
		onscroll={syncSlide}
	>
		{#each images as image, index}
			<div class="gallery-slide" role="group" aria-roledescription={labels.slide} aria-label={`${index + 1} / ${images.length}`}>
				<a class="gallery-image-link" href={image.src} target="_blank" rel="noopener noreferrer" onkeydown={handleKey} aria-label={`${labels.fullSize}: ${image.caption[locale]}`}>
					<img src={image.src} srcset={image.srcset} sizes="(min-width: 1200px) 680px, (min-width: 800px) 55vw, 92vw" width={image.width} height={image.height} alt={image.alt[locale]} loading="lazy" decoding="async" />
				</a>
			</div>
		{/each}
	</div>
	<div class="gallery-caption" aria-live="polite" aria-atomic="true">
		<p>{images[current].caption[locale]}</p>
		<span>{String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
	</div>
	<div class="gallery-footer">
	<a class="gallery-full-size" href={images[current].src} target="_blank" rel="noopener noreferrer">{labels.fullSize}<span aria-hidden="true"> ↗</span></a>
	<div class="gallery-controls">
		<button class="gallery-arrow" type="button" onclick={() => showSlide(current - 1)} onkeydown={handleKey} aria-label={labels.previous} aria-controls={`gallery-${id}`}><span aria-hidden="true">←</span></button>
		<div class="gallery-dots" role="group" aria-label={labels.choose}>
			{#each images as image, index}
				<button class="gallery-dot" class:active={current === index} type="button" onclick={() => showSlide(index)} onkeydown={handleKey} aria-label={`${labels.show} ${index + 1}: ${image.caption[locale]}`} aria-pressed={current === index} aria-controls={`gallery-${id}`}><span></span></button>
			{/each}
		</div>
		<button class="gallery-arrow" type="button" onclick={() => showSlide(current + 1)} onkeydown={handleKey} aria-label={labels.next} aria-controls={`gallery-${id}`}><span aria-hidden="true">→</span></button>
	</div>
	</div>
</div>

<style>
	.project-gallery { min-width: 0; }
	.gallery-viewport { display: flex; width: 100%; overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x mandatory; scrollbar-width: none; background: #fff; border: 1px solid var(--line); }
	.gallery-viewport::-webkit-scrollbar { display: none; }
	.gallery-slide { flex: 0 0 100%; min-width: 0; scroll-snap-align: start; scroll-snap-stop: always; }
	.gallery-image-link { display: grid; place-items: center; aspect-ratio: 16 / 10; padding: 12px; }
	.gallery-image-link:focus-visible { outline-offset: -4px; }
	.gallery-slide img { width: 100%; height: 100%; min-height: 0; object-fit: contain; }
	.gallery-caption { display: flex; align-items: baseline; justify-content: space-between; gap: 15px; margin-top: 12px; font-size: 11px; color: var(--ink); }
	.gallery-caption span { flex-shrink: 0; font-variant-numeric: tabular-nums; color: var(--muted); }
	.gallery-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 10px; }
	.gallery-controls { display: flex; align-items: center; gap: 8px; }
	.gallery-arrow { display: grid; place-items: center; width: 40px; height: 40px; border: 1px solid var(--line); border-radius: 2px; background: #fff; color: var(--ink); font-size: 18px; transition: background 150ms; }
	.gallery-arrow:hover { background: var(--ink); color: #fff; }
	.gallery-dots { display: flex; }
	.gallery-dot { display: grid; place-items: center; width: 24px; height: 40px; border: 0; background: transparent; }
	.gallery-dot span { width: 5px; height: 5px; border-radius: 50%; background: #c4c4c4; transition: background 150ms, transform 150ms; }
	.gallery-dot.active span { background: var(--ink); transform: scale(1.4); }
	.gallery-full-size { display: block; color: var(--muted); font-size: 11px; text-underline-offset: 3px; }
	.gallery-full-size:hover { color: var(--ink); text-decoration: underline; }
	@media (max-width: 399px) { .gallery-dots { display: none; } }
</style>
