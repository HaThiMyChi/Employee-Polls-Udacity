import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { act } from 'react';
import Login from './Login';
import { handleLoginUser } from '../../actions/authSliceUser';

jest.mock('../../actions/authSliceUser', () => ({
    handleLoginUser: jest.fn(() => ({ type: 'LOGIN_USER' })),
}));

const mockStore = configureStore([]);

describe('Login', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            authSliceUser: null,
        });

        store.dispatch = jest.fn();
    });

    it('should render Login component with default values', () => {
        let component;
        act(() => {
            component = render(
                <Provider store={store}>
                    <MemoryRouter>
                        <Login />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(screen.getByTestId('login-heading')).toBeInTheDocument();
        expect(screen.getByTestId('username')).toHaveValue('sarahedo');
        expect(screen.getByTestId('password')).toHaveValue('password123');

        expect(component.asFragment()).toMatchSnapshot();
    });

    it('should handle username and password change', () => {
        let component;
        act(() => {
            component = render(
                <Provider store={store}>
                    <MemoryRouter>
                        <Login />
                    </MemoryRouter>
                </Provider>
            );
        });

        const usernameInput = screen.getByTestId('username');
        const passwordInput = screen.getByTestId('password');

        fireEvent.change(usernameInput, { target: { value: 'newUser' } });
        fireEvent.change(passwordInput, { target: { value: 'newPassword' } });

        expect(usernameInput).toHaveValue('newUser');
        expect(passwordInput).toHaveValue('newPassword');

        expect(component.asFragment()).toMatchSnapshot();
    });

    it('should dispatch login action on form submit', () => {
        let component;
        act(() => {
            component = render(
                <Provider store={store}>
                    <MemoryRouter>
                        <Login />
                    </MemoryRouter>
                </Provider>
            );
        });

        const submitButton = screen.getByTestId('submit');

        fireEvent.click(submitButton);

        expect(store.dispatch).toHaveBeenCalledWith(handleLoginUser('sarahedo', 'password123'));
        expect(screen.getByTestId('username')).toHaveValue('');
        expect(screen.getByTestId('password')).toHaveValue('');

        expect(component.asFragment()).toMatchSnapshot();
    });

    it('should redirect if already logged in', () => {
        store = mockStore({
            authSliceUser: { id: 'user1', name: 'John Doe' },
        });

        let component;
        act(() => {
            component = render(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/login?redirectTo=/dashboard']}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<div>Dashboard</div>} />
                        </Routes>
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(screen.queryByTestId('login-heading')).not.toBeInTheDocument();
        expect(screen.getByText('Dashboard')).toBeInTheDocument();

        expect(component.asFragment()).toMatchSnapshot();
    });
});
