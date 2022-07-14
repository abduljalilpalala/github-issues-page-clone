import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (page, state) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    params: { page: page, state: state, per_page: 10 },
                    headers: { Accept: "application/vnd.github+json" },
                };
                const response = await axios.get(
                    `https://api.github.com/repos/vuejs/vue/issues`,
                    config
                );
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        };
        fetchData();
    }, [state, page]);

    return { data, isPending, error };
};

export default useFetch;
