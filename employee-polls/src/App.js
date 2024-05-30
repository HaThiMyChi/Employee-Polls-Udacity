import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Nav from './components/Home/Nav';
import NewPoll from './components/NewPoll/NewPoll';
import PollPage from './components/PollPage/PollPage';

function App() {
  return (
    <div className="container mx-auto py-4">
      {/* {<Nav />} */}
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Nav />} />
          <Route path="/new" exact element={<NewPoll />} />
          <Route path="/pollpage" exact element={<PollPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;