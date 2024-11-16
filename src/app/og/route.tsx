import { ImageResponse } from 'next/og';
import { baseURL } from '@/app/resources';
import { person } from '@/app/resources';

export const runtime = 'edge';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    const font = fetch(
        new URL('../../../public/fonts/Inter.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData = await font;

    if (searchParams.get('from')) {
        const from = searchParams.get('from') || 'Lorant';
        const to = searchParams.get('to') || 'Oncer';

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        padding: '16rem',
                        backgroundImage: `url(http://localhost:3000/og/template-invite.jpg)`,
                        backgroundSize: 'cover',
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '2rem',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '8rem',
                                lineHeight: '0.75',
                                textTransform: 'capitalize',
                            }}
                        >
                            {to}'s
                        </span>
                        <div
                            style={{
                                fontSize: '8rem',
                                lineHeight: '0.75',
                                textTransform: 'capitalize',
                                marginBottom: '2rem'
                            }}
                        >
                            Club Pass
                        </div>
                        <span
                            style={{
                                lineHeight: '1',
                                fontSize: '2.5rem',
                                opacity: 0.8,
                            }}
                        >
                            {from} has invited you to join the
                        </span>
                        <span
                            style={{
                                lineHeight: '0.5',
                                fontSize: '4rem',
                                color: '#C2FFDD',
                            }}
                        >
                            Design Engineers Club
                        </span>
                        <div style={{
                            marginTop: '4rem',
                            padding: '1rem 1.75rem',
                            fontSize: '1.75rem',
                            background: 'white',
                            color: 'black',
                            borderRadius: '1.5rem',
                            width: '16rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            Accept invite
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1920,
                height: 1080,
                fonts: [
                    {
                        name: 'Inter',
                        data: fontData,
                        style: 'normal',
                    },
                ],
            }
        );
    }

    const title = searchParams.get('title') || 'Portfolio';

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    padding: '8rem',
                    backgroundImage: `url(https://${baseURL}/og/template.jpg)`,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '4rem',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        color: 'white',
                    }}
                >
                    <span
                        style={{
                            fontSize: '8rem',
                            lineHeight: '8rem',
                            letterSpacing: '-0.05em',
                            whiteSpace: 'pre-wrap',
                            textWrap: 'balance',
                        }}
                    >
                        {title}
                    </span>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5rem',
                        }}
                    >
                        <img
                            src={`https://${baseURL}${person.avatar}`}
                            style={{
                                width: '12rem',
                                height: '12rem',
                                objectFit: 'cover',
                                borderRadius: '100%',
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '4.5rem',
                                    lineHeight: '4.5rem',
                                    whiteSpace: 'pre-wrap',
                                    textWrap: 'balance',
                                }}
                            >
                                {person.name}
                            </span>
                            <span
                                style={{
                                    fontSize: '2.5rem',
                                    lineHeight: '2.5rem',
                                    whiteSpace: 'pre-wrap',
                                    textWrap: 'balance',
                                    opacity: '0.6',
                                }}
                            >
                                {person.role}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1920,
            height: 1080,
            fonts: [
                {
                    name: 'Inter',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    );
}