import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Crypto</span> Tracker
      </h1>
      <p className={headerStyles.description}>
        We follow Captain Elon to the Moon!
      </p>
    </div>
  )
}

export default Header
