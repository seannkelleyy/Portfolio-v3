import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button } from '../../ui/button'
import { Card, CardTitle } from '../../ui/card'

export const Resume = () => {
	return (
		<Card className='flex flex-wrap justify-center flex-col items-center p-3 rounded-[.5rem] w-10/12 md:w-6/12 max-w-[850px] shadow-lg'>
			<CardTitle className='text-3xl'>Resume</CardTitle>
			<AspectRatio
				ratio={8 / 11.5}
				className='p-4'
			>
				<img
					className='w-full h-full shadow-lg rounded-lg'
					src='/resume.png'
					alt='Resume'
				/>
			</AspectRatio>
			<Button variant='outline'>
				<a href='/resume.pdf'>Download A Copy</a>
			</Button>
		</Card>
	)
}

