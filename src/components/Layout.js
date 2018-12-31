import React from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { Flex } from '@rebass/grid'
import { FaGithub, FaHome, FaUser, FaPen, FaTags } from 'react-icons/fa'
import Link from '../components/Link'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: georgia, serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  html,body,#___gatsby{
    height: 100%;
  }
 

`

const Root = styled(Flex)`
    background: #fbfafc;
    flex-direction: column;
    height: 100%;
`

const Header = styled(Flex)`
    height: 50px;
    border-bottom: 1px solid #eee;
    justify-content: center;
    background: #2196f3;
`
const Nav = styled(Flex)`
    margin-left: 20px;
    cursor: pointer;
    color: #fff;
    &:hover {
        color: #eaeaea;
        transition: color 0.3s;
    }
`
const NavWrap = styled(Flex)`
    width: 1000px;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`
const Main = styled(Flex)`
    width: 1000px;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 50px;
    min-height: 600px;
`

const NavGithub = styled(Nav)`
    position: absolute;
    right: 30px;
    align-self: center;
`
const LogoWrap = styled(Flex)`
    position: absolute;
    align-self: center;
    left: 0;
    color: #fff;
    font-size: 30px;
`

export default ({ children }) => (
    <Root>
        <GlobalStyle />
        <Header>
            <NavWrap>
                <LogoWrap>
                    <Link to="/">Bob Jiang</Link>
                </LogoWrap>
                <Nav>
                    <Link to="/about">About</Link>
                </Nav>
                <Nav>
                    <Link to="/categories">Categories</Link>
                </Nav>
                <Nav>
                    <Link to="/search">Search</Link>
                </Nav>
                <Nav>
                    <Link to="/contact">Contact</Link>
                </Nav>
            </NavWrap>
            <NavGithub>
                <FaGithub />
            </NavGithub>
        </Header>
        <Main>{children}</Main>
    </Root>
)
