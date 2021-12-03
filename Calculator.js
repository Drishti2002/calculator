import React, { useState } from "react";



const Calculator = () => {

    const [result, setResult] = useState("");

    const clickHandler = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clearAll = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
    }

    const getResult = () => {
        try {
            setResult(eval(result).toString());
        } catch {
            setResult("Error");
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h1 className="card-title text-center">Calculator</h1>
                                <input className="mt-4 text-end fw-bold fs-5" type="text" placeholder="0" value={result} />
                                <div className="row mt-3 text-center gy-1">
                                    <div className="col-12 col-sm-6 col-md-6 d-grid shadow">
                                        <button className="btn oper-btn fw-bold fs-5" onClick={clearAll}>Clear</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn oper-btn fw-bold fs-5" onClick={backspace}>C</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn operation fw-bold fs-5" name="+" onClick={clickHandler}>+</button>
                                    </div>
                                </div>
                                <div className="row mt-3 text-center gy-1">
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="7" onClick={clickHandler}>7</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="8" onClick={clickHandler}>8</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="9" onClick={clickHandler}>9</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn operation fw-bold fs-5" name="-" onClick={clickHandler}>&ndash;</button>
                                    </div>
                                </div>
                                <div className="row mt-3 text-center gy-1">
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="4" onClick={clickHandler}>4</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="5" onClick={clickHandler}>5</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="6" onClick={clickHandler}>6</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn operation fw-bold fs-5" name="*" onClick={clickHandler}>&times;</button>
                                    </div>
                                </div>
                                <div className="row mt-3 text-center gy-1">
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="1" onClick={clickHandler}>1</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="2" onClick={clickHandler}>2</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="3" onClick={clickHandler}>3</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn operation fw-bold fs-5" name="/" onClick={clickHandler}>&#247;</button>
                                    </div>
                                </div>
                                <div className="row mt-3 text-center gy-1">
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="0" onClick={clickHandler}>0</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn num-btn fw-bold fs-5" name="." onClick={clickHandler}>.</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn oper-btn fw-bold fs-5" onClick={getResult}>=</button>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 d-grid shadow">
                                        <button className="btn operation fw-bold fs-5" name="%" onClick={clickHandler}>%</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Calculator;