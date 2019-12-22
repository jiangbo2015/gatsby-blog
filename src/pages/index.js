import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { Flex, Text, Box } from "rebass"
import { FaTag } from "react-icons/fa"

import Layout from "../components/Layout"

const List = styled(Flex)`
	box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;

	background: #fff;
	flex-direction: column;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		transform: translateY(-3px);
		box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
		transition: all 0.3s;
	}
`

export const DateInfo = ({ theme, category, date }) => (
	<>
		<Link to={`categories/${category}`}>
			<Flex fontSize="16px" color={theme.color.primary} alignItems="center">
				<FaTag size="14px"></FaTag>
				<Text ml="5px">{category}</Text>
			</Flex>
		</Link>
		<Box mx="10px">/</Box>
		<Text fontSize="16px" color={theme.color.gray}>
			{date}
		</Text>
	</>
)

function Index(props) {
	const { data } = props
	const theme = useContext(ThemeContext)
	console.log(theme)
	const { edges: posts } = data.allMarkdownRemark
	return (
		<>
			{posts
				.filter(post => post.node.frontmatter.title.length > 0)
				.map(({ node: post }, index) => {
					return (
						<Link to={post.frontmatter.path} key={index}>
							<List key={post.id} p="50px" mb="60px">
								<Text fontSize="28px" color={theme.color.main}>
									{post.frontmatter.title}
								</Text>

								<Box fontSize="20px" color={theme.color.gray} py="20px">
									{post.excerpt}
								</Box>
								<Flex>
									<DateInfo
										theme={theme}
										category={post.frontmatter.category}
										date={post.frontmatter.date}
									></DateInfo>
								</Flex>
							</List>
						</Link>
					)
				})}
		</>
	)
}

export default props => {
	return (
		<Layout>
			<Index {...props} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 200)
					id
					frontmatter {
						title
						date(formatString: "YYYY-MM-DD")
						path
						category
					}
				}
			}
		}
	}
`
