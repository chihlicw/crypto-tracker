import { Grid, GridItem, Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import {
	FaClock,
	FaDollarSign,
	FaChartLine,
	FaChartBar,
	FaArrowUp,
	FaHourglassEnd,
	FaCalendarDay,
	FaCalendarWeek,
} from 'react-icons/fa'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CoinSummary = ({ data, prices }) => {
	const CoinPrices = prices.map((coin) => Number(coin.Price).toFixed(2))
	/*
		Update format x/y-axis names
	*/
	const options = {
		title: {
			text: data.Coin + ' Price',
		},
		series: [
			{
				name: 'Price',
				data: CoinPrices,
			},
		],
	}
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
					<h1>{data.Coin}</h1>
					<List spacing={3}>
						<ListItem>
							<ListIcon as={FaDollarSign} /> Price (USD):{' '}
							{data.Price}
						</ListItem>
						<ListItem>
							<ListIcon as={FaClock} /> Recorded at:{' '}
							{data.recorded_at}
						</ListItem>
						<ListItem>
							<ListIcon as={FaChartLine} /> MarketCap:{' '}
							{data.MarketCap}
						</ListItem>
						<ListItem>
							<ListIcon as={FaChartBar} /> Supply: {data.Supply}
						</ListItem>
						<ListItem>
							<ListIcon as={FaArrowUp} /> Volume: {data.Volume}
						</ListItem>
						<ListItem>
							<ListIcon as={FaHourglassEnd} /> HourChange:{' '}
							{data.HourChange}
						</ListItem>
						<ListItem>
							<ListIcon as={FaCalendarDay} /> DayChange:{' '}
							{data.DayChange}
						</ListItem>
						<ListItem>
							<ListIcon as={FaCalendarWeek} /> WeekChange:{' '}
							{data.WeekChange}
						</ListItem>
					</List>
				</Box>
			</GridItem>
			<GridItem rowSpan={2} colSpan={1} bg='papayawhip'>
				<Box minW='50vw' maxW='50vw' minH='50vh' maxH='50vh'>
					put fake news here
				</Box>
			</GridItem>
			<GridItem rowSpan={2} bg='tomato'>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</GridItem>
		</Grid>
	)
}

export default CoinSummary
