<script lang="ts">
	let { name, icon }: { name: string; icon: string } = $props();
</script>

<div class="glass-panel flex items-center justify-center rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-xl">
	<img src={icon} alt={name} class="h-24 w-24 object-contain" />
</div>
