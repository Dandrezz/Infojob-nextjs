"use client"

import { useRouter } from 'next/navigation';
import dataWithPosition from '../data/province_geocoding-lat-log.json'
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

export default function Home() {
	const router = useRouter();

	const handleClick = async (name: string) => {
		router.push(`/province/${name}`)
	}

	return (
		<main className="h-screen bg-slate-800">
			<MapContainer className='h-full' center={[40.307, -4.15]} zoom={7} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{
					Object.entries(dataWithPosition).map((city, index) => (
						<Marker
							key={index}
							eventHandlers={{
								click: () => handleClick(city[0])
							}}
							position={[city[1][1], city[1][0]]}>
							<Popup>
								{city[0]}
							</Popup>
						</Marker>
					))
				}
			</MapContainer>
		</main>
	)
}

