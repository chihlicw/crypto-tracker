import Link from 'next/link'
import coinStyles from '../styles/Coin.module.css'

const CoinItem = ({ coin }) => {
	return (
		<Link href={`/coin/${coin.data.Coin}`}>
			<a className={coinStyles.card}>
				<h3>{coin.data.Coin}&rarr;</h3>
			</a>
		</Link>
	)
}

export default CoinItem
