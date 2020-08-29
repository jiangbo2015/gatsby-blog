import React from "react";
import { Box, Flex, Heading } from "rebass/styled-components";
import styled from "styled-components";
import DateAndCategory from "./DateAndCategory";

const List = styled(Flex)`
	box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
	background: #fff;
	flex-direction: column;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		transform: translateY(-3px);
		box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
		transition: all 0.3s;
	}
`
export default ({ title, expert, category, date }) => (
	<List p={5} mb={4}>
		<Heading color="primary">{title}</Heading>
		<Box color="gray" mt={[3]}>
			{expert}
		</Box>
        <DateAndCategory category={category} date={date}></DateAndCategory>
	</List>
)
