import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigation } from './components/navigation/Navigation'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { Projects } from './components/projects/Projects'
import { ContactFooter } from './components/contact/ContactFooter'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='dark'>
			<Navigation />
			<Projects />
			<ContactFooter />
		</ThemeProvider>
	</StrictMode>,
)

