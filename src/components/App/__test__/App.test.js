import { render, screen } from '@testing-library/react';
import App from './../App';
import ReactDOM from "react-dom"

it('renders buuton "0" ', () => {
  render(<App />);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});

it("render without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
})