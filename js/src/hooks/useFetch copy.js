import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function Load() {
			setLoading(true);
			try {
				const res = await axios.get(url)
				setData(res.data)
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(error)
			}
		}
		Load(url)
	}, [url])

	const refresh = async () => {
		try {
			setLoading(true)
			const res = await axios.get(url)

			setData(res.data)
			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	return { data, loading, error, refresh }
}

export default useFetch

