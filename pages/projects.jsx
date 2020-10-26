// projects.jsx

import Link from 'next/link'
import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Contact() {
	return (
		<Layout>
			<h2 className={style.title}>Projects</h2>
			<div className={style.info}>
				<div className={style.project}>
					<a href='https://cs48-s20-s0-t3-prod.herokuapp.com/'>
						<img src='/ivhousing.png' className={style.projectImg}/>
					</a>
					<p><div>
						<a href='https://cs48-s20-s0-t3-prod.herokuapp.com/'
							className={style.projectLink}>
							IV Housing Web Application:</a><br/>
						Worked in a team of 5 to make a housing search application specific to Isla Vista
						(still in development).
					</div></p>
				</div>
			</div>
				
		</Layout>
	);
}
