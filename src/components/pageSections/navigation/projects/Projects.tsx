import { useState } from 'react'
import { Code } from 'lucide-react'
import { Badge } from '../../../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card'
import { ProjectsData } from './projectData'
import { Button } from '../../../ui/button'
import { Project } from '@/types/project'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export const Projects = () => {
	return (
		<>
			<div className='hidden sm:flex w-full justify-center'>
				<DesktopProjects />
			</div>
			<div className='flex sm:hidden w-full justify-center'>
				<MobileProjects />
			</div>
		</>
	)
}

const DesktopProjects = () => {
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

const MobileProjects = () => {
	return (
		<Card className='flex flex-col items-center'>
			<CardTitle className='text-3xl'>Projects</CardTitle>
			<Carousel className='w-full max-w-xs'>
				<CarouselContent>
					{ProjectsData.map((project, index) => (
						<CarouselItem key={index}>
							<ProjectCard project={project} />
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex justify-evenly mt-8'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
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
		<Card className='m-2 text-center flex flex-col items-center justify-between max-w-[24rem] h-[34rem]'>
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

