import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { act } from 'react';
import NavBar from './NavBar';
import { handleLogoutAuthedUser } from '../../actions/authSliceUser';

jest.mock('../../actions/authSliceUser', () => ({
    handleLogoutAuthedUser: jest.fn(() => ({ type: 'LOGOUT_AUTHED_USER' })),
}));

const mockStore = configureStore([]);

describe('NavBar', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            authSliceUser: {
                id: 'user1',
                name: 'John Doe',
                avatarURL: 'http://example.com/avatar.jpg',
            },
            users: {
                user1: {
                    id: 'user1',
                    name: 'John Doe',
                    avatarURL: 'http://example.com/avatar.jpg',
                },
            },
        });

        store.dispatch = jest.fn();
    });

    it('should render NavBar with user information', () => {
        act(() => {
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <NavBar />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Leaderboard')).toBeInTheDocument();
        expect(screen.getByText('New Poll')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
    });

    it('should handle logout on button click', () => {
        act(() => {
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <NavBar />
                    </MemoryRouter>
                </Provider>
            );
        });

        act(() => {
            fireEvent.click(screen.getByText('Logout'));
        });

        expect(store.dispatch).toHaveBeenCalledWith(handleLogoutAuthedUser());
    });

    it('should navigate to home, leaderboard, and new poll on link clicks', () => {
        act(() => {
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <NavBar />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /leaderboard/i })).toHaveAttribute('href', '/leaderboard');
        expect(screen.getByRole('link', { name: /new poll/i })).toHaveAttribute('href', '/add');
    });
});
