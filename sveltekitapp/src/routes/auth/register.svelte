<script lang="ts">
	import { loading } from '$lib/translations';
	import { operationStore, mutation } from '@urql/svelte';

	let username: string;
	let email: string;
	let password: string;

	const register = operationStore(`
			mutation ($username: String!, $email: String!, $password: String!) {
				register (data:{username: $username, email: $email, password: $password}) {
					accessToken
					refreshToken
				}
			}
	`);

	const updateRegister = mutation(register);

	function onSubmit() {
		console.log({ username: username, email: email, password: password });
		updateRegister({ username: username, email: email, password: password });
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	{#if $register.data}
		<div class="alert alert-success shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Successfully registered!</span>
			</div>
		</div>
	{/if}
	{#if $register.error}
		<div class="alert alert-error shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Error! Task failed successfully.</span>
			</div>
		</div>
	{/if}

	{#if $register.fetching}
		<p>loading.....</p>
	{/if}

	<div class="form-control w-full max-w-xs">
		<label class="label" for="username">
			<span class="label-text">Username</span>
		</label>
		<input
			type="text"
			id="username"
			placeholder="Username"
			class="input input-bordered w-full max-w-xs"
			required
			bind:value={username}
		/>
		<label class="label" for="email">
			<span class="label-text">Email</span>
		</label>
		<input
			type="email"
			id="email"
			placeholder="Email"
			class="input input-bordered w-full max-w-xs"
			required
			bind:value={email}
		/>
		<label class="label" for="password">
			<span class="label-text">Password</span>
		</label>
		<input
			type="text"
			id="password"
			placeholder="Password"
			class="input input-bordered w-full max-w-xs"
			required
			bind:value={password}
		/>

		<input class="btn my-8" type="submit" />
	</div>
</form>
