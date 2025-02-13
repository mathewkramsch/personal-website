// _app.js

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/global.css'
import Head from 'next/head'

const siteTitle = 'Mathew Kramsch';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
