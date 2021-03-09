// index.jsx

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Index() {
	return (
		<Layout home> 
			<div className={style.buttons}>
				<Link href='/about'><a>About</a></Link>
				<Link href='/projects'><a>Projects</a></Link>
				<Link href='/contact'><a>Contact</a></Link>
			</div>
			
			<a className={style.resumeLink} 
				href='/resume.pdf'>
					<FontAwesomeIcon icon={faFileAlt} className={style.icon}/>
					Full Resume PDF
			</a>

			<div className={style.profileLinks}>
				<a href='https://github.com/mathewkramsch'>
					<FontAwesomeIcon icon={faGithub} className={style.profileIcon}/>
				</a>
				<a href='https://www.linkedin.com/in/mathew-kramsch/'>
					<FontAwesomeIcon icon={faLinkedin} className={style.profileIcon}/>
				</a>
			</div>
		</Layout>
	);
}
