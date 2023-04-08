import { useState } from "react";
import "./converter.css";
import { createSavedLocalStorage, readSavedLocalStorage } from "../features/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { getSaved, setSaved } from "../features/savedSlice";

export const Converter = () => {
  const [measure, setMeasure] = useState("");
  const [result, setResult] = useState();
  const [resultMeasure, setResultMeasure] = useState("");

  const dispatch = useDispatch();
  const savedItems = useSelector(getSaved)
  

  const inputHandler = () => {
    const value = document.getElementById("input").value;
    const option = document.getElementById("converterMenu").value;
   

    if (option === "kmToMiles") {
      setResult((0.621371 * value).toFixed(2));
      setMeasure("km");
      setResultMeasure("miles")
    } else if (option === "milesToKm") {
      setResult((1.609344 * value).toFixed(2));
      setMeasure("miles");
      setResultMeasure("km");
    } else if (option === "meterToFeet") {
      setResult((3.28084 * value).toFixed(2));
      setMeasure("m");
      setResultMeasure("feets")
    } else if (option === "feetToMeter") {
      setResult((0.3048 * value).toFixed(2));
      setMeasure("feets");
      setResultMeasure("m")
    } else if (option === "cmToInch") {
      setResult((0.3937008 * value).toFixed(2));
      setMeasure("cm");
      setResultMeasure("inches")
    } else if (option === "inchToCm") {
      setResult((2.54 * value).toFixed(2));
      setMeasure("inches");
      setResultMeasure("cm")
    }
  };

  const onClickHeartHandler = (e) => {
    const value = document.getElementById("input").value;
    if(value !== ""){
    const corazon = e.target;
    corazon.classList.remove("fa-regular");
    corazon.classList.add("fa-solid");
  
    let savedResult = { result: value + " " + measure + " → " + result + " " + resultMeasure};

    createSavedLocalStorage(savedResult);
    dispatch(setSaved(readSavedLocalStorage()));

    console.log(savedItems)

    setTimeout( ()=> {
      corazon.classList.remove("fa-solid");
      corazon.classList.add("fa-regular");
    }, 3000)
  }
  }


  return (
    <>
      <div className="converter">
        <h3>convert</h3>
        <div className="converterFirstRow">
          <div className="select">
            <select id="converterMenu" className="converterMenu" onChange={inputHandler}>
              <option value="kmToMiles" className="converterOption">
                km → miles
              </option>
              <option value="milesToKm" className="converterOption">
                miles → km
              </option>
              <option value="meterToFeet" className="converterOption">
                meter → feet
              </option>
              <option value="feetToMeter" className="converterOption">
                feet → meter
              </option>
              <option value="cmToInch" className="converterOption">
                cm → inch
              </option>
              <option value="inchToCm" className="converterOption">
                inch → cm
              </option>
            </select>
            <svg
              width="18"
              height="22"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M5.04045 1.70711C5.43097 1.31658 5.43097 0.683417 5.04045 0.292893C4.64992 -0.0976311 4.01676 -0.0976311 3.62623 0.292893L0.959565 2.95956C0.569041 3.35008 0.569041 3.98325 0.959565 4.37377L3.62623 7.04044C4.01676 7.43096 4.64992 7.43096 5.04045 7.04044C5.43097 6.64992 5.43097 6.01675 5.04045 5.62623L4.08089 4.66667H17.6667C18.219 4.66667 18.6667 4.21895 18.6667 3.66667C18.6667 3.11438 18.219 2.66667 17.6667 2.66667H4.08089L5.04045 1.70711Z"
                fill="#FFFFFF"
              />
              <path
                d="M16.9596 10.9596C16.569 11.3501 16.569 11.9832 16.9596 12.3738L17.9191 13.3333H4.33334C3.78105 13.3333 3.33334 13.781 3.33334 14.3333C3.33334 14.8856 3.78105 15.3333 4.33334 15.3333H17.9191L16.9596 16.2929C16.569 16.6834 16.569 17.3166 16.9596 17.7071C17.3501 18.0976 17.9833 18.0976 18.3738 17.7071L21.0404 15.0404C21.431 14.6499 21.431 14.0168 21.0404 13.6262L18.3738 10.9596C17.9833 10.569 17.3501 10.569 16.9596 10.9596Z"
                fill=" #FFFFFF"
              />
            </svg>
          </div>

          <div className="converterInput">
            <input
              id="input"
              className="input"
              type="number"
              onInput={inputHandler}
            ></input>
            <p className="unidad">{resultMeasure}</p>
          </div>
        </div>
        <div className="converterSecondRow">
          <i id="corazon"
            className="fa-regular fa-heart fa-lg"
            style={{ color: "#FFFFFF", paddingLeft: "3px" }}
            onClick={onClickHeartHandler}
          ></i>
      
          <div className="result">
            <p className="resultValue">{result}</p>{" "}
            <p className="resultMedida">{measure}</p>
          </div>
        </div>
      </div>
    </>
  );
};
