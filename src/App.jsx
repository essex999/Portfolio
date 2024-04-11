import { useState } from 'react'
import styles from './App.module.scss'
import { NavBar } from './UI/Component/NavBar/NavBar'
import catImage from './assets/neva-masquerade-royalty-free-image-1674509896.jpg'

export const App = ({ childComponent: ChildComponent }) => {
	const navButtons = ['About me', 'Resume', 'Portfolio', 'Contact']
	const [isScrollToBot, setIsScrollToBot] = useState(false)

	const handleSetDisplayHeader = cords => {
		if (window.innerWidth < 769) {
			cords === 0 ? setIsScrollToBot(false) : setIsScrollToBot(true)
		} else return
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div
					style={isScrollToBot ? { display: 'none' } : { display: 'flex' }}
					className={styles.header}
				>
					<div className={styles.basicUserInfo}>
						<h1 className={styles.text}>Cxxx</h1>
						<h2 className={styles.text}>Web Developer</h2>
					</div>
					<img className={styles.img} src={catImage} />
				</div>
				<div className={styles.page}>
					<NavBar navButtons={navButtons} />
					<main
						onScroll={e => {
							handleSetDisplayHeader(e.target.scrollTop)
						}}
						className={styles.mainContainer}
					>
						<ChildComponent />
					</main>
				</div>
			</div>
		</div>
	)
}
