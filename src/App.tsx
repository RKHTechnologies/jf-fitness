import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import HeaderBar from './Components/HeaderBar';
import GlobalStyle from './Shared/GlobalStyle';
import Error404 from './Shared/Error404';
import MetricTest from './Components/MetricTest';
import OnlineCoaching from './Pages/OnlineCoaching';
import OnlinePrograms from './Pages/OnlinePrograms';
import EBooks from './Pages/EBooks';
// import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/onlinecoaching`} component={OnlineCoaching} />
          <Route exact path={`${process.env.PUBLIC_URL}/onlineprograms`} component={OnlinePrograms} />
          <Route exact path={`${process.env.PUBLIC_URL}/ebooks`} component={EBooks} />
          {/* <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} /> */}
          <Route exact path={`${process.env.PUBLIC_URL}/metric`} component={MetricTest} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
