import {render, fireEvent, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar";


test("test if elements inside calculator are render correctly", () => {
    render(
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
    );
    const buttonAc = screen.getByText(/Home/i);
    expect(buttonAc).toBeInTheDocument();
});