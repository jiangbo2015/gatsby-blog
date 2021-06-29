import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Flex, Text, Box } from "rebass"
import { graphql } from 'gatsby'

const Code = styled("span")`
	color: #fff;
	background: rgba(206, 15, 103, 1);
	padding: 4px 8px;
	border-radius: 5px;
	margin: 0 5px;
	font-size: 16px;
	display: inline-block;
	margin-bottom: 5px;
`
const datas = {
	front: "Web/Electron/ReactNative/SSR/小程序/...",
	backend: "Mongodb/Koa/Mongoose/...",
	python: "keras/tensorflow/numpy/matplotlib/pandas/..."
}
export default ({data}) => {
	console.log(data, 'data')
	return (
		<Layout>
			<Box px={["20px", 0]}>
				<Box>
					<Text as="h2">关于本站</Text>
					<Box mt="10px">
						<Text>
							使用<Code>gatsby</Code>搭建
						</Text>
						<Text>想看看搭建过程？戳这里</Text>
					</Box>
				</Box>
				<Box mt="20px">
					<Flex alignItems="center">
						<Text as="h2">关于我</Text>
						<Text mb="20px">&lt;前端工程师&gt;</Text>
					</Flex>
					<Box mt="10px">
						<Box mb="30px">
							<Text width={[1, 1, "auto"]}>前端技术栈是&lt;React&gt;</Text>
							<Flex mt="10px" flexWrap="wrap">
								{datas.front.split("/").map((item, index) => (
									<Code key={index}>{item}</Code>
								))}
							</Flex>
						</Box>
						<Box mb="30px">
							<Text>后端技术栈是&lt;Node&gt;</Text>
							<Flex mt="10px" flexWrap="wrap">
								{datas.backend.split("/").map((item, index) => (
									<Code key={index}>{item}</Code>
								))}
							</Flex>
						</Box>
						<Box>
							<Text>其他技术栈是&lt;Python&gt;</Text>
							<Flex mt="10px" flexWrap="wrap">
								{datas.python.split("/").map((item, index) => (
									<Code key={index}>{item}</Code>
								))}
							</Flex>
						</Box>
					</Box>
				</Box>
				<Box mt="20px">
					<Text as="h2">联系我</Text>
					<Box mt="10px">reactbo@gmail.com</Box>
				</Box>
			</Box>
		</Layout>
	)
}


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`