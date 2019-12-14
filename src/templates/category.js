import React, { useContext } from "react"
import { Flex, Text, Box } from "rebass"
import styled, { ThemeContext } from "styled-components"

import Layout from "../components/Layout"
import { Link } from "gatsby"

const Title = styled(Flex)`
	font-size: 18px;
	font-weight: bold;
	padding: 20px;
	border-radius: 10px;
	border: 1px solid #eee;
	color: #000;
	align-items: center;
	justify-content: center;
	transition: all 0.6s;
	position: relative;
	&:hover {
		transition: all 0.6s;
		color: #fff;
		background: #ce0f67;
	}
`

function Category({ posts, post, category, ...others }) {
	const theme = useContext(ThemeContext)
	console.log(post)
	if (category) {
		return (
			<Flex flexDirection="column">
				<Text my="30px" fontSize="20px" color={theme.color.primary}>
					{category}
				</Text>
				{post.map(({ id, frontmatter }) => (
					<Link to={frontmatter.path}>
						<Flex
							key={id}
							mb="20px"
							color={theme.color.gray}
							justifyContent="space-between"
							sx={{
								"&:hover": {
									color: theme.color.primary
								}
							}}
						>
							{frontmatter.title}

							<Text>{frontmatter.date}</Text>
						</Flex>
					</Link>
				))}
			</Flex>
		)
	}
	return (
		<Flex flexWrap="wrap" maxWidth="800px" mx="auto">
			{Object.keys(posts).map((item, index) => (
				<Box key={index} ml="20px" mb="20px">
					<Link to={`/categories/${item}`}>
						<Title>
							<Text>{item}</Text>
							<Text
								ml="10px"
								fontSize="14px"
								sx={{
									position: "absolute",
									bottom: 0,
									right: 0
								}}
							>
								({posts[item].length})
							</Text>
						</Title>
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

// var arr = [10,9,8,7,6,5,4,3,2,1]

// 10
// 9，8
// 7，6，5
// 4，3，2，1

// for(var i = 1; i < 9; i++){
//     for(var j = 1; j < i; j++){

//     }
// }
