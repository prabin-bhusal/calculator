import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div
      className={
        `bg-gray-100 text-white w-screen h-screen flex justify-center items-center ` +
        "customBox"
      }
    >
      <div className="w-64 h-auto bg-gray-900 rounded-3xl shadow-xl border-4 border-purple-100">
        <div className="screen p-2">
          <input
            type="text"
            value={result}
            className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-100 text-2xl pt-10 w-full text-black"
            placeholder="0"
          />
        </div>
        <div className="brand flex justify-center pb-2 pt-2 mb-2 shadow-md text-gray-500  bg-purple-200 bg-opacity-90">
          <h1 className=" text-gray-900 text-xs font-bold">PM Calculator</h1>
        </div>

        <div className="keyboard">
          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="C"
              onClick={clearScreen}
              onClickCapture={clickHandle}
              className="bg-blue-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="<"
              onClickCapture={clickHandle}
              className="bg-blue-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="%"
              onClickCapture={clickHandle}
              className="bg-blue-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="/"
              onClickCapture={clickHandle}
              className="bg-blue-600 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="7"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="8"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="9"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="*"
              onClickCapture={clickHandle}
              className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>

          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="4"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="5"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="6"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="-"
              onClickCapture={clickHandle}
              className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="1"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="2"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="3"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="+"
              onClickCapture={clickHandle}
              className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
          <div className="m-2 flex justify-between">
            <input
              type="button"
              value="0"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="00"
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="."
              onClickCapture={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="="
              onClick={calculate}
              // onClickCapture={clickHandle}
              className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
