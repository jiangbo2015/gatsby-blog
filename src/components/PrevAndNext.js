import { Link } from "gatsby";
import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Flex, Text } from "rebass/styled-components";

export default ({prev, next}) => (
	<Flex justifyContent="space-between" color="primary" mt="30px">
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
)