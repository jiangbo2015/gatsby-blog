import { Link } from 'gatsby';
import React from 'react';
import { FaTag } from 'react-icons/fa';
import { Box, Flex, Text } from "rebass/styled-components";



export default  ({ category, date }) => (
	<Flex mt={[3]}>
		<Link to={`/categories/${category}`}>
			<Flex fontSize="16px" color="primary" alignItems="center">
				<FaTag size="14px"></FaTag>
				<Text ml="5px">{category}</Text>
			</Flex>
		</Link>
		<Box mx="10px">/</Box>
		<Text fontSize="16px" color="gray">
			{date}
		</Text>
	</Flex>
)