import React, { memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import HomeComponent from "./home.component";
import QuoteComponent from "./quote.component";

// eslint-disable-next-line react/display-name
const Header = memo(() => (
  <Router>
    <main>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/calculator">Calculator</a>
          </li>
          <li>
            <a href="/quote">Quote</a>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/calculator" component={App} />
        <Route path="/quote" component={QuoteComponent} />
      </Switch>
    </main>
  </Router>
));

export default Header;
