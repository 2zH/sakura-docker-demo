import * as React from 'react';
import styled from 'styled-components';
import Header from './components/Header'
import Navigation from './components/Navigation'

const AppContainer = styled.div`
  text-align: center;
`
const AppIntro = styled.p`
  font-size: large;
`
class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <Header />
        <Navigation />
        <AppIntro>
          <code>> process.stdin = 'Ok, That's do it.'</code>
        </AppIntro>
      </AppContainer>
    );
  }
}

export default App;
