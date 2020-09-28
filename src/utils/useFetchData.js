import { useState } from 'react';

function useFetchData() {
	const [result, setResult] = useState(null);

	async function fetchData(param) {
		// volgens mij werkt dit
		try {
			const res = await (await fetch(`https://api.openweathermap.org/data/2.5/${param}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`))
				.then(body => body)
				.catch(err => console.log('fetch error', err)) // fixme

			//const json = await res.json()
			setResult(json)

		}
		catch (error) {
			setResult(error)
		}
	};

	return [result, fetchData]
}

export default useFetchData
