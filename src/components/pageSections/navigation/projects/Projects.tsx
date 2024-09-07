import { useState } from 'react'
import { Code } from 'lucide-react'
import { Badge } from '../../../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card'
import { ProjectsData } from './projectData'
import { Button } from '../../../ui/button'
import { Project } from '@/types/project'

export const Projects = () => {
	return (
		<Card className='px-4 flex flex-col items-center justify-center w-10/12 rounded-[.5rem] max-w-[1000px] shadow-lg'>
			<CardTitle className='text-3xl'>Projects</CardTitle>
			<CardContent className='flex flex-wrap justify-center'>
				{ProjectsData.map((project, index) => (
					<FlippableCard
						key={index}
						project={project}
					/>
				))}
			</CardContent>
		</Card>
	)
}

type FlippableCardProps = {
	project: Project
}

const FlippableCard = ({ project }: FlippableCardProps) => {
	const [showDescription, setShowDescription] = useState(false)

	const handleToggle = () => {
		setShowDescription(!showDescription)
	}

	return (
		<Card className='m-2 text-center flex flex-col items-center justify-between max-w-[24rem] h-[32rem]'>
			<CardContent className='h-2/3 pt-8 px-0 pb-0'>
				{showDescription ? (
					<CardContent className='flex items-center h-full'>{project.description}</CardContent>
				) : (
					<a href={project.link}>
						<div className='w-full h-full flex items-center justify-center'>
							<img
								src={project.image}
								alt={project.title}
								className='max-w-full max-h-full border rounded-lg shadow-lg'
							/>
						</div>
					</a>
				)}
			</CardContent>
			<CardHeader className='flex flex-col items-center justify-center h-1/3'>
				<div
					title='Programming Language Badges'
					className='flex flex-wrap justify-center'
				>
					{project.technologies.map((tech, index) => (
						<Badge
							key={index}
							className={'m-1 ' + tech.color}
						>
							{tech.title}
						</Badge>
					))}
				</div>
				<h2 className='text-xl'>{project.title}</h2>
				<div
					className='flex gap-4 flex-wrap justify-center'
					title='Buttons'
				>
					<Button variant={'outline'}>
						<a
							href={project.link}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2'
						>
							Link
						</a>
					</Button>
					<Button variant={'outline'}>
						<a
							href={project.code}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2'
						>
							Code <Code />
						</a>
					</Button>
					<Button
						variant={'outline'}
						onClick={handleToggle}
					>
						{showDescription ? 'Image' : 'Description'}
					</Button>
				</div>
			</CardHeader>
		</Card>
	)
}

/*
import { useState } from 'react'
import { Badge } from '../../../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card'
import { ProjectsData } from './projectData'
import { Button } from '../../../ui/button'
import { Project } from '@/types/project'
import { Code, ExternalLink } from 'lucide-react'

export const Projects = () => {
	return (
		<Card className='px-4 flex flex-col items-center justify-center w-10/12 rounded-[.5rem] max-w-[1000px] shadow-lg'>
			<CardTitle className='text-3xl'>Projects</CardTitle>
			<CardContent className='flex flex-wrap justify-center'>
				{ProjectsData.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</CardContent>
		</Card>
	)
}

type ProjectCardProps = {
	project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const [showDescription, setShowDescription] = useState(false)

	const handleToggle = () => {
		setShowDescription(!showDescription)
	}

	return (
		<Card className='m-2 text-center flex flex-col items-center justify-between max-w-[25rem]  h-[32rem]'>
			<CardContent className='flex items-center h-2/3 pt-4 px-0 pb-0'>
				{showDescription ? (
					<CardContent>{project.description}</CardContent>
				) : (
					<CardATag link={project.link}>
						<img
							src={project.image}
							alt={project.title}
							className='border rounded-lg shadow-lg'
						/>
					</CardATag>
				)}
			</CardContent>
			<CardHeader className='flex-shrink-0 flex flex-col items-center justify-center md:h-1/3'>
				<h2 className='text-xl'>{project.title}</h2>
				<div
					title='Programming Language Badges'
					className='flex flex-wrap justify-center'
				>
					{project.technologies.map((tech, index) => (
						<Badge
							key={index}
							className={'m-1 ' + tech.color}
						>
							{tech.title}
						</Badge>
					))}
				</div>
				<div
					className='flex gap-4 flex-wrap justify-center'
					title='Buttons'
				>
					<Button variant={'outline'}>
						<CardATag link={project.link}>
							View <ExternalLink />
						</CardATag>
					</Button>
					<Button variant={'outline'}>
						<CardATag link={project.code}>
							Code <Code />
						</CardATag>
					</Button>
					<Button
						variant={'outline'}
						onClick={handleToggle}
					>
						{showDescription ? 'Image' : 'Description'}
					</Button>
				</div>
			</CardHeader>
		</Card>
	)
}

type CardATagProps = {
	children: React.ReactNode
	link?: string
}

const CardATag = ({ children, link }: CardATagProps) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className='flex items-center gap-2'
		>
			{children}
		</a>
	)
}


*/
