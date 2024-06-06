import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll />
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("the submit button when both inputs have an input value", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll />
                </BrowserRouter>
            </Provider>
        );

        const labelOne = component.getByTestId("firstOptionLabel");
        const inputOne = component.getByTestId("firstOption");
        const labelTwo = component.getByTestId("secondOptionLabel");
        const inputTwo = component.getByTestId("secondOption");
        const submitButton = component.getByTestId("test-submit-button");

        expect(labelOne.textContent).toBe("First Option");
        expect(labelTwo.textContent).toBe("Second Option");
        expect(submitButton.textContent).toBe("Add Poll");

        fireEvent.change(inputOne, { target: { value: 'first value' } });
        fireEvent.change(inputTwo, { target: { value: 'second value' } });
        expect(inputOne.value).toBe("first value");
        expect(inputTwo.value).toBe("second value");
    })
})