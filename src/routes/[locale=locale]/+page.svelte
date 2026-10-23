<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import Navigation from '$lib/components/Navigation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ProjectGallery from '$lib/components/ProjectGallery.svelte';
	import { copy } from '$lib/data/copy';
	import { profile, projects, skillGroups, experience } from '$lib/data/portfolio';
	import type { PageData, ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	let locale = $derived(data.locale);
	let c = $derived(copy[locale]);
	let activeSection = $state('top');
	let canonical = $derived(`${data.origin}/${locale}`);
	const year = new Date().getFullYear();
	$effect(() => { document.documentElement.lang = locale; });
	$effect(() => { if (page.url.hash) activeSection = page.url.hash.slice(1); });
	onMount(() => {
		const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
		let frame = 0;
		const updateSection = () => {
			frame = 0;
			const marker = Math.min(180, window.innerHeight * 0.25);
			activeSection = sections.findLast((section) => section.getBoundingClientRect().top <= marker)?.id ?? 'top';
		};
		const scheduleUpdate = () => { if (!frame) frame = requestAnimationFrame(updateSection); };
		window.addEventListener('scroll', scheduleUpdate, { passive: true });
		window.addEventListener('resize', scheduleUpdate);
		updateSection();
		return () => {
			window.removeEventListener('scroll', scheduleUpdate);
			window.removeEventListener('resize', scheduleUpdate);
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:head>
	<title>{c.meta.title}</title>
	<meta name="description" content={c.meta.description} />
	<meta name="theme-color" content="#ffffff" />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="id" href={`${data.origin}/id`} />
	<link rel="alternate" hreflang="en" href={`${data.origin}/en`} />
	<link rel="alternate" hreflang="x-default" href={`${data.origin}/id`} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={profile.name} />
	<meta property="og:title" content={c.meta.title} />
	<meta property="og:description" content={c.meta.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={locale === 'id' ? 'id_ID' : 'en_US'} />
	<meta property="og:locale:alternate" content={locale === 'id' ? 'en_US' : 'id_ID'} />
	<meta property="og:image" content={`${data.origin}${profile.photo}`} />
	<meta property="og:image:alt" content={c.about.photoAlt} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Navigation {locale} copy={c} {activeSection} />
<main id="main-content" tabindex="-1">
	<section id="top" class="hero container" data-section aria-labelledby="hero-title">
		<div class="hero-copy">
			<p class="eyebrow">{c.hero.eyebrow}</p>
			<h1 id="hero-title">Kevin<br />Taniar<span>.</span></h1>
			<p class="hero-introduction">{c.hero.intro}</p>
			<div id="cv" class="hero-actions">
				<a class="button button-dark" href="#projects">{c.hero.projects}<span aria-hidden="true">↓</span></a>
				{#if data.cvUrl}
					<a class="text-link" href={data.cvUrl} download="Kevin-Taniar-CV.pdf">{c.hero.cv}<span aria-hidden="true">↗</span></a>
				{:else}
					<a class="text-link" href="#contact">{c.hero.contact}<span aria-hidden="true">↗</span></a>
				{/if}
			</div>
		</div>
		<figure class="hero-portrait">
			<img src={profile.photo} alt={c.about.photoAlt} width="592" height="529" fetchpriority="high" />
			<figcaption><span>{profile.education.institution}</span><span>{profile.education.degree[locale]}</span></figcaption>
		</figure>
		<div class="hero-foot"><p>{c.hero.scroll}</p><a href="#contact">{c.hero.availability}<span aria-hidden="true">↗</span></a></div>
	</section>

	<section id="projects" class="section container projects-section" data-section aria-labelledby="projects-title">
		<div class="section-heading">
			<div><p class="eyebrow">{c.projects.eyebrow}</p><h2 id="projects-title">{c.projects.title}</h2></div>
			<p class="section-description">{c.projects.intro}</p>
		</div>
		<div class="project-grid">
			{#each projects as project, index (project.id)}
				<article id={`project-${project.id}`} class="project" class:project-wide={!!project.screenshots?.length} aria-labelledby={`title-${project.id}`}>
					<div class={`project-media project-${project.id}`}>
						{#if project.screenshots?.length}
							<div class="screenshot-grid">
								{#each project.screenshots as screenshot, shotIndex}
									<a class="screenshot" href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`${c.projects.gallery.fullSize}: ${screenshot.caption[locale]}`}>
										<img src={screenshot.src} srcset={screenshot.srcset} sizes={shotIndex === 0 ? '(min-width: 800px) 760px, 92vw' : '(min-width: 800px) 380px, 46vw'} width={screenshot.width} height={screenshot.height} alt={screenshot.alt[locale]} loading="lazy" decoding="async" />
										<span class="screenshot-label"><span>{screenshot.caption[locale]}</span><span aria-hidden="true">↗</span></span>
									</a>
								{/each}
							</div>
						{:else if project.gallery?.length}
							<ProjectGallery images={project.gallery} {locale} labels={c.projects.gallery} title={project.title} id={project.id} />
						{:else}
							<a class="project-cover" href={project.demoUrl ?? project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`${project.demoLabel?.[locale] ?? c.projects.gallery.fullSize}: ${project.title}`}>
								<img src={project.image.src} srcset={project.image.srcset} sizes="(min-width: 1200px) 580px, (min-width: 800px) 45vw, 92vw" width={project.image.width} height={project.image.height} alt={project.image.alt[locale]} loading="lazy" decoding="async" />
							</a>
						{/if}
					</div>
					<div class="project-copy">
						<div class="project-heading">
							<p class="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category[locale]}</span>{#if project.year}<span>{project.year}</span>{/if}</p>
							<h3 id={`title-${project.id}`}>{project.title}</h3>
							{#if project.technologies.length}<ul class="project-technologies" aria-label={c.skills.title}>{#each project.technologies as technology}<li>{technology}</li>{/each}</ul>{/if}
						</div>
						<div class="project-details">
							<p class="project-description">{project.description[locale]}</p>
							{#if project.contribution}<div class="project-contribution"><h4>{c.projects.contribution}</h4><p>{project.contribution[locale]}</p></div>{/if}
							{#if project.repositoryUrl || project.demoUrl}
								<div class="project-links">
									{#if project.repositoryUrl}<a class="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">{c.projects.repository}<span aria-hidden="true">↗</span></a>{/if}
									{#if project.demoUrl}<a class="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{project.demoLabel?.[locale] ?? c.projects.demo}<span aria-hidden="true">↗</span></a>{/if}
								</div>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
		<div class="projects-foot"><span>{String(projects.length).padStart(2, '0')} {c.nav.projects.toLowerCase()}</span><a class="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">{c.projects.github}<span aria-hidden="true">↗</span></a></div>
	</section>

	<section id="about" class="section about-section" data-section aria-labelledby="about-title">
		<div class="container about-grid">
			<div class="about-heading"><p class="eyebrow">{c.about.eyebrow}</p><h2 id="about-title">{c.about.title}</h2></div>
			<div class="about-copy">
				<p class="about-lead">{profile.bio[locale]}</p><p>{profile.interests[locale]}</p>
				<dl class="profile-details">
					<div><dt>{c.about.education}</dt><dd>{profile.education.institution}<span>{profile.education.degree[locale]}</span></dd></div>
					<div><dt>{c.about.focus}</dt><dd>{c.about.focusText}</dd></div>
				</dl>
				{#if experience.length}
					<div class="experience-list"><h3>{c.about.experience}</h3>{#each experience as item}<article><h4>{item.title[locale]}</h4><p class="experience-meta">{item.organization} · {item.period[locale]}</p><p>{item.description[locale]}</p></article>{/each}</div>
				{/if}
			</div>
		</div>
	</section>

	<section id="skills" class="section container skills-section" data-section aria-labelledby="skills-title">
		<div class="section-heading"><div><p class="eyebrow">{c.skills.eyebrow}</p><h2 id="skills-title">{c.skills.title}</h2></div><p class="section-description">{c.skills.intro}</p></div>
		<div class="skills-list">
			{#each skillGroups as group}<div class="skill-group"><h3>{group.title[locale]}</h3><ul>{#each Array.isArray(group.skills) ? group.skills : group.skills[locale] as skill}<li>{skill}</li>{/each}</ul></div>{/each}
		</div>
	</section>

	<section id="contact" class="section contact-section" data-section aria-labelledby="contact-title">
		<div class="container contact-grid">
			<div class="contact-copy">
				<p class="eyebrow">{c.contact.eyebrow}</p><h2 id="contact-title">{c.contact.title}</h2><p class="contact-intro">{c.contact.intro}</p>
				<div class="contact-direct">
					<a class="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
					<div class="contact-socials"><a class="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a class="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
				</div>
			</div>
			<ContactForm copy={c} {form} />
		</div>
	</section>
</main>
<footer class="site-footer container"><span>© {year} {profile.name}</span><a href="#top">{c.footer.back}<span aria-hidden="true">↑</span></a></footer>
