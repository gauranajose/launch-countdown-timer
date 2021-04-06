import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Title from './components/Title/Title';
import Timer from './containers/Timer/Timer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Layout>
        <Title title="WE'RE LAUNCHING SOON"/>
        <Timer />
        <Footer />
      </Layout>
    );
  }
}

export default App;
