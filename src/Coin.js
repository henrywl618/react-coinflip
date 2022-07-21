import React from "react";
import "./Coin.css";
import headImg from "./head.png";
import tailsImg from "./tails.png";

const Coin = ({face}) => {
    let img;

    if(face==="head"){
        img = headImg;
    }
    else if(face==="tails"){
        img = tailsImg;
    }

    return(
        <div className="Coin">
        {face ? <img className="Coin-img" data-testid={face} src={img}></img> : null}
    </div>
    )

}

export default Coin;
