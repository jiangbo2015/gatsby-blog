import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { FaGithub } from "react-icons/fa"
import { Box, Flex, Text } from "rebass/styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"

// js node 算法 python css react vue

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
 
`
const theme = {
    colors: {
        primary: "#ce0f67",
        gray: "#999",
        main: "#000",
    },
}

const Nav = (props) => (
    <Box
        fontSize={3}
        ml={4}
        color="gray"
        as={Link}
        sx={{
            "&:hover": {
                color: "primary",
            },
            ".active": {
                color: "primary",
            },
        }}
        {...props}
    ></Box>
)

export default ({ children }) => (
    <>
        <GlobalStyle />
        <Helmet></Helmet>
        <ThemeProvider theme={theme}>
            <Flex
                py={3}
                backgroundColor="#fff"
                px={3}
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 9,
                    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.08)",
                }}
            >
                <Flex flex="1" mx="auto" maxWidth="1000px">
                    <Link to="/">
                        <Text color="primary" fontSize={4}>
                            姜波
                        </Text>
                    </Link>
                    <Flex ml="auto" alignItems="center">
                        <Nav to="/categories" activeClassName="active">
                            分类
                        </Nav>
                        <Nav to="/about" activeClassName="active">
                            关于
                        </Nav>
                        <Nav href="https://github.com/" target="_blank">
                            <FaGithub size="20px" />
                        </Nav>
                    </Flex>
                </Flex>
            </Flex>
            <Box mx="auto" maxWidth="1000px" py={4} px={3}>
                {children}
            </Box>
        </ThemeProvider>
    </>
)
