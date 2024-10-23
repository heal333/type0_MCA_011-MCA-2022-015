import { useContext, useEffect, useState } from "react";
import React from "react";
import { inputContext } from "../../utils/InputContext";
import { useDispatch } from "react-redux";
import { changeCurrentKey } from "../../utils/redux/inputSlice";

let iniTime;
let wrongHit = 0;

function InputChecker(props) {
    let textStream = props.textStream;
    let speed;
    let errorPercentage;
    const [i, setI] = useState(0);

    function currentLetterColor(i, color) {
        document.querySelector(`.ltr${i}`).style.color = color;
    }
    function cursor(type, i) {
        if (type === "ADD") {
            document.querySelector(`.ltr${i}`).style.textDecoration =
                "Underline";
        }
        if (type === "REMOVE" && i >= 0) {
            document.querySelector(`.ltr${i}`).style.textDecoration = null;
        }
    }

    useEffect(() => {
        document.querySelector(".inputOverlay").focus();
        cursor("ADD", i);
    }, [textStream]);

    const dispatch = useDispatch();

    function inputHandeler(e) {
        if (!e.repeat) {
            dispatch(changeCurrentKey({ key: e.key, type: e.type }));
        }

        if (e.key === "Shift") {
        } else if (textStream[i] === e.key) {
            currentLetterColor(i, "var(--visitedLetter)");
            cursor("REMOVE", i);
            cursor("ADD", i + 1);
            setI((prev) => prev + 1);
        } else if (e.key === "Backspace") {
            if (i > 0) {
                // document.querySelector(`.ltr${i-1}`).innerText = textStream[i-1]
                if (
                    document.querySelector(`.ltr${i - 1}`).style
                        .backgroundColor === "var(--visitedLetter)"
                ) {
                    wrongHit -= 1;
                }
                document.querySelector(`.ltr${i - 1}`).style.backgroundColor =
                    null;
                currentLetterColor(i - 1, "var(--unvisitedLetter)");
                cursor("REMOVE", i);
                cursor("ADD", i - 1);
                setI((prev) => prev - 1);
            }
        } else {
            wrongHit += 1;
            document.querySelector(`.ltr${i}`).innerText = e.key;
            document.querySelector(`.ltr${i}`).style.backgroundColor =
                "var(--visitedLetter)";
            cursor("REMOVE", i);
            cursor("ADD", i + 1);
            setI((prev) => prev + 1);
            setTimeout(() => {
                document.querySelector(`.ltr${i}`).innerText = textStream[i];
            }, 150);
        }
        if (i === 0) iniTime = new Date();
        speed =
            (((i + 1 - wrongHit) / ((new Date() - iniTime) / 1000)) * 60) / 5;
        errorPercentage = ((i + 1) / (i + 1 + wrongHit)) * 100;
        // props.speedDriller(speed.toFixed(2), errorPercentage.toFixed(2), i + 1);
    }
    // document.addEventListener("keypress", (e) => {
    //     if (/^[A-Za-z]+$/.test(e.key)) {
    //         // blink(e.key);
    //         console.log(e.key);
    //         inputHandeler(e.key);
    //     }
    // });
    // useEffect(() => {
    //     inputHandeler(currentKey);
    // }, [currentKey]);
    // if (currentKey !== "") {
    //     inputHandeler({ key: currentKey });
    // }

    return (
        <input
            className="inputOverlay"
            onKeyDown={inputHandeler}
            onKeyUp={(e) =>
                dispatch(changeCurrentKey({ key: e.key, type: e.type }))
            }
        ></input>
    );
}

export default React.memo(InputChecker);
