import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (page, state) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nextBtnLoading, setNextBtnLoading] = useState(false);
    const [previousBtnLoading, setPreviousBtnLoading] = useState(false);

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
            setNextBtnLoading(false);
            setPreviousBtnLoading(false);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, state]);

    return {
        data,
        error,
        loading,
        nextBtnLoading,
        setNextBtnLoading,
        previousBtnLoading,
        setPreviousBtnLoading,
    };
};

export default useFetch;
