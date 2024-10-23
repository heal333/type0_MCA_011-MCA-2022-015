import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TextSection from "./components/textSection/TextSection";
import StatusBar from "./components/statusBar/statusBar";
import History from "./components/sideMenu/history";
import SideMenu from "./components/sideMenu/sideMenu";
import "./App.css";
import InputContextProvider from "./utils/InputContext";

import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

function App() {
    const [speed, setSpeed] = useState("infinity");
    const [accuracy, setAccuracy] = useState(100.0);
    const [totalLetters, setTotalLetters] = useState(0);

    // function speedDriller(speed, accu, totalLetters) {
    //     setSpeed(speed);
    //     setAccuracy(accu);
    //     setTotalLetters(totalLetters);
    // }
    const speedDriller = (speed, accu, totalLetters) => {
        console.log("hehe");
    };
    const homepage = (
        <InputContextProvider>
            <Provider store={appStore}>
                <TextSection speedDriller={speedDriller}></TextSection>
                <SideMenu />
                <StatusBar
                    speed={speed}
                    accuracy={accuracy}
                    totalLetters={totalLetters}
                />
            </Provider>
        </InputContextProvider>
    );
    const router = createBrowserRouter([
        { path: "/type0", element: homepage },
        { path: "/type0/history", element: <History /> },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
