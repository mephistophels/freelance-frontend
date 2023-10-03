import { useState, useCallback } from 'react';

const useForm = (initialValues) => {
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

export default useForm;
