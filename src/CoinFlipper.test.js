import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinFlipper from "./CoinFlipper";

beforeEach(function () {
  jest.spyOn(Math, "random").mockReturnValueOnce(0.1).mockReturnValueOnce(0.9);
});

afterEach(function () {
  Math.random.mockRestore();
});

it("renders without crashing", function () {
  render(<CoinFlipper />);
});

it("to not render a coin image", function () {
  const { queryByTestId } = render(<CoinFlipper />);

  expect(queryByTestId("head")).toEqual(null);
});

it("to flip the coin and show head", function (){
    const { queryByTestId } = render(<CoinFlipper />);

    const button = queryByTestId("button");
    fireEvent.click(button);

    expect(queryByTestId("head")).toBeInTheDocument();
});

it("to flip the coin and show tails", function (){
    const { queryByTestId } = render(<CoinFlipper />);

    const button = queryByTestId("button");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(queryByTestId("tails")).toBeInTheDocument();
});
