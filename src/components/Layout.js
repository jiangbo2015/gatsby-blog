import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { FaGithub } from "react-icons/fa";
import { Box, Flex, Text } from "rebass/styled-components";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

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
  html,body,#___gatsby{
    height: 100%;
  }
 
`
const theme = {
	colors: {
		primary: "#ce0f67",
		gray: "#999",
		main: "#000"
	}
}

const Nav = styled(Box)`
	font-weight: bold;
	font-size: 20px;
	color: #999;
	transition: all 0.6s;
	&:hover {
		color: ${theme.colors.primary};
		transition: all 0.6s;
	}
	.active {
		color: ${theme.colors.primary};
	}
`
const Name = styled(Text)`
	font-size: 26px;
	font-weight: bold;
	text-shadow: 1px 1px 0 #e4f1ff;
`

export default ({ children }) => (
	<>
		<GlobalStyle />
		<Helmet></Helmet>
		<ThemeProvider theme={theme}>
			<Flex
				py="20px"
				backgroundColor="#fff"
				px="20px"
				sx={{
					position: "sticky",
					top: 0,
					zIndex: 9,
					boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.08)"
				}}
			>
				<Flex flex="1" mx="auto" maxWidth="1000px">
					<Link to="/">
						<Name color={theme.colors.primary}>姜波</Name>
					</Link>
					<Flex ml="auto" alignItems="center">
						<Nav ml="24px">
							<Link to="/categories" activeClassName="active">
								分类
							</Link>
						</Nav>
						<Nav ml="24px">
							<Link to="/about" activeClassName="active">
								关于
							</Link>
						</Nav>
						<Nav ml="24px">
							<a href="https://github.com/" target="_blank">
								<Flex>
									<FaGithub size="20px" />
								</Flex>
							</a>
						</Nav>
					</Flex>
				</Flex>
			</Flex>
			<Box mx="auto" maxWidth="1000px" py="50px">
				{children}
			</Box>
		</ThemeProvider>
	</>
)
