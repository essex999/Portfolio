import {
	studiesTextContent,
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
		</>
	)
}
