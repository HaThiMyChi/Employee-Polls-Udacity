import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import NewPoll from './components/NewPoll/NewPoll';
import PollPage from './components/PollPage/PollPage';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Dashboard from './components/Dashboard/Dashboard';
import StickNote from './components/StickNote/StickNote';
import { handleInitialData } from "./actions/initialData";
import { connect } from "react-redux";
import { LoginUrl, RootPathUrl, LeaderBoardUrl, Error404 } from './constant/path';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div className="container mx-auto py-4">
      {props.isLoggedIn && <NavBar />}
      <Routes>
        <Route path={LoginUrl} exact element={<Login />} />
        <Route path={RootPathUrl} exact element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path={LeaderBoardUrl} exact element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
        <Route path={Error404} exact element={<PageNotFound />} />
        {/* <Route path="/new" exact element={<NewPoll />} />
        <Route path="/pollpage" exact element={<PollPage />} />
        <Route path="/leaderboard" exact element={<Leaderboard />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/stick" exact element={<StickNote />} /> */}
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authSliceUser }) => ({
  isLoggedIn: !!authSliceUser,
});

export default connect(mapStateToProps)(App);