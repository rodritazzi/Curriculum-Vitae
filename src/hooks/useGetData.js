import { useState, useEffect } from 'react';

const api = 'https://peaceful-reef-42131.herokuapp.com/'
const useGetData = () => {
    const [mydata, setData] = useState([]);


    useEffect(() => {
    fetch(api)
        .then(Response => Response.json())
        .then(data => setData(data))
    }, []);
return mydata;
}

export default useGetData;
