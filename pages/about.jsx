// about.jsx

import Link from 'next/link'
import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function About() {
	return (
		<Layout>
			<h2>About Me</h2>
			<div className={style.info}>
				<p>
				I am a 4th year UCSB Computer Science student interested in all software 
				development but specifically web and mobile development. With experience 
				in both front-end and back-end languages I can operate as a Full-Stack 
				developer, and my background in visual arts ties into my passion for 
				user interface design.</p>
			</div>
		</Layout>
	);
}
