<script lang="ts">
	import { operationStore, query } from '@urql/svelte';

	const userInfo = operationStore(`
    query{
            userInfo {
                id
                username
                email
            }
    }
`);
	query(userInfo);
	console.log(userInfo);
</script>

<h1>About</h1>

{#if $userInfo.fetching}
	<p>Loading...</p>
{:else if $userInfo.error}
	<p>Oopsie! {$userInfo.error.message}</p>
{:else}
	{userInfo.data.userInfo.username}
{/if}
