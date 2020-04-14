import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import Banner from './components/banner';
// import PatientDB from './components/patientdb';
import DeepDive from './components/deepdive';
import GovtAdvisory from './components/govtAdvisory';
// import Resources from './components/resources';
/* import PatientDB from './components/patientdb';*/

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    // {
    //   pageLink: '/demographics',
    //   view: PatientDB,
    //   displayName: 'Demographics',
    //   animationDelayForNavbar: 0.3,
    // },
    {
      pageLink: '/govtAdvisory',
      view: GovtAdvisory,
      displayName: 'Governments Advisory',
      animationDelayForNavbar: 0.3,
    },
    {
      pageLink: '/deepdive',
      view: DeepDive,
      displayName: 'Deep Dive',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'About',
      animationDelayForNavbar: 0.5,
    },
    // {
    //   pageLink: '/essentials',
    //   view: Resources,
    //   displayName: 'Essentials',
    //   animationDelayForNavbar: 0.7,
    // },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="https://www.covid19india.org | Coronavirus cases live dashboard"
        />*/}

        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a
            href="https://github.com/covid19india"
            target="_blank"
            rel="noopener noreferrer"
          >
            COVID19Indian Tracker
          </a>
          <h2>#IndiaFightsCorona COVID-19 #StayAlertStaySafe</h2>
        </div>

        <a
          href="https://github.com/covid19india/covid19india-react"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>

        <a
          href="https://github.com/covid19india/covid19india-react"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>Parent Refrence Open Sourced on GitHub</span>
        </a>

        <a
          className="button excel"
          href="https://bit.ly/patientdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Database />
          <span>Parent Refrence Crowdsourced Patient Database&nbsp;</span>
        </a>
        <a
          href="https://twitter.com/AvadhMaurya"
          target="_blank"
          rel="noopener noreferrer"
          className="button twitter"
          style={{justifyContent: 'center'}}
        >
          <Icon.Twitter />
          <span>Connect me on Twitter</span>
        </a>
        <a
          href="https://linkedin.com/in/ramavadhmaurya"
          className="button telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.MessageCircle />
          <span>Join me on LinkedIn to Collaborate and Contribute!</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
