import ReactHtmlParser from 'react-html-parser'
import styles from './TextContainer.module.scss'

export const TextContainer = ({ stickerText, textContent, ChildComponent }) => {
	return (
		<div className={styles.textContainer}>
			<div className={styles.sticker}>
				<p className={styles.stickerText}>{stickerText}</p>
			</div>
			<div className={styles.pBox}>
				{textContent.map((el, index) => (
					<p key={index} className={styles.textContent}>
						{ReactHtmlParser(el)}
					</p>
				))}
			</div>

			{ChildComponent ? <ChildComponent /> : ''}
		</div>
	)
}
