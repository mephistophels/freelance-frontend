import {useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import {axiosInstance} from "./api/instance";
export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const createChangeHandler = useCallback((name) => (event) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }, []);

    const formUtilities = {};

    for (let field in initialValues) {
        formUtilities[field] = {
            name: field,
            value: values[field],
            onChange: createChangeHandler(field),
        };
    }


    return {
        values,
        ...formUtilities,
    };
};



export function useQuery(url, type='get') {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance[type](url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    const updateData = async (updateUrl, updatePayload) => {
        try {
            const response = await axios.put(updateUrl, updatePayload);
            setData((prevData) => {
                return prevData.map((item) =>
                    item.id === response.data.id ? response.data : item
                );
            });
        } catch (error) {
            setError(error);
        }
    };

    return [data, updateData, {error, loading}];
}

