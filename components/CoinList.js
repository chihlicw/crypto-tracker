import CoinItem from './CoinItem'
import coinStyles from '../styles/Coin.module.css'

const CoinList = ({ coins }) => {
	return (
		<div className={coinStyles.grid}>
			{coins.map((coin) => (
				<CoinItem coin={coin} />
			))}
			<h1>{coins.id}</h1>
		</div>
	)
}

export default CoinList
