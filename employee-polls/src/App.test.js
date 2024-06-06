import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from './store/store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { setAuthSliceUser } from './actions/authSliceUser';

describe("App", () => {
  test("should render the loginform onload", async () => {
    store.dispatch(setAuthSliceUser({ id: "", password: "" }));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const loginHeading = component.getByTestId("heading");
    expect(loginHeading).toBeInTheDocument();
  });
});