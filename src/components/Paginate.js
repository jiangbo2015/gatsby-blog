import { Link } from "gatsby";
import React from "react";
import { Flex, Text } from "rebass/styled-components";

export default ({ first, last, index }) => (
	<Flex justifyContent="center">
		{!first && (
			<Link to={`/${index - 1 === 1 ? "" : index - 1}`}>
				<Text color="primary" fontSize={3}>
					上一页
				</Text>
			</Link>
		)}
		{!last && (
			<Link to={`/${index + 1}`}>
				<Text ml={!first ? "20px" : 0} color="primary" fontSize={3}>
					下一页
				</Text>
			</Link>
		)}
	</Flex>
)
