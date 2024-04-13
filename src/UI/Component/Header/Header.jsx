import { useEffect, useState } from 'react'
import avatar from '../../../assets/neva-masquerade-royalty-free-image-1674509896.jpg'
import IconFacebook from '../../ReusedComponents/Icons/FbIcon'
import IconGithub from '../../ReusedComponents/Icons/GitIcon'
import IconTelegram from '../../ReusedComponents/Icons/TelegramIcon'

import styles from './Header.module.scss'
export const Header = () => {
	const [isClasss, setIsClass] = useState(null)

	const [isShowMobileHeader, setShowMobileHeader] = useState(false)

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)
	}, [])
	useEffect(() => {
		if (windowWidth <= 550) {
			setShowMobileHeader(true)
		} else setShowMobileHeader(false)
	}, [windowWidth])

	return (
		<>
			{isShowMobileHeader ? (
				<div className={styles.header}>
					<img className={styles.img} src={avatar} />

					<div className={styles.headerAdditionalInfo}>
						<div className={styles.basicUserInfo}>
							<h1 className={styles.text}>Ceban Octavian</h1>
							<h2 className={styles.text}>Web Developer</h2>
						</div>
						<div className={styles.socialsContainer}>
							<IconFacebook className={styles.icon} />
							<IconGithub className={styles.icon} />
							<IconTelegram className={styles.icon} />
						</div>
					</div>
				</div>
			) : (
				<div className={styles.header}>
					<div className={`${styles.basicUserInfo} ${styles.visible}`}>
						<h1 className={styles.text}>Ceban Octavian</h1>
						<h2 className={styles.text}>Web Developer</h2>
					</div>
					<img className={styles.img} src={avatar} />
					<div className={`${styles.socialsContainer} ${styles.visible}`}>
						<IconFacebook className={styles.icon} />
						<IconGithub className={styles.icon} />
						<IconTelegram className={styles.icon} />
					</div>
				</div>
			)}
		</>
	)
}
