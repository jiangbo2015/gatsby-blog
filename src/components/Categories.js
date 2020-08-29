import React from "react";
import { Flex, Text } from "rebass/styled-components";

export default ({ item, length }) => (
	<Flex
		py={[3]}
		px={[4]}
		color="black"
		alignItems="center"
		justifyContent="center"
		sx={{
			transition: "all 0.6s",
			border: "1px solid #eee",
			borderRadius: "10px",
			position: "relative",
			"&:hover": {
				color: "white",
				bg: "primary",
				transition: "all 0.6s"
			}
		}}
	>
		<Text>{item}</Text>
		<Text
			fontSize="14px"
			sx={{
				position: "absolute",
				bottom: [1],
				right: [1]
			}}
		>
			({length})
		</Text>
	</Flex>
)
