import { createContext, useState } from "react";

export const inputContext = createContext({
    currentKey: {},
});

const InputContextProvider = (props) => {
    const [currentKey, setCurrentKey] = useState({
        key: "",
    });

    // document.addEventListener("keypress", (e) => {
    //     setCurrentKey(e.key);
    //     console.log(e.key);
    // });

    return (
        <inputContext.Provider
            value={{
                currentKey: currentKey,
                setCurrentKey,
            }}
        >
            {props.children}
        </inputContext.Provider>
    );
};

export default InputContextProvider;
