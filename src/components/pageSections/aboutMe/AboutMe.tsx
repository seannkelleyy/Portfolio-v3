import { Card, CardTitle } from '../../ui/card'

export const AboutMe = () => {
	return (
		<Card className='text-center mt-[15vh] p-4 w-10/12 rounded-[.5rem] max-w-[900px] flex flex-col items-center gap-4 shadow-lg'>
			<CardTitle className='text-5xl text-blue-500'>Hi, I'm Sean.</CardTitle>
			<img
				src='/sean.jpg'
				alt='Profile'
				className='w-1/2 rounded-full'
			/>
			<p className='max-w-[75ch] text-lg'>
				I am a senior at The Ohio State University pursuing a Bachelor's degree in Computer Science and Engineering. I have experience working in an AGILE setting creating
				full-stack software solutions using React, .NET, Azure and Docker.
			</p>
		</Card>
	)
}

