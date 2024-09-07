import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigation } from './components/pageSections/navigation/Navigation'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { Projects } from './components/pageSections/navigation/projects/Projects'
import { ContactFooter } from './components/pageSections/contact/ContactFooter'
import { AboutMe } from './components/pageSections/aboutMe/AboutMe'
import { Resume } from './components/pageSections/resume/Resume'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='light'>
			<section className='flex flex-col items-center gap-10 content-center w-full'>
				<Navigation />
				<AboutMe />
				<Projects />
				<Resume />
				<ContactFooter />
			</section>
		</ThemeProvider>
	</StrictMode>,
)

