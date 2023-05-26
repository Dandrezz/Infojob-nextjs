import { NextResponse } from 'next/server'

async function getOfferByProvince(province: string) {
    const offer = await fetch(`https://api.infojobs.net/api/9/offer?province=${province}`,
    {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic Y2M2Y2Q2MGM3ZGRmNDU1YThhZWNjNGE2YTNhZGZlNTE6REg0K1Bld0xCNnduMW1UOTJ5WlZxUUdSYzZoQ2xJMkpIL3cwRmNIR2k0NnlVVnVkaEQ=`
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