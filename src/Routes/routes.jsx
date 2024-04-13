import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { AboutMe } from '../UI/Screens/AboutMe/AboutMe'
import { Contact } from '../UI/Screens/Contact/Contact'
import { Portfolio } from '../UI/Screens/Portfolio/Portfolio'
import { Resume } from '../UI/Screens/Resume/Resume'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App childComponent={AboutMe} />,
	},
	{
		path: '/aboutme',
		element: <App childComponent={AboutMe} />,
	},
	{
		path: '/resume',
		element: <App childComponent={Resume} />,
	},
	{
		path: '/portfolio',
		element: <App childComponent={Portfolio} />,
	},
	{
		path: '/contact',
		element: <App childComponent={Contact} />,
	},
])
