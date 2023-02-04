import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		debugger;
		async function Load() {
			try {
				const res = await axios.get('/hotel/countByType')
				setData(res.data)

			} catch (error) {
				setError(error)
			}
		}

		setLoading(true);
		Load(url)

	}, [url])

	const refresh = () => {
		debugger;
	}

	return { data, loading, error }
}

export default useFetch

