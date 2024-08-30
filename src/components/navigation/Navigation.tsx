import { Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from '../theme/ModeToggle'

export const Navigation = () => {
	return (
		<section
			title='navigation'
			className='fixed top-0 w-full h-16 text-black px-4 justify-start items-center'
		>
			<a
				href='https://github.com/seannkelleyy'
				className='hover:text-gray-700'
			>
				<Github />
			</a>
			<a
				href='https://www.linkedin.com/in/seankelley15/'
				className='hover:text-gray-700'
			>
				<Linkedin />
			</a>
			<a href='mailto:seannkelleyy1@gmail.com'>
				<Mail />
			</a>
			<ModeToggle />
		</section>
	)
}

