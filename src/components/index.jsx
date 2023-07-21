import React, {useState} from "react";
import './style.css'


const Index = () => {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult("")
    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch(err) {
            setResult("Error");
        }
    }


        return (
            <div>
                <div className="calculator">
                    <form>
                        <input type="text" name="input" value={result} />
                    </form>

                    <div className="keypad">
                        <button className="highlight" id="clear" onClick={clear}>Clear</button>
                        <button className="highlight" id="backspace" onClick={backspace}>C</button>
                        <button name="/" className="highlight2" onClick={handleClick}>&divide;</button>
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button>
                        <button name="9" onClick={handleClick}>9</button>
                        <button name="*" className="highlight2" onClick={handleClick}>&times;</button>
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                        <button name="-" className="highlight2" onClick={handleClick}>&ndash;</button>
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                        <button name="+" className="highlight2" onClick={handleClick}>+</button>
                        <button name="0" onClick={handleClick}>0</button>
                        <button name="." onClick={handleClick}>.</button>
                        <button className="highlight" id="result" onClick={calculate}>=</button>
                    </div>
                    
                </div>
            </div>
        )

}

export default Index;