import { createBrowserRouter } from 'react-router-dom'
import { AboutMe } from '../UI/Component/AboutMe/AboutMe'
import { MainPage } from '../UI/Component/MainPage/MainPage'
import { Resume } from '../UI/Component/Resume/Resume'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage childComponent={AboutMe} />,
	},
	{
		path: '/resume',
		element: <MainPage childComponent={Resume} />,
	},
])
