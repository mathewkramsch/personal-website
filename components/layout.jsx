// layout.jsx

import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/layout.module.css'
import Header from './header'
import Footer from './footer'

const siteTitle = 'Mathew Kramsch';

export default function Layout({ children, home }) {
	return (
		<div className={style.container}>

			<Head>
				<title>{siteTitle}</title>
			</Head>

			<Header home={home}/>
			<main>{children}</main>

			{
				!home && (
					<div>
						<Link href='/'>
							<a>Back to home</a>
						</Link>
					</div>
				)
			}

			<Footer/>

		</div>
	);
}


