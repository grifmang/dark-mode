import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);
    const body = document.getElementsByTagName('body');

    useEffect(() => {
        if (values === true) {
            body[0].classList.toggle('dark-mode');
        }
    }, [values, body])

    return [values, setValues];
}