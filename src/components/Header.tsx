import * as React from 'react'
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`
const AppTitle = styled.h1`
  font-size: 1.5em;
`
class Header extends React.Component {
  public render() {
    return (
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>TAUGOCAUCI</AppTitle>
      </AppHeader>
    )
  }
}

export default Header