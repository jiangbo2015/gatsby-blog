import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ListItem from '../components/ListItem';
import Paginate from '../components/Paginate';



export default props => {
	const { group, first, index, last } = props.pageContext

	return (
		<Layout>
			{group.map(({ node: post }, index) => {
				return (
					<Link to={post.frontmatter.path} key={index}>
						<ListItem
							title={post.frontmatter.title}
							expert={post.excerpt}
							category={post.frontmatter.category}
							date={post.frontmatter.date}
						></ListItem>
					</Link>
				)
			})}
			<Paginate last={last} first={first} index={index}></Paginate>
		</Layout>
	)
}

export const blogListQuery = graphql`
	query blogListQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
