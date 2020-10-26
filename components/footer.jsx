// footer.jsx

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import style from '../styles/layout.module.css'
import utilStyle from '../styles/utils.module.css'

export default function Footer() {
	return (
		<footer className={style.footer}>
			Mathew Kramsch &copy; 2020. All rights reserved.
			<a className={utilStyle.sourceGithub}
				href='https://github.com/mathewkramsch/resume-website'>
					<FontAwesomeIcon icon={faGithub} className={utilStyle.icon}/>
					Source code on Github
			</a>
		</footer>
	);
}
