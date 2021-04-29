import Link from 'next/Link'
import coinStyles from '../styles/Coin.module.css'

const CoinItem = ({ coin }) => {
  return (
    <Link href={`/coin/${coin.data.id}`}>
      <a className={coinStyles.card}>
        <h3>{coin.data.Coin}&rarr;</h3>
      </a>
    </Link>
  )
}

export default CoinItem
