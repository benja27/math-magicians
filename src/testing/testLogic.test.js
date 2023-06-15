import calculate from "../logic/calculate";
import { render, screen } from "@testing-library/react";
import operate from "../logic/operate";

test("lets check if operate works correctly",()=>{
    expect(operate(1,2,"+")).toBe("3");
    expect(operate(1,2,"-")).toBe("-1");
    expect(operate(1,2,"x")).toBe("2");
    expect(operate(1,2,"÷")).toBe("0.5");
    expect(operate(1,2,"%")).toBe("1");
    expect(operate(1,0,"÷")).toBe("Can't divide by 0.");
    expect(operate(1,0,"%")).toBe("Can't find modulo as can't divide by 0.");    
})

test("lets check if calculate works correctly",()=>{
  expect(calculate({total:"1",next:"2",operation:"+"},"=")).toEqual({total:"3",next:null,operation:null});
  expect(calculate({total:"1",next:"2",operation:"+"},"+")).toEqual({total:"3",next:null,operation:"+"});
  expect(calculate({total:"1",next:"2",operation:"+"},"-")).toEqual({total:"3",next:null,operation:"-"});
})
