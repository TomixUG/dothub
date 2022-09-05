<script context="module">
	import { locale, loadTranslations } from '$lib/translations';
	export const load = async ({ url }) => {
		const { pathname } = url;
		const defaultLocale = 'en';
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	};
</script>

<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';

	// graphql
	import { setClient } from '@urql/svelte';
	import client from '../_client';
	setClient(client);
</script>

<Navbar />

<slot />

<style>
</style>
