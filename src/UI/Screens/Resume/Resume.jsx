import {
	languagesTextContent,
	studiesTextContent,
	webDevSkillsTextContent,
	workExperienceTextContent,
} from '../../../const/const'
import { TextContainer } from '../../ReusedComponents/TextContainer/TextContainer'
export const Resume = () => {
	return (
		<>
			<TextContainer stickerText='Studies' textContent={studiesTextContent} />
			<TextContainer
				stickerText='Work Experience'
				textContent={workExperienceTextContent}
			/>
			<TextContainer
				stickerText='Web Development  Skills'
				textContent={webDevSkillsTextContent}
			/>
			<TextContainer
				stickerText='Languages'
				textContent={languagesTextContent}
			/>
		</>
	)
}
