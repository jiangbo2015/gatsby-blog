import React, { useContext } from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { Flex, Text } from "rebass"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import Layout from "../components/Layout"
import "prismjs/themes/prism-solarizedlight.css"
// import "prismjs/themes/prism-coy.css"
import { DateInfo } from "../pages/index"

const Container = styled(Flex)`
	box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
	padding: 60px 50px;
	margin-top: 50px;
	background: #fff;
	flex-direction: column;
	border-radius: 5px;
	/* pre[class*="language-"] > code {
		border-left: 10px solid #d6568f;
	} */
	/* box-shadow: -1px 0px 0px 0px #d7558f, 0px 0px 0px 1px #dfdfdf; */
`
const Title = styled(Flex)`
	color: #000;
	font-size: 28px;
	align-self: center;
`

const Navigation = styled(Flex)`
	color: blue;
	font-size: 20px;
	margin-top: 30px;
	justify-content: space-between;
`
const Content = styled("div")`
	font-size: 18px;
	color: #333;
`

const OverflowText = styled(Text)`
	width: 300px;
`

function Template(props) {
	const { data, pageContext } = props
	const { markdownRemark: post } = data
	const { next, prev } = pageContext
	const { category, date, title } = post.frontmatter
	const theme = useContext(ThemeContext)
	return (
		<Container>
			<Helmet title={`姜波的博客 - ${post.frontmatter.title}`} />
			<Text as="h2" fontSize="28px" color={theme.color.main} textAlign="center">
				{title}
			</Text>
			<Flex justifyContent="flex-end" py="30px">
				<DateInfo category={category} date={date} theme={theme} />
			</Flex>

			<Content dangerouslySetInnerHTML={{ __html: post.html }} />

			<Flex
				justifyContent="space-between"
				color={theme.color.primary}
				mt="30px"
			>
				{prev ? (
					<Link to={prev.frontmatter.path}>
						<Flex alignItems="center">
							<FaArrowLeft />
							<Text maxWidth="300px">{prev.frontmatter.title}</Text>
						</Flex>
					</Link>
				) : (
					<span></span>
				)}
				{next && (
					<Link to={next.frontmatter.path}>
						<Flex alignItems="center">
							<Text maxWidth="300px">{next.frontmatter.title}</Text>
							<FaArrowRight />
						</Flex>
					</Link>
				)}
			</Flex>
		</Container>
	)
}

export default props => {
	return (
		<Layout>
			<Template {...props} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "YYYY-MM-DD")
				path
				category
				title
			}
		}
	}
`
