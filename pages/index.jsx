// index.jsx

import Link from 'next/link'
import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Index() {
	return (
		<Layout home> 
			<div className={style.buttons}>
				<Link href='/about'><a>About</a></Link>
				<a href='/resume.pdf'>Resume</a>
				<Link href='/contact'><a>Contact</a></Link>
			</div>
			
			<a className={style.sourceGitHub} 
				href='https://github.com/mathewkramsch/resume-website'>
					Source on Github
			</a>
		</Layout>
	);
}
