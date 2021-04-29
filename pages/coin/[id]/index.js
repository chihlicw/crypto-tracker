import Link from 'next/Link'

const coin = ({ coin }) => {
  return (
    <>
      <h1>{coin.data.Coin}</h1>
      <p>Recorded at: {coin.data.recorded_at}</p>
      <p>MarketCap: {coin.data.MarketCap}</p>
      <p>Price: {coin.data.Price}</p>
      <p>Supply: {coin.data.Supply}</p>
      <p>Volume: {coin.data.Volume}</p>
      <p>HourChange: {coin.data.HourChange}</p>
      <p>DayChange: {coin.data.DayChange}</p>
      <p>WeekChange: {coin.data.WeekChange}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://cryptoviz.herokuapp.com/latest/Bitcoin?access_token=c7f02dce-d489-444a-a588-41d5287f2451&fbclid=IwAR0NKDur6-XLAZBlmXKj3CbTtP7ZgA2DPTPky-2eTlerz0cEwa1_iKjGWsIZZ${context.params.id}`
  )

  const coin = await res.json()

  return {
    props: {
      coin,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://cryptoviz.herokuapp.com/latest/Bitcoin?access_token=c7f02dce-d489-444a-a588-41d5287f2451&fbclid=IwAR0NKDur6-XLAZBlmXKj3CbTtP7ZgA2DPTPky-2eTlerz0cEwa1_iKjGWsI`)

  const coins = await res.json()

//   const ids = coins.map((coin) => coin.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  var array = [coins]
  const ids = array.map((coin) => coin.data.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default coin
