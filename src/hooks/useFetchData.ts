import { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';

function useFetchData(url: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(url)
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetchData;
