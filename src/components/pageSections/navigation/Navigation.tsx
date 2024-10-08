import { Github, Linkedin, Mail } from 'lucide-react'
import { Menubar, MenubarContent, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../../ui/menubar'
import { Button } from '../../ui/button'
import { ModeToggle } from '../../theme/ModeToggle'

const DesktopNavigation = () => {
	return (
		<section
			title='navigation'
			className='hidden sm:flex fixed top-0 w-full h-16 px-4 justify-between backdrop-blur-lg bg-white/2 z-10'
		>
			<div className='flex justify-start items-center gap-2'>
				<img
					className='dark:invert'
					src='/SK.png'
					alt='SK Logo'
					width={40}
					height={40}
				/>
				<Button variant='ghost'>
					<a
						href='https://www.timer.seannkelleyy.com'
						target='_blank'
						rel='noopener noreferrer'
						title='Pomodoro Timer'
					>
						Pomodoro
					</a>
				</Button>
				<Button variant='ghost'>
					<a
						href='https://www.breeze.seannkelleyy.com'
						target='_blank'
						rel='noopener noreferrer'
						title='Breeze Budgets'
					>
						Breeze Budgets
					</a>
				</Button>
			</div>
			<div className='flex justify-end items-center'>
				<Button variant='ghost'>
					<a
						href='https://github.com/seannkelleyy'
						target='_blank'
						rel='noopener noreferrer'
						title='GitHub Profile'
					>
						<Github />
					</a>
				</Button>
				<Button variant='ghost'>
					<a
						href='https://www.linkedin.com/in/seankelley15/'
						target='_blank'
						rel='noopener noreferrer'
						title='LinkedIn Profile'
					>
						<Linkedin />
					</a>
				</Button>
				<Button variant='ghost'>
					<a
						href='mailto:seannkelleyy1@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						title='Email Me'
					>
						<Mail />
					</a>
				</Button>
				<ModeToggle />
			</div>
		</section>
	)
}

const MobileNavigation = () => {
	return (
		<Menubar className='flex sm:hidden fixed top-0 w-full h-16 px-4 justify-between backdrop-blur-lg bg-white/2 z-10 border-none'>
			<img
				className='dark:invert'
				src='/SK.png'
				alt='SK Logo'
				width={40}
				height={40}
			/>
			<MenubarMenu>
				<MenubarTrigger>Projects</MenubarTrigger>
				<MenubarContent className='flex flex-col'>
					<Button variant='ghost'>
						<a
							href='https://www.timer.seannkelleyy.com'
							target='_blank'
							rel='noopener noreferrer'
							title='Pomodoro Timer'
						>
							Pomodoro
						</a>
					</Button>
					<MenubarSeparator />
					<Button variant='ghost'>
						<a
							href='https://www.breeze.seannkelleyy.com'
							target='_blank'
							rel='noopener noreferrer'
							title='Breeze Budgets'
						>
							Breeze Budgets
						</a>
					</Button>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Links</MenubarTrigger>
				<MenubarContent className='flex flex-col'>
					<Button variant='ghost'>
						<a
							href='https://github.com/seannkelleyy'
							target='_blank'
							rel='noopener noreferrer'
							title='GitHub Profile'
							className='flex items-center gap-1'
						>
							<Github /> Github
						</a>
					</Button>
					<MenubarSeparator />
					<Button variant='ghost'>
						<a
							href='https://www.linkedin.com/in/seankelley15/'
							target='_blank'
							rel='noopener noreferrer'
							title='LinkedIn Profile'
							className='flex items-center gap-1'
						>
							<Linkedin /> LinkedIn
						</a>
					</Button>
					<MenubarSeparator />
					<Button variant='ghost'>
						<a
							href='mailto:seannkelleyy1@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							title='Email Me'
							className='flex items-center gap-1'
						>
							<Mail /> Email
						</a>
					</Button>
				</MenubarContent>
			</MenubarMenu>
			<ModeToggle />
		</Menubar>
	)
}
export const Navigation = () => {
	return (
		<>
			<DesktopNavigation />
			<MobileNavigation />
		</>
	)
}

