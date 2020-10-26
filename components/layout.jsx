// layout.jsx

import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/layout.module.css'
import Header from './header'
import Footer from './footer'

const siteTitle = 'Mathew Kramsch';

export default function Layout({ children, home }) {
	return (
		<div className={style.page}>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<div className={style.container}>
				<div>
					<Header home={home}/>
					<main className={style.main}>{children}</main>
				</div>

				{
					!home && (
						<div className={style.backToHome}>
							<Link href='/'>
								<a>
									<FontAwesomeIcon icon={faChevronLeft} className={style.backIcon}/>
									back to home
								</a>
							</Link>
						</div>
					)
				}
			</div>
			<Footer/>
		</div>
	);
}


