import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        console.log('📥 Received request to /api/beehiiv');

        const { email } = await request.json();
        if (!email) {
            console.error('❌ No email provided');
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        console.log('📨 Subscribing email:', email);

        // Load environment variables
        const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
        const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

        if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
            console.error('❌ Missing API keys:', {
                BEEHIIV_API_KEY: BEEHIIV_API_KEY ? 'Loaded' : '❌ Not Found',
                BEEHIIV_PUBLICATION_ID: BEEHIIV_PUBLICATION_ID ? 'Loaded' : '❌ Not Found'
            });
            return NextResponse.json({ error: 'Internal Server Error: Missing API keys' }, { status: 500 });
        }

        console.log('🔑 API keys loaded successfully');

        console.log(process.env.BEEHIIV_API_KEY, process.env.BEEHIIV_PUBLICATION_ID)

        // Make request to Beehiiv API
        const beehiivResponse = await fetch(
            `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`
                },
                body: JSON.stringify({
                    email: email,
                    reactivate_existing: true,
                    send_welcome_email: true,
                    utm_source: 'once-ui.com'
                })
            }
        );        

        console.log('🔄 Beehiiv API response status:', beehiivResponse.status);

        const responseText = await beehiivResponse.text(); // Read response as text
        console.log('🐝 Beehiiv API raw response:', responseText);

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (error) {
            console.error('❌ Failed to parse Beehiiv API response:', responseText);
            return NextResponse.json({ error: 'Invalid response from Beehiiv', rawResponse: responseText }, { status: 500 });
        }

        if (!beehiivResponse.ok) {
            console.error('❌ Beehiiv API Error:', data);
            return NextResponse.json({ error: 'Beehiiv API Error', details: data }, { status: beehiivResponse.status });
        }

        console.log('✅ Subscription successful:', data);
        return NextResponse.json({ message: 'Subscription successful', data });
    } catch (error) {
        console.error('❌ Unexpected error in API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}