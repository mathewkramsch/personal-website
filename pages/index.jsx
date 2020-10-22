// index.jsx

import style from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Index() {
	return (
		<Layout> 
			<p className={style.text}>Mathew Kramsch</p>
			<img src='/profile.jpg'/>
		</Layout>
	);
}
