import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<h1 className='text-2xl border-2 border-red-500 rounded px-4 py-2'>
				Meeting Scheduler
			</h1>
		</div>
	);
}
