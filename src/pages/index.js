import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Box, Text, Heading, Flex } from "rebass/styled-components"
import { FaTag } from "react-icons/fa"
import DateAndCategory from "../components/DateAndCategory"

export default ({ data }) => {
    const { pageInfo, edges } = data.allMarkdownRemark
    return (
        <Layout>
            <Flex mb={3} alignItems="center">
                <Heading>最近10条 </Heading>
                <Text>(共{pageInfo.totalCount}条)</Text>
            </Flex>
            {edges.map(({ node: { id, frontmatter } }) => (
                <Box key={id} mb={4}>
                    <Text
                        as={Link}
                        to={frontmatter.path}
                        fontSize={3}
                        sx={{
                            "&:hover": {
                                color: "primary",
                            },
                        }}
                    >
                        {frontmatter.title}
                    </Text>
                    <DateAndCategory
                        category={frontmatter.category}
                        date={frontmatter.date}
                    ></DateAndCategory>
                </Box>
            ))}
        </Layout>
    )
}

export const queryHome = graphql`
    query home {
        allMarkdownRemark(limit: 10) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY-MM-DD")
                        path
                        category
                    }
                }
            }
            pageInfo {
                totalCount
            }
        }
    }
`
