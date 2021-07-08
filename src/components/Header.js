import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const Header = memo(() => (
  <main>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </main>
));

export default Header;
