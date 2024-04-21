import { TextContainer } from '../../ReusedComponents/TextContainer/TextContainer'

export const Resume = () => {
	const studiesTextContent = [
		'&#10148  College of Microelectronics and Computerized Engineering 2013-2017 <br> <small>Speciality -          Telecommunications</small>',

		'&#10148 Web Development in Online School <b> <a href="https://sky.pro/" target="new blank">SkyPro</a> </b>2022-2023 (12 month)',
	]

	const workExperienceTextContent = [
		'&#10148 Orange Store B2C Sales Administrator/Consultant 2018-2021 <br> <small> Responsibilities - Consultation on IT, GSM products, and Orange services, motivate and assessed subordinates knowledge within the store, maintained and arranged products according to standards.<small>',

		'&#10148  Dita Estfarm PC Operator (1C , Emails, MsOffice) 2021-Present <br> <small> Responsibilities - Operated using the 1C program, invoiced, maintained records, and dispensed medications to legal entities.</small>',
	]
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
