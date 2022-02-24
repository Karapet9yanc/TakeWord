import React, { useEffect,  useState } from "react";
import { render } from "react-dom";
import { allWords } from "./helpers.allWords";
import { shownWords } from './helpers.shownWords';
import { getRandomWord } from './helpers.functions.jsx';

const TakeWord = () => {
    const [wordAndTransl, setWordAndTransl] = useState(getRandomWord(allWords));
    const [isWordClosed, setIsWordClosed] = useState(false)
    const [word, translation] = wordAndTransl;

    useEffect(() => {
        
    }, [wordAndTransl]);


    const takeIt = (shownWords, allWords, word, translation) => {
        setTimeout(() => {
            setIsWordClosed(false);
            setWordAndTransl(getRandomWord(allWords))
        }, 4000);

        shownWords.words.push(word);
        shownWords.translations.push(translation);

        delete allWords[word];

        setIsWordClosed(true);
    }

    return (
        <div id="wrapper">
            {
                isWordClosed ?
                <p>Waiting for a next one...</p>
                : <>
                    <h1>{word}</h1>
                    <h2>{translation}</h2>
                    <button 
                        onClick={() => takeIt(shownWords, allWords, word, translation)}
                    >
                        Take It
                    </button>
                </>
            }
        </div>
    )
}


render(<TakeWord />, document.getElementById("react-target"));
render(<div>Test</div>, document.querySelector('#root'))