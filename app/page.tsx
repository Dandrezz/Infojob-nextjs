"use client"

import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {

	return (
		<main className="h-screen bg-slate-800">
			{typeof window !== undefined ?
				<Map />
				: <h1>Cargando...</h1>}
		</main>
	)
}

