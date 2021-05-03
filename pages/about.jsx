// about.jsx

import Link from 'next/link'
import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function About() {
	return (
		<Layout>
			<h2 className={style.title}>About Me</h2>
			<div className={style.info}>
				<p>		
					I am a diligent fourth year student pursing a degree in Computer
					Science at University of California, Santa Barbara who is expected to 
					graduate in Winter 2022. With a strong technical knowledge of Data 
					Structures and Computer Science fundamentals, as well as proficiency 
					in multiple programming languages and technologies, I can operate as a 
					Full‑Stack software developer.
				</p>
				<p>
					I am currently looking for full-time Software Development Engineering 
					opportunities for Summer 2021. 
				</p>
			</div>
		</Layout>
	);
}
