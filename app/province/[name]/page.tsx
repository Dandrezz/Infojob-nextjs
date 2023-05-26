"use client"

import { useRouter } from 'next/navigation';
import { Item } from '@/interfaces/offerInfo'
import { useEffect, useState } from 'react'

export default function Province({ params }:{ params: { name: string }}) {
	const router = useRouter();
    const { name } = params
    const [offerInfo, setOfferInfo] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`/api?province=${name}`).then(res => res.json()).then(data => {
            if(data.error) return
            setOfferInfo(data.offers)
        });
    }, [name])

    const capitalizeFirstLetter = (value: string) => { 
		console.log(value)
		return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`; 
	}

    return (
        <div className="h-full bg-[#8c88eb] rounded-lg">
			<h1 className="text-white font-bold text-5xl text-center mb-10 pt-10">
				{capitalizeFirstLetter(name)}
			</h1>
			<div className='pb-5'>
				{
					offerInfo.map((offer, index) => (
						<div key={index} className='rounded-lg shadow-lg mt-5 lg:mx-40 sm:mx-4 bg-slate-900 flex flex-row'>
							<div className='basis-1/3 bg-[#2a265f] text-white p-3 font-bold text-lg text-ellipsis overflow-hidden'>
								{capitalizeFirstLetter(offer.title)}
							</div>
							<div className='basis-2/3 bg-white p-3 flex'>
								<div className='basis-4/5'>
									<p className='text-gray-500 text-sm'>{new Date(offer.published).toString()}</p>
									<p className='my-1 text-gray-700'>{capitalizeFirstLetter(offer.requirementMin)}</p>
									<p className='text-gray-700'>{offer.salaryDescription}</p>
								</div>
								<div className='basis-1/5 flex flex-row justify-center items-center w-auto'>
									<button 
										onClick={() => router.push(offer.link)}
										className='bg-[#2a265f] hover:bg-[#1a183d] text-white font-bold py-2 px-4 rounded-lg'>
										Ir
									</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
    )
}