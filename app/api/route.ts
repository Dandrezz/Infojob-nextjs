import { NextResponse } from 'next/server'

async function getOfferByProvince(province: string) {
    const offer = await fetch(`https://api.infojobs.net/api/9/offer?province=${province}`,
    {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${process.env.TOKEN}`
        }
    })
    const offerJson = await offer.json()
    return offerJson
}

export async function GET( req: Request ) {
    const {searchParams} = new URL(req.url)
    const province = searchParams.get('province')
    const provinceData = await getOfferByProvince(province!)
    return NextResponse.json(provinceData)
}