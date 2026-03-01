import { ImageResponse } from 'next/og';

export const alt = 'GK Mehendi Art - Premium Bridal Mehendi in Chennai';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1E4D3A 0%, #2A6B4F 50%, #1E4D3A 100%)',
                    color: 'white',
                    fontFamily: 'serif',
                }}
            >
                <div style={{ fontSize: 72, fontWeight: 'bold', color: '#D4A017', marginBottom: 20 }}>
                    GK Mehendi Art
                </div>
                <div style={{ fontSize: 32, color: '#FFF8F0', marginBottom: 10 }}>
                    Premium Bridal Mehendi in Chennai
                </div>
                <div style={{ fontSize: 24, color: '#D4A017', opacity: 0.8 }}>
                    Handmade | Organic | Chemical-Free
                </div>
            </div>
        ),
        { ...size }
    );
}
