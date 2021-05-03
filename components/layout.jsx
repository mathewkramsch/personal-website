// layout.jsx

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../styles/layout.module.css'
import Header from './header'
import Footer from './footer'

export default function Layout({ children, home }) {
	return (
		<div className={style.page}>
			<div className={style.container}>
				<div>
					<Header home={home}/>
					<main className={style.main}>{children}</main>
				</div>
			</div>
			<Footer home={home}/>
		</div>
	);
}
