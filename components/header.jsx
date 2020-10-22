// header.jsx

import Link from 'next/link'
import style from '../styles/header.module.css'

export default function Header({ home }) {
	return (
		<header>
			{
				home ? (
					<>
						<img src='/profile.jpg'/>
						<h1>Mathew Kramsch</h1>
						<h2>Full Stack Software Developer</h2>
					</>
				) : (
					<>
						<Link href='/'>
							<a><img src='/profile.jpg'/>
							</a>
						</Link>
						<h2>
							<Link href='/'>
								<a>Mathew Kramsch</a>
							</Link>
						</h2>
					</>
				)
			}
		</header>
	);
}
