import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";





describe("Login Component", () => {
    // 1. Testing component loading
    test("should render component without crashing", () => {
        const { container } = render(<Login />);
        let inputElements = container.querySelectorAll("input");
        expect(inputElements.length).toBe(3);
    });


    // 2. Testing input elements :  getting data from input 
    test('should user id textbox should be empty', () => {
        const { container } = render(<Login />);
        let str = container.querySelector<HTMLInputElement>("#t1")?.value;    // get textbox value 
        expect(str).toBe("");
    });

    // 3. Testing input elements :  setting data to  input 
    test('should set the correct value to input element', () => {

        const { container } = render(<Login />);      
        let e1  = container.querySelector<HTMLInputElement>("#t1");
        fireEvent.change(e1!,  { target: { value: 'Narasimha' } });
        let str = e1!.value;
        expect(str).toBe("Narasimha");
    });


    // 4. Testing button click
    it('should render valid message after login button click [VALID USER]', () => {
        const { container } = render(<Login />);   

        let uidTextElement  = container.querySelector<HTMLInputElement>("#t1");
        let pwdTextElement  = container.querySelector<HTMLInputElement>("#t2");
        let buttonElement  = container.querySelector<HTMLInputElement>("#b1");

        fireEvent.change(uidTextElement!,  { target: { value: 'admin' } });
        fireEvent.change(pwdTextElement!,  { target: { value: 'admin123' } });
        fireEvent.click(buttonElement!);

        let paraElement = container.querySelector("#result")    // get textbox value 
        expect(paraElement?.textContent).toBe("Welcome to Admin");
    });


// 5. Testing button click
it('should render invalid message after login button click [INVALID USER]', () => {
    const { container } = render(<Login />);   

    let uidTextElement  = container.querySelector<HTMLInputElement>("#t1");
    let pwdTextElement  = container.querySelector<HTMLInputElement>("#t2");
    let buttonElement  = container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidTextElement!,  { target: { value: 'hello' } });
    fireEvent.change(pwdTextElement!,  { target: { value: 'admin123' } });
    fireEvent.click(buttonElement!);

    let paraElement = container.querySelector("#result")    // get textbox value 
    expect(paraElement?.textContent).toBe("Invalid User Id or Password");
});






});





