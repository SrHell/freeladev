import React from 'react';
import {createRoot} from 'react-dom/client';
import {useLanyard, useLanyardWS} from '../src/index';

function App() {
	const rest = useLanyard('216762282569498624');
	const socket = useLanyardWS('216762282569498624');

	// Example showing built in request deduplication.
	// The four requests below will only result in
	// one request to the API. The other three will
	// be resolved from the cache.
	useLanyard('216762282569498624');
	useLanyard('216762282569498624');
	useLanyard('216762282569498624');
	useLanyard('216762282569498624');

	return (
		<pre>
			<code>{JSON.stringify({rest, socket}, null, 2)}</code>

			<button onClick={rest.revalidate}>revalidate</button>
		</pre>
	);
}

createRoot(document.getElementById('root')!).render(<App />);
