import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { FaGithub, FaTag, FaClock } from 'react-icons/fa'

import Link from '../components/Link'
import Layout from '../components/Layout'

const List = styled(Flex)`
    box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
    padding: 80px 50px;
    margin-top: 50px;
    background: #fff;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
        box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
        transition: all 0.3s;
    }
`

const Title = styled(Flex)`
    color: #000;
    font-size: 28px;
`
const Category = styled(Flex)`
    padding: 5px 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    color: #666;
    align-items: center;
    font-size: 20px;
    svg {
        margin-right: 5px;
        color: #666;
    }
`
const Slug = styled('span')`
    margin: 0 10px;
`
const Date = styled(Flex)`
    color: #666;
    font-size: 20px;
    svg {
        margin-right: 5px;
        color: #666;
    }
`
const Content = styled(Flex)`
    color: #999;
    font-size: 20px;
    margin: 20px 0;
`

export const DateInfo = ({ category, date, ...props }) => (
    <Flex alignItems="center" mt="20px" {...props}>
        <Link to={`/categories/${category}`}>
            <Category>
                <FaTag />
                {category}
            </Category>
        </Link>
        <Slug>/</Slug>
        <Date>
            <FaClock />
            {date}
        </Date>
    </Flex>
)

export default function Index(props) {
    const { data } = props
    const { edges: posts } = data.allMarkdownRemark
    return (
        <Layout>
            {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                        <Link to={post.frontmatter.path}>
                            <List key={post.id}>
                                <Title>{post.frontmatter.title}</Title>

                                <Content>{post.excerpt}</Content>
                                <DateInfo
                                    category={post.frontmatter.category}
                                    date={post.frontmatter.date}
                                />
                            </List>
                        </Link>
                    )
                })}
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
