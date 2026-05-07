<script lang="ts">
	import SkillCard from '$lib/components/SkillCard.svelte';
	import profileImage from '$lib/assets/personal_img.jpg';
	import cLogo from '$lib/assets/C_Logo.png';
	import pythonLogo from '$lib/assets/Python.png';
	import htmlLogo from '$lib/assets/html_logo.png';
	import cssLogo from '$lib/assets/CSS-Logo-2011.png';
	import jsLogo from '$lib/assets/JavaScript-logo.png';
	import bootstrapLogo from '$lib/assets/bootstrap.png';
	import svelteLogo from '$lib/assets/Svelte_Logo.svg.png';

	const skills = [
		{ name: 'C', icon: cLogo },
		{ name: 'Python', icon: pythonLogo },
		{ name: 'HTML', icon: htmlLogo },
		{ name: 'CSS', icon: cssLogo },
		{ name: 'JavaScript', icon: jsLogo },
		{ name: 'Bootstrap', icon: bootstrapLogo },
		{ name: 'Svelte', icon: svelteLogo }
	];
</script>

<section class="mx-auto w-full max-w-6xl px-4 py-12">
	<div class="grid gap-10 md:grid-cols-[1fr_1.6fr]">
		<div class="flex items-center justify-center">
			<img
				src={profileImage}
				alt="Kevin Taniar"
				class="h-72 w-72 rounded-3xl object-cover shadow-2xl"
			/>
		</div>
		<div class="glass-panel rounded-3xl p-8">
			<h1 class="text-4xl font-semibold">About Me</h1>
			<p class="mt-4 text-sm text-white/80">
				Hello, I'm <span class="font-semibold text-white">Kevin Taniar</span>, majoring Informatics in
				Multimedia Nusantara University.
			</p>
			<p class="mt-3 text-sm text-white/70">
				I have a keen interest in artificial intelligence, cyber security, and creating attractive and dynamic
				websites using modern technologies such as HTML, CSS, JavaScript, and frameworks.
			</p>
			<p class="mt-3 text-sm text-white/70">
				When I'm not coding, you can find me exploring new tech trends, reading, or playing video games.
			</p>
		</div>
	</div>

	<div class="mt-16">
		<h2 class="text-center text-3xl font-semibold">Skill Stack</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each skills as skill}
				<SkillCard name={skill.name} icon={skill.icon} />
			{/each}
		</div>
	</div>
</section>
