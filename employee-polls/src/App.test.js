import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from './store/store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { setAuthSliceUser } from './actions/authSliceUser';
import React from 'react';

describe("App", () => {
  it("should render the component", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should show Login page when not logged in", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const heading = component.getByTestId("login-heading");
    expect(heading).toBeInTheDocument();
  });

  it("should show Dashboard page when logged in", () => {
    store.dispatch(setAuthSliceUser({ id: "", password: "" }));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const heading = component.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });
});