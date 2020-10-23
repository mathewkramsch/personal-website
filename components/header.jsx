// header.jsx

import Link from 'next/link'
import style from '../styles/header.module.css'

export default function Header({ home }) {
	return (
		<header className={style.header}>
			{
				home ? (
					<>
						<img src='/profile.jpg'
							className={`${style.headerHomeImage} ${style.borderCircle}`}/>
						<h1 className={style.headerHomeName}>Mathew Kramsch</h1>
						<h2 className={style.description}>Full Stack Software Developer</h2>
					</>
				) : (
					<Link href='/'>
						<a><img src='/profile.jpg'
							className={`${style.headerImage} ${style.borderCircle}`}/>
						</a>
					</Link>
				)
			}
		</header>
	);
}
