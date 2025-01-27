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
				I am a Software Engineer with a passion for learning and collaborating to build impactful solutions that improve people's lives. As a proficient Full Stack Developer, I
				have experience working with .NET, React, TypeScript, Java, Python, Docker, and Azure. I’m always eager to expand my knowledge while sharing my expertise to support the
				growth and success of others. My mission is to leverage software to create meaningful value for users. I am excited to connect, learn, and contribute to innovative projects
				that make a difference.
			</p>
		</Card>
	)
}

