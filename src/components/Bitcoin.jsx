import { useEffect, useState } from "react";

export default function Bitcoin() {
    const [price, setPrice] = useState(null);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchPrice = async () => {
        try {
            setLoading(true);
            setError("");
        const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
            const data = await res.json();
            setPrice(data.bpi.USD.rate_float);
            setResult("");
        } catch (error) {
            console.error(error);
            setError("Failed to fetch price");
            }finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchPrice();
    }, []);

    const checkGuess = () => {
        const numGuess = Number(guess);
        if (!guess || !price) return;

        const difference = Math.abs(Number(guess) - price);
        
        if (difference < 100) {
            setResult("close!");

        } else if (Number (guess) > price) {
            setResult("Too high");
        } else {
            setResult("Too low");
        }
    };

    return (
        <div>
            <h1>Bitcoin Price Checker</h1>

            {loading && <p>Loading Price...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && price && <p> Current Price: ${Math.round(price)}</p>}
            

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

