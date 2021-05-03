import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'

const CoinSummary = ({ data }) => {
	return (
		<Grid
			minH='100%'
			p='10px'
			templateRows='repeat(2, 1fr)'
			templateColumns='repeat(2, 1fr)'
			gap={4}
		>
			<GridItem rowSpan={1} bg='tomato'>
				<Box minW='50vw' maxW='50vw' minH='50vh' maxH='50vh'>
					prices
				</Box>
			</GridItem>
			<GridItem rowSpan={2} colSpan={1} bg='papayawhip'>
				<Box minW='50vw' maxW='50vw' minH='50vh' maxH='50vh'>
					put fake news here
				</Box>
			</GridItem>
			<GridItem rowSpan={2} bg='tomato'>
				graphs
			</GridItem>
		</Grid>
	)
}

export default CoinSummary
