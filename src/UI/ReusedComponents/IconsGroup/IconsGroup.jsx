import IconAxios from '../Icons/AxiosIcon'
import IconHtml from '../Icons/HtmlIcon'
import IconSass from '../Icons/IconSass'
import IconJavascript from '../Icons/JavaScriptIcon'
import NodeJsIcon from '../Icons/NodeJsIcon'
import IconReact from '../Icons/ReactIcon'
import ReactQueryIcon from '../Icons/ReactQueryIcon'
import ReduxIcon from '../Icons/ReduxIcon'
import styles from './IconsGroup.module.scss'

export const IconsGroup = () => {
	return (
		<div className={styles.inconsGroup}>
			<IconReact className={styles.icon} />
			<IconHtml className={styles.icon} />
			<IconSass className={styles.icon} />
			<IconJavascript className={styles.icon} />
			<IconAxios className={styles.icon} />
			<ReduxIcon className={styles.icon} />
			<ReactQueryIcon className={styles.icon} />
			<NodeJsIcon className={styles.icon} />
		</div>
	)
}
