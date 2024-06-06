import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import NavBar from "./NavBar";
import { handleLogoutAuthedUser } from "../../actions/authSliceUser";

// Mock store
const mockStore = configureStore([]);
const store = mockStore({
    authSliceUser: {
        id: "sarahedo",
        name: "Sarah Edo",
        avatarURL: "http://example.com/avatar.png",
    },
    users: {},
});

// Mock actions
jest.mock("../../actions/authSliceUser", () => ({
    handleLogoutAuthedUser: jest.fn(() => ({ type: "LOGOUT_USER" })),
}));

describe("NavBar", () => {
    beforeEach(() => {
        // Clear any previous mock calls
        jest.clearAllMocks();
    });

    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should display username and avatar of the logged-in user", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                </BrowserRouter>
            </Provider>
        );

        const usernameElement = screen.getByTestId("user-information-nav");
        expect(usernameElement).toHaveTextContent("Sarah Edo");

        const avatarElement = screen.getByAltText("User Avatar");
        expect(avatarElement.src).toBe("http://example.com/avatar.png");
    });

    it("should call handleLogout when logout button is clicked", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                </BrowserRouter>
            </Provider>
        );

        const logoutButton = screen.getByText("Logout");
        fireEvent.click(logoutButton);

        expect(handleLogoutAuthedUser).toHaveBeenCalledTimes(1);
    });
});