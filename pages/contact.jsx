// contact.jsx

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Contact() {
	return (
		<Layout>
			<h2 className={style.title}>Contact Me</h2>
			<div className={style.info}>
				<p>
					<FontAwesomeIcon icon={faEnvelope} className={style.iconContact}/>
					mathewkramsch@ucsb.edu
				</p>
				<p>
					<FontAwesomeIcon icon={faMobileAlt} className={style.iconContact}/>
					(626) 529-4008
				</p>
			</div>

		</Layout>
	);
}
