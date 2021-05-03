import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div
				className={styles.container}
				style={{ overflowX: 'hidden', overflowY: 'hidden' }}
			>
				<main
					style={{
						maxWidth: '100vw',
						minWidth: '100vw',
						minHeight: '100vh',
						maxHeight: '100vh',
						overflowX: 'hidden',
						overflowY: 'hidden',
					}}
				>
					{/* <Header /> */}
					{children}
				</main>
			</div>
		</>
	)
}

export default Layout
