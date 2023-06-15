import {render, fireEvent, screen} from "@testing-library/react";
import Calculator from "../components/calculator";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import DisplayQuote from "../components/displayQuote";
import { BrowserRouter } from "react-router-dom";


test("test if elements inside calculator are render correctly", () => {
    render(<Calculator/>);
    const buttonAc = screen.getByText(/AC/i);
    expect(buttonAc).toBeInTheDocument();
});

test("test if calculator render correctly", () => {
    const {calculator} = render(<Calculator/>);
    expect(calculator).toMatchSnapshot();
});

test("test if Home renders correctly", () => {
    const {home} = render(<Home/>);
    expect(home).toMatchSnapshot();
});
test("test if Navbar render correctly", () => {
    const {navbar} = {
        render: () => (
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        )
    }
    expect(navbar).toMatchSnapshot();
});

test("test if Quote render correctly", () => {
    const {displayQuote} = render(<DisplayQuote/>);
    expect(displayQuote).toMatchSnapshot();
});