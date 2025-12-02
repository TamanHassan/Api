import { useEffect, useState } from "react";

export default function Bitcoin() {
    const [price, setPrice] = useState(null);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    const fetchPrice = async () => {
        const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
            const data = await res.json();
            setPrice(data.bpi.USD.rate_float);

    };

    useEffect(() => {
        fetchPrice();
    }, []);

    const checkGuess = () => {
        if (!guess || !price) return;

        if (Number(guess) === Math.round(price)) {
            setResult("Correct!");
        } else if (Number (guess) > price) {
            setResult("Too high");
        } else {
            setResult("Too low");
        }
    };

    return (
        <div>
            <h1>Bitcoin Price Checker</h1>
            {price && <p>Current Price: ${Math.round(price)}</p>}

            <input
                type="number"
                placeholder="Guess the BTC price"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            />

            <button onClick={checkGuess}>Guess</button>

            <p>{result}</p>

            <button onClick={fetchPrice}>Refresh Price</button>
        </div>
    );
}

