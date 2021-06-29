import { Link } from "gatsby"
import React from "react"
import { FaTag } from "react-icons/fa"
import { Box, Flex, Text } from "rebass/styled-components"

export default ({ category, date }) => (
    <Flex mt={2} alignItems="center">
        <Text fontSize={2} color="gray">
            {date}
        </Text>
        <Box mx={2} as="span">
            |
        </Box>
        <Flex
            fontSize={2}
            color="primary"
            alignItems="center"
            as={Link}
            to={`/categories/${category}`}
        >
            <FaTag fontSize="14px"></FaTag>
            <Text ml={1}>{category}</Text>
        </Flex>
    </Flex>
)
