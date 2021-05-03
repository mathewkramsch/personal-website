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
							IV Housing Web Application:
						</a><br/>
						Worked in a team of 5 to make a housing search application specific to Isla Vista
						(still in development).
						<a href='https://github.com/ucsb-cs48-s20/project-s0-t3-iv-housing'
							className={style.projectDescriptionLink}>
							&nbsp;View source code.
						</a>
					</div></p>
				</div>


				<div className={style.project}>
					<a href='https://mathewkramsch.github.io/odin-etch-a-sketch/'>
						<img src='/etch-a-sketch.png' className={style.projectImg}/>
					</a>
					<p><div>
						<a href='https://mathewkramsch.github.io/odin-etch-a-sketch/'
							className={style.projectLink}>
							JavaScript Etch-a-Sketch:
						</a><br/>
						A browser version of an Etch-a-Sketch built with JavaScript.
						This aplication was one of the projects assigned in The Odin Project coursework.
						<a href='https://github.com/mathewkramsch/odin-etch-a-sketch'
							className={style.projectDescriptionLink}>
							&nbsp;View source code.
						</a>
					</div></p>
				</div>


				<div className={style.project}>
					<a href='https://mathewkramsch.github.io/javascript30-drumkit/'>
						<img src='/drum-kit.png' className={style.projectImg}/>
					</a>
					<p><div>
						<a href='https://mathewkramsch.github.io/javascript30-drumkit/'
							className={style.projectLink}>
							JavaScript Drum-Kit:
						</a><br/>
						An in-browser keyboard Drum-Kit built with JavaScript.
						This aplication was one of the projects assigned in The Odin Project coursework.
						<a href='https://github.com/mathewkramsch/javascript30-drumkit'
							className={style.projectDescriptionLink}>
							&nbsp;View source code.
						</a>
					</div></p>
				</div>
			</div>

		</Layout>
	);
}
