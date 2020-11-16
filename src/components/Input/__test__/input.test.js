import React from "react";
import ReactDOM from "react-dom";
import {getByTestId, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Input} from "./../Input";
import renderer from "react-test-renderer"

it("Input should be render without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Input/>, div)
})

it("Input render correctly",()=>{
    const {getByTestId}= render(<Input  value={"321"}/>)
    expect(getByTestId("input").value).toBe("321")
})

it("marches shapshot input",()=>{
const tree = renderer.create(<Input value={"3215"}></Input>).toJSON()
expect(tree).toMatchSnapshot()
})