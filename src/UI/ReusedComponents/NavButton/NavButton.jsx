import { useState } from 'react'
import styles from './NavButton.module.scss'
export const NavButton = ({
	textContent,
	setSelectedButton,
	selectedButton,
}) => {
	const [isHover, setIsHover] = useState(false)
	const [currentTextContent, setcurrentTextContent] = useState('')
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				setcurrentTextContent(e.target.textContent)
				setSelectedButton(e.target.textContent)
			}}
			onMouseEnter={() => {
				setIsHover(true)
			}}
			onMouseLeave={() => {
				setIsHover(false)
			}}
			className={styles.navButtonGroup}
		>
			<button className={styles.navButton}>{textContent}</button>
			<div
				className={`${styles.underline} ${
					isHover && selectedButton !== currentTextContent ? styles.hover : ''
				} ${selectedButton === currentTextContent ? styles.clicked : ''}`}
			/>
		</form>
	)
}
