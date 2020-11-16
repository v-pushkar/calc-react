import React from "react";
import ReactDOM from "react-dom";
import {Button} from "./../Button";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"

afterEach(cleanup)
it("renders button without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>,div)
})

it("renders button correctly 'value' ",()=>{
   const {getByTestId}= render(<Button  
        
        label={"value"}
    ></Button>)
    expect(getByTestId("button").textContent).toBe("value")
})
it("renders button correctly 9",()=>{
   const {getByTestId}= render(<Button 
        
        label={"9"}
    ></Button>)
    expect(getByTestId("button").textContent).toBe("9")
})

it("mutches snapshot button",()=>{
    const tree = renderer.create(<Button label="8"></Button>)
    expect(tree).toMatchSnapshot()
})
it("mutches snapshot button 2",()=>{
    const tree = renderer.create(<Button label="+"></Button>)
    expect(tree).toMatchSnapshot()
})