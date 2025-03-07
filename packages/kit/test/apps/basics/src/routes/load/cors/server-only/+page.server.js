/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
	const res = await fetch(`http://localhost:${url.searchParams.get('port')}`);

	return {
		text: await res.text()
	};
}
