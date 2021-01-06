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
import EBooks from './Pages/E-Books/EBooks';
import EBook from './Pages/E-Books/EBook';
import ContactPage from './Pages/ContactPage';
import InfoOverlay from './Shared/InfoOverlay';

const App: FC = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayText, setOverlayText] = useState("");

  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    updateSticky();    
    checkParams();
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


  const checkParams = () => {
    debugger;
    if (params.has('success'))
      hasSuccess();

    if (params.has('cancel'))
      hasCancel();
  }

  const hasSuccess = () => {
    console.log("Successful transaction. Congrats.");
    setOverlayOpen(true);
    setOverlayText("Purchase Successful. Your reciept will be with you shortly - and we will send over your PDF E-Book via email within 48 hours");
  }

  const hasCancel = () => {
    console.log("Transaction cancelled.");
    setOverlayOpen(true);
    setOverlayText("Transaction Cancelled. Please get in contact if you're having any issues or would like more information about any of our products");
  }


  return (
    <>
      <Router>
        <ScrollToTop />
        <InfoOverlay open={overlayOpen} close={() => setOverlayOpen(false)} text={overlayText} />
        <HeaderBar stickyHeader={stickyHeader} />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={() => <Home updateSticky={updateSticky} />} />
          <Route exact path={`${process.env.PUBLIC_URL}/onlinecoaching`} component={OnlineCoaching} />
          <Route exact path={`${process.env.PUBLIC_URL}/onlineprograms`} component={OnlinePrograms} />
          <Route exact path={`${process.env.PUBLIC_URL}/ebooks`} component={EBooks} />
          <Route exact path={`${process.env.PUBLIC_URL}/ebooks/:ebook`} component={EBook} />
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/metric`} component={MetricTest} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
