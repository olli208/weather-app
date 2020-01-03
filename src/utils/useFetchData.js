import { useState } from 'react';

function useFetchData() {
	const [result, setResult] = useState(null);

	async function fetchData(endpoint) {
		try {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/${endpoint}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
				.then(body => body)
				.catch(err => console.log('fetch err', err))

			const json = await res.json()
			setResult(json)

		}
		catch (error) {
			setResult(error)
		}
	};

	return [result, fetchData]
}

export default useFetchData