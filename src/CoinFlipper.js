import React, {useState} from "react";
import Coin from "./Coin";

const faces = ["head","tails"];

const CoinFlipper = () =>{
    let [face, setFace] = useState(null);
    let [flips, setFlips] = useState(0);
    let [headCount, setHeadCount] = useState(0);
    let [tailsCount, setTailsCount] = useState(0);

    const flipCoin = ()=>{
        const randomIndex = Math.round(Math.random());
        const face = faces[randomIndex];
        setFace(face);
        setFlips(flips+1);
        face === "head" ? setHeadCount(headCount+1) : setTailsCount(tailsCount+1);
    };

    return(
        <>
        <Coin face={face}/>
        <button data-testid="button" onClick={flipCoin}>Flip</button>
        <p>{`Out of ${flips} flips, there have been ${headCount} heads and ${tailsCount} tails.`}</p>
        </>
    );
};
export default CoinFlipper;