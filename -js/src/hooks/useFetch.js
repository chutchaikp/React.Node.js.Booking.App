import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setData(res.data);
				// const data = [
				// 	{ id: 1, name: 'Leanne Graham', username: 'Bret', },
				// 	{ id: 2, name: 'Ervin Howell', username: 'Antonette', },
				// 	{ id: 3, name: 'Clementine Bauch', username: 'Samantha	', },
				// ]
				// setData(data)
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data, loading, error, reFetch };
};

export default useFetch;