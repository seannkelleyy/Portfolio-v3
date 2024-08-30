import React from 'react'

export const ContactFooter = () => {
	return (
		<div className='contact-section'>
			<div className='contact-info'>
				<p>This website was built by Sean Kelley</p>
				<p>Location: Columbus, Ohio</p>
				<p>Phone: (419) 980-6808</p>
				<p>
					Email:{' '}
					<a
						className='link'
						href='mailto:seannkelleyy1@gmail.com'
					>
						seannkelleyy1@gmail.com
					</a>
				</p>
			</div>
		</div>
	)
}

