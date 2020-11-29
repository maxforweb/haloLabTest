
import React from "react";
import { hot } from 'react-hot-loader/root';

import { HomePage } from 'pages';

class App extends React.Component {
  render() {
    return(
      <HomePage />
    )
  }
}

export default hot(App);
