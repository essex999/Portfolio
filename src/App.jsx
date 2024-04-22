import styles from './App.module.scss'
import { Header } from './UI/Component/Header/Header'
import { NavBar } from './UI/Component/NavBar/NavBar'

export const App = ({ childComponent: ChildComponent }) => {
	const navButtons = ['About me', 'Resume', 'Portfolio', 'Contact']

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<Header />
				<div className={styles.page}>
					<NavBar navButtons={navButtons} />
					<main className={styles.mainContainer}>
						<ChildComponent />
					</main>
				</div>
			</div>
		</div>
	)
}
