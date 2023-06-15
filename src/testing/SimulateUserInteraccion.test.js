import {render, fireEvent, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Calculator from "../components/calculator";


// HOME TEST 
test("test if home is displayed correctly when user clicks on home button", () => {
    render(
        <BrowserRouter>
          <Navbar/>
          <Home/>
        </BrowserRouter>
    );
    const homeButton = screen.getByText(/Home/i);
    
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
});


// CALCULATOR TEST
test("test if calculator is displayed correctly when user clicks on home calculator", () => {
    render(
        <BrowserRouter>
          <Navbar/>
          <Calculator/>
        </BrowserRouter>
    );
    const homeButton = screen.getByText(/Home/i);
    
    expect(screen.getByText('Lets do some Math!')).toBeInTheDocument();
});

// QUOTE TEST
test