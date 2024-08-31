import { Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from '../theme/ModeToggle'

export const Navigation = () => {
	return (
		<section
			title='navigation'
			className='fixed top-0 w-full h-16 px-4 flex justify-between'
		>
			<div className='flex justify-end items-center space-x-4'>
				<a href='https://www.timer.seannkelleyy.com'>Pomodoro</a>
				<a href='https://www.breeze.seannkelleyy.com'>Breeze Budgets</a>
			</div>
			<div className='flex justify-end items-center space-x-4'>
				<a
					href='https://github.com/seannkelleyy'
					title='GitHub Profile'
				>
					<Github />
				</a>
				<a
					href='https://www.linkedin.com/in/seankelley15/'
					title='LinkedIn Profile'
				>
					<Linkedin />
				</a>
				<a
					href='mailto:seannkelleyy1@gmail.com'
					title='Email Me'
				>
					<Mail />
				</a>

				<ModeToggle />
			</div>
		</section>
	)
}

