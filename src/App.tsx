import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import HeaderBar from './Components/HeaderBar';
import GlobalStyle from './Shared/GlobalStyle';
import Error404 from './Shared/Error404';
import MetricTest from './Components/MetricTest';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/metric`} component={MetricTest} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
