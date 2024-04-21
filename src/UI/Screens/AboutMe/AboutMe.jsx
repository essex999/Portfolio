import { aboutMeQualities, aboutMeTextContent } from '../../../const/const'
import { IconsGroup } from '../../ReusedComponents/IconsGroup/IconsGroup'
import { TextContainer } from '../../ReusedComponents/TextContainer/TextContainer'
export const AboutMe = () => {
	return (
		<>
			<TextContainer
				stickerText={'General'}
				textContent={aboutMeTextContent}
				ChildComponent={IconsGroup}
			/>
			<TextContainer stickerText={'Qualities'} textContent={aboutMeQualities} />
		</>
	)
}
