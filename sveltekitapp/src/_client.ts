import { createClient } from '@urql/svelte';

export default createClient({
	url: import.meta.env.VITE_BACKEND,
	fetchOptions: () => {
		return {
			headers: {
				authorization:
					'f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YTk4ODE3Ni1lY2ZmLTQ0YzEtOTMxOC1mMTA0OWVhODAzODYiLCJpYXQiOjE2NDg2Njk3NjAsImV4cCI6MTY0ODY3MDY2MH0.viwBkshuu144YRDMWO-rHXp5BkAWl0SJ_FRGNHGKRr0'
			}
		};
	}
});
