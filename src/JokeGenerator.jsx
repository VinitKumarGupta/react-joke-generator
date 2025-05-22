import { useState, useEffect } from "react";
import "./App.css";

export default function JokeGenerator() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const [joke, setJoke] = useState({ setup: "", punchline: "" });

    const getNewJoke = async () => {
        const res = await fetch(URL);
        const json = await res.json();
        setJoke({ setup: json.setup, punchline: json.punchline });
    };

    useEffect(() => {
        getNewJoke();
    }, []);

    return (
        <div className="card">
            <h1 className="joke-title">😂 Random Joke Hub</h1>
            <h2 className="joke-setup">{joke.setup}</h2>
            <p className="joke-punchline">{joke.punchline}</p>
            <button onClick={getNewJoke}>Get a New Joke</button>
        </div>
    );
}
