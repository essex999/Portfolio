import { useState } from 'react'
import { NavButton } from '../../ReusedComponents/NavButton/NavButton'
import styles from './NavBar.module.scss'
export const NavBar = ({ navButtons }) => {
	const [selectedButton, setSelectedButton] = useState(null)

	return (
		<nav className={styles.navigation}>
			{navButtons.map((el, index) => (
				<NavButton
					key={index}
					textContent={el}
					setSelectedButton={setSelectedButton}
					selectedButton={selectedButton}
				/>
			))}
		</nav>
	)
}
