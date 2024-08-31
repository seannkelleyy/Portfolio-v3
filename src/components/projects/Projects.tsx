import { Card } from '../ui/card'
import { ProjectsData } from './projectData'

export const Projects = () => {
	return (
		<Card className='flex items-center justify-center w-10/12'>
			<h1>Projects</h1>
			<section>
				{ProjectsData.map((project, index) => (
					<div key={index}>
						<a href={project.link}>
							<img
								src={project.image}
								alt={project.title}
							/>
							<h2>{project.title}</h2>
						</a>
					</div>
				))}
			</section>
		</Card>
	)
}

