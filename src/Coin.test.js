import React from "react";
import { queryByText, render } from "@testing-library/react";
import Coin from "./Coin";

it("renders without crashing", function(){
    render(<Coin face="head"/>);

});

it("creates a <p> element with a face text", function(){
    const { debug, queryByText, queryByTestId } = render(<Coin face="head"/>);

    expect(queryByTestId("head")).toBeInTheDocument();
});