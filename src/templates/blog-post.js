import "prismjs/themes/prism-solarizedlight.css";
import React from "react";
import Helmet from "react-helmet";
import { Box, Flex, Heading } from "rebass/styled-components";
import DateAndCategory from '../components/DateAndCategory';
import Layout from "../components/Layout";
import PrevAndNext from '../components/PrevAndNext';


export default props => {
	const { data, pageContext } = props
	const { markdownRemark: post } = data
	const { next, prev } = pageContext
	const { category, date, title } = post.frontmatter
	return (
		<Layout>
			<Flex
				flexDirection="column"
				p={[5]}
				bg="white"
				mt={[2]}
				sx={{
					borderRadius: "10px",
					boxShadow: "0px 0px 10px rgba(25, 17, 34, 0.05)"
				}}
			>
				<Helmet title={`姜波的博客 - ${post.frontmatter.title}`} />
				<Heading textAlign="center">{title}</Heading>
				<DateAndCategory category={category} date={date}></DateAndCategory>
				<Box mt={[4]} dangerouslySetInnerHTML={{ __html: post.html }} />
				<PrevAndNext prev={prev} next={next}></PrevAndNext>
			</Flex>
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
