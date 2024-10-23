import { memo, useContext, useEffect } from "react";
import { inputContext } from "../../utils/InputContext";
import { useSelector } from "react-redux";

const Keyboard = (props) => {
    const currentKey = useSelector((store) => store.input.currentKey);
    console.log(currentKey.key);
    const top = [
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
    ];
    const qwer = [
        "Tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "\\",
    ];
    let asdf = [
        "CapsLock",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "Enter",
    ];
    const zxcv = [
        "Shift1",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "/",
        "Shift2",
    ];
    const bottom = [
        "Ctrl1",
        "Fn",
        "Wn",
        "Alt1",
        "Space bar",
        "Alt2",
        "Ctrl2",
        "Fn2",
    ];

    const keyDown = (key) => {
        document.querySelector(`.${key}`).style.backgroundColor =
            "var(--visitedLetter)";
    };

    const keyUp = (key) => {
        document.querySelector(`.${key}`).style.backgroundColor =
            "var(--backgroundColor)";
    };

    if (/^[A-Za-z]+$/.test(currentKey.key)) {
        console.log(currentKey.type);
        if (currentKey.type === "keydown") {
            if (currentKey.key === "Shift") {
                keyDown("Shift1");
                for (let i = 1; i < asdf.length; i++) {
                    asdf[i] = asdf;
                }
            } else {
                keyDown(currentKey.key);
            }
        } else if (currentKey.type === "keyup") {
            if (currentKey.key === "Shift") {
                keyUp("Shift1");
            } else {
                keyUp(currentKey.key);
            }
        }
    }

    // useEffect(() => {

    //     if (currentKey.key === "") {
    //         document.querySelector(".key").style.backgroundColor = "red";
    //         console.log("sdfsdf");
    //     }
    // });

    return (
        <div
            className="keyboard"
            style={{
                color: props.color,
                backgroundColor: props.backgroundColor,
                borderColor: props.color,
            }}
        >
            <div className="first">
                {top.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="qwer">
                {qwer.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="asdf">
                {asdf.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="zxcv">
                {zxcv.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="bottom">
                {bottom.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Keyboard;
