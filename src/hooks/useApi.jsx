import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = '123293c6c692ce641570f9a57a28a2fa';
const api = axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },      
        params: {
            'api_key': API_KEY,
        }
})


function useGetItemsAPI({destruct}) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getItems = async (path, params = {}) => {
        setLoading(true);
        await api.get(path, { params: {...params} })
                 .then(res => {
                    setPage(page + 1);
                    setItems(res.data[destruct])
                    if (res.data.page === res.data.total_pages) return setHasMore(false);
                 })
                 .catch(err => console.error(err))
                 .finally(() => setLoading(false))

    }

    const getMoreItems = async (path, params = {}) => {
        setLoading(true);
        await api.get(path, { params: {page: page, ...params} })
                 .then(res => {
                    setItems(prevData => [...prevData, ...res.data[destruct]]);
                    if (res.data.page === res.data.total_pages) return setHasMore(false);
                 })
                 .catch(err => console.error(err))
                 .finally(() => {
                    setPage(page + 1);
                    setLoading(false);  
                 })

    }

    
        return [items, getItems, loading, getMoreItems, hasMore]

    // const [data, setData] = useState([]);

    // async function getData(path) {
    //     const { data } = await api.get(path)
    //     setData(data.results)
    // }
    // useEffect(() => {
    //     getData();
    // })
}

function useGetItemAPI({path}) {
    const [loading, setLoading] = useState(false);

    const getItem = async (params = {}) => {
        setLoading(true)
        return await api.get(path, { params: {...params}})
                        .then(res => res.data)
                        .catch(err => console.error(err))
                        .finally(() => setLoading(false))

    }

    return [loading, getItem];
}

export { useGetItemsAPI, useGetItemAPI };