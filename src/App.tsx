import React, { FC, useEffect, useState } from 'react';
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

const App: FC = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    updateSticky();    
  }, []);

    
  window.addEventListener("scroll", () => {
    if (window.location.pathname.split(process.env.PUBLIC_URL)[1]?.length > 1)
      setStickyHeader(true);
    
    else
      window.pageYOffset > window.innerHeight - 5 ? setStickyHeader(true) : setStickyHeader(false); 
  });

  const updateSticky = () => {
    if (window.location.pathname.split(process.env.PUBLIC_URL)[1]?.length > 1)
      setStickyHeader(true);
    
    else
      window.pageYOffset > window.innerHeight - 5 ? setStickyHeader(true) : setStickyHeader(false); 
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderBar stickyHeader={stickyHeader} />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={() => <Home updateSticky={updateSticky} />} />
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
