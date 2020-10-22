// layout.jsx

import Head from 'next/head'
import style from '../styles/layout.module.css'

export const { siteTitle } = 'Mathew Kramsch';

export default function Layout({ children, home }) {
	return (
		<div className={style.container}>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<main>{children}</main>
		</div>
	);
}


