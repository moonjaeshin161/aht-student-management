import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CoursesDashboard from './Views/Courses/CoursesDashboard';
import AccountsDashBoard from './Views/Accounts/AccountsDashBoard';
import StudentsDashboard from './Views/Students/StudentsDashboard';


function App() {
  return (
    <Router>

      <div className="App">
        <h1>Welcome to AHT Student Management Web</h1>
      </div>

      <Switch>
        <Route path="/courses">
          <CoursesDashboard />
        </Route>
        <Route path="/accounts">
          <AccountsDashBoard />
        </Route>
        <Route path="/students">
          <StudentsDashboard />
        </Route>
        <Route path="/login">
          {/* Login */}
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
