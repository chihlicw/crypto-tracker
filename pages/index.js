import CoinList from '../components/CoinList'

export default function Home({ coins }) {
  var array = [coins]
  console.log(array)
  return (
    <div>
      <head>
        <title>Crypto Tracker</title>
      </head>
      <CoinList coins={array} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://cryptoviz.herokuapp.com/latest/Bitcoin?access_token=c7f02dce-d489-444a-a588-41d5287f2451&fbclid=IwAR0NKDur6-XLAZBlmXKj3CbTtP7ZgA2DPTPky-2eTlerz0cEwa1_iKjGWsI`
  )
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const coins = await res.json()

  return {
    props: {
      coins,
    },
  }
}
