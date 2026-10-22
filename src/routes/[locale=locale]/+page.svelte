<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import Navigation from '$lib/components/Navigation.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
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
	<meta name="theme-color" content="#f8f7f4" />
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
		<p class="eyebrow hero-eyebrow"><span class="status-dot" aria-hidden="true"></span>{c.hero.eyebrow}</p>
		<h1 id="hero-title">{c.hero.lineOne}<br />{c.hero.lineTwo}<br /><em>{c.hero.emphasis}</em></h1>
		<div class="hero-bottom">
			<div class="hero-introduction"><p>{c.hero.intro}</p><div id="cv" class="hero-buttons">
				<a class="button button-dark" href="#projects">{c.hero.projects}<span aria-hidden="true">↓</span></a>
				{#if data.cvUrl}<a class="button button-outline" href={data.cvUrl} download="Kevin-Taniar-CV.pdf">{c.hero.cv}<span aria-hidden="true">↗</span></a>{:else}<a class="text-link" href="#contact">{c.hero.contact}<span aria-hidden="true">↗</span></a>{/if}
			</div></div>
			<aside class="hero-aside"><span class="eyebrow">{c.hero.asideLabel}</span><p class="aside-title">{c.hero.asideTitle}</p><p>{c.hero.asideText}</p></aside>
		</div>
		<div class="hero-foot"><span>01 — {profile.name}</span><a href="#projects">{c.hero.scroll}<span aria-hidden="true">↓</span></a></div>
	</section>
	<section id="projects" class="section container projects-section" data-section aria-labelledby="projects-title">
		<div class="section-heading"><div><p class="eyebrow">{c.projects.eyebrow}</p><h2 id="projects-title">{c.projects.title}</h2></div><p class="section-description">{c.projects.intro}</p></div>
		<div class="project-list">
			{#each projects as project, index}
				<article class="project" class:reverse={index % 2 === 1} aria-labelledby={`title-${project.id}`}>
					<div class={`project-image-frame project-${project.id}`}>
						<div class="project-image-label"><span>{String(index + 1).padStart(2, '0')} / {c.projects.number}</span><span>{project.year}</span></div>
						<img class="project-image" src={project.image.src} srcset={project.image.srcset} sizes="(min-width: 1200px) 680px, (min-width: 800px) 55vw, 92vw" width={project.image.width} height={project.image.height} alt={project.image.alt[locale]} loading="lazy" decoding="async" />
					</div>
					<div class="project-copy">
						<p class="eyebrow">{project.category[locale]}</p><h3 id={`title-${project.id}`}>{project.title}</h3><p class="project-description">{project.description[locale]}</p>
						{#if project.contribution}<div class="project-contribution"><h4>{c.projects.contribution}</h4><p>{project.contribution[locale]}</p></div>{:else}<p class="draft-note">{c.projects.pending}</p>{/if}
						{#if project.technologies.length}<ul class="project-technologies" aria-label={c.skills.title}>{#each project.technologies as technology}<li>{technology}</li>{/each}</ul>{/if}
						{#if project.repositoryUrl || project.demoUrl}<div class="project-links">{#if project.repositoryUrl}<a class="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">{c.projects.repository}<span aria-hidden="true">↗</span></a>{/if}{#if project.demoUrl}<a class="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{c.projects.demo}<span aria-hidden="true">↗</span></a>{/if}</div>{/if}
					</div>
				</article>
			{/each}
		</div>
		<div class="projects-foot"><span class="eyebrow">{profile.role[locale]}</span><a class="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">{c.projects.github}<span aria-hidden="true">↗</span></a></div>
	</section>
	<section id="about" class="about-section" data-section aria-labelledby="about-title">
		<div class="container about-grid">
			<div class="about-heading"><p class="eyebrow">{c.about.eyebrow}</p><h2 id="about-title">{c.about.title}</h2><img src={profile.photo} alt={c.about.photoAlt} width="592" height="529" loading="lazy" decoding="async" class="profile-image" /></div>
			<div class="about-copy">
				<p class="about-lead">{profile.bio[locale]}</p><p>{profile.interests[locale]}</p>
				<dl class="profile-details"><div><dt>{c.about.education}</dt><dd>{profile.education.institution}<span>{profile.education.degree[locale]}</span></dd></div><div><dt>{c.about.focus}</dt><dd>{c.about.focusText}</dd></div></dl>
				{#if experience.length}
					<div class="experience-list"><h3>{c.about.experience}</h3>{#each experience as item}<article><h4>{item.title[locale]}</h4><p class="experience-meta">{item.organization} · {item.period[locale]}</p><p>{item.description[locale]}</p></article>{/each}</div>
				{/if}
				<p class="draft-note about-draft"><span aria-hidden="true">↳</span> {c.about.draft}</p>
			</div>
		</div>
	</section>
	<section id="skills" class="section container skills-section" data-section aria-labelledby="skills-title">
		<div class="section-heading"><div><p class="eyebrow">{c.skills.eyebrow}</p><h2 id="skills-title">{c.skills.title}</h2></div><p class="section-description">{c.skills.intro}</p></div>
		<div class="skills-list">{#each skillGroups as group, index}<div class="skill-group"><span class="skill-number" aria-hidden="true">0{index + 1}</span><h3>{group.title[locale]}</h3><ul>{#each Array.isArray(group.skills) ? group.skills : group.skills[locale] as skill}<li>{skill}</li>{/each}</ul></div>{/each}</div>
	</section>
	<section id="contact" class="contact-section" data-section aria-labelledby="contact-title">
		<div class="container contact-grid">
			<div class="contact-copy"><p class="eyebrow">{c.contact.eyebrow}</p><h2 id="contact-title">{c.contact.title}</h2><p class="contact-intro">{c.contact.intro}</p><div class="contact-direct"><p class="eyebrow">{c.contact.alternative}</p><a class="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a><a class="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span aria-hidden="true">↗</span></a></div></div>
			<ContactForm copy={c} {form} />
		</div>
	</section>
</main>
<footer class="site-footer container"><div><span>© {year} {profile.name}</span><span class="footer-credit">{c.footer.credit}</span></div><div class="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#top">{c.footer.back} ↑</a></div></footer>
