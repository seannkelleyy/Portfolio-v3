import { Card } from '../ui/card'
import { ProjectsData } from './projectData'

export const Projects = () => {
	return (
		<Card>
			<h1>Projects</h1>
			<section>
				{ProjectsData.map((project, index) => (
					<div key={index}>
						<a href={project.link}>
							<img
								src={project.image}
								alt={project.title}
							/>
						</a>
						<h2>{project.title}</h2>
					</div>
				))}
			</section>
		</Card>
	)
}

