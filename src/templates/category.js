import { Link } from "gatsby";
import React from "react";
import { Box, Flex, Heading, Text } from "rebass/styled-components";
import Categories from '../components/Categories';
import Layout from "../components/Layout";




function Category({ posts, post, category,}) {
	if (category) {
		return (
			<Flex flexDirection="column">
				<Heading my={[2]} color="primary">
					{category}
				</Heading>
				{post.map(({ id, frontmatter }) => (
					<Link to={frontmatter.path}>
						<Flex
							key={id}
							my={[2]}
							color="gray"
							justifyContent="space-between"
							sx={{
								transition: "all 0.6s",
								"&:hover": {
									color: "primary",
									transition: "all 0.6s"
								}
							}}
						>
							<Box>{frontmatter.title}</Box>
							<Text>{frontmatter.date}</Text>
						</Flex>
					</Link>
				))}
			</Flex>
		)
	}
	return (
		<Flex flexWrap="wrap" mx="auto">
			{Object.keys(posts).map((item, index) => (
				<Box key={index} m={[3]}>
					<Link to={`/categories/${item}`}>
						<Categories item={item} length={posts[item].length}></Categories>
					</Link>
				</Box>
			))}
		</Flex>
	)
}

export default function TagsTemplate(props) {
	const { pageContext } = props
	return (
		<Layout {...props}>
			<Category {...pageContext} />
		</Layout>
	)
}

