import CoinSummary from '../../../components/CoinSummary'

const coin = ({ coin, prices }) => {
	
	return (
		<>
			<CoinSummary data={coin.data} prices={prices.data}/>
		</>
	)
}

export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://cryptoviz.herokuapp.com/latest/Bitcoin?access_token=c7f02dce-d489-444a-a588-41d5287f2451&fbclid=IwAR0NKDur6-XLAZBlmXKj3CbTtP7ZgA2DPTPky-2eTlerz0cEwa1_iKjGWsIZZ${context.params.id}`
	)

	const coin = await res.json()

	const res2 = await fetch (
		`https://cryptoviz.herokuapp.com/all/Bitcoin?access_token=c7f02dce-d489-444a-a588-41d5287f2451&fbclid=IwAR20Ctshq3cf4CmOjNigyw5NK1LSpSW2hagCrQmJBgPc0MMSyEWiV1ve7bI`
	)

	const prices = await res2.json()

	return {
		props: {
			coin,
			prices,
		},
	}
}

export const getStaticPaths = async () => {
	const res = await fetch(
		`https://cryptoviz.herokuapp.com/latest/Bitcoin?access_token=c7f02dce-d489-444a-a588-41d5287f2451&fbclid=IwAR0NKDur6-XLAZBlmXKj3CbTtP7ZgA2DPTPky-2eTlerz0cEwa1_iKjGWsI`
	)

	const coins = await res.json()

	var array = [coins]

	const Coins = array.map((coin) => coin.data.Coin)
	const paths = Coins.map((coin) => ({ params: { id: coin.toString() } }))

	return {
		paths,
		fallback: false,
	}
}

export default coin
