import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/*  BrowserRouter expext only one nested element. Start w/ a div before adding routes */}
        <div>
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
