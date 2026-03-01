'use client';

import React from 'react';

interface MandalaBackgroundProps {
    patternId: string;
}

const MandalaBackground: React.FC<MandalaBackgroundProps> = ({ patternId }) => {
    return (
        <div className="absolute inset-0 z-0">
            {/* Base Maroon Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5A0505] via-[#830707] to-[#6B0606]" />

            {/* Gold Mandala Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id={patternId} x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <circle cx="100" cy="100" r="40" fill="none" stroke="#D4A017" strokeWidth="2" opacity="0.6" />
                            <circle cx="100" cy="100" r="30" fill="none" stroke="#D4A017" strokeWidth="1.5" opacity="0.5" />
                            <circle cx="100" cy="100" r="20" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
                            <g transform="translate(100, 100)">
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                    <g key={i} transform={`rotate(${angle})`}>
                                        <ellipse cx="0" cy="-35" rx="8" ry="15" fill="#D4A017" opacity="0.3" />
                                        <ellipse cx="0" cy="-50" rx="6" ry="12" fill="#FFD700" opacity="0.25" />
                                    </g>
                                ))}
                            </g>
                            <circle cx="100" cy="60" r="2" fill="#FFD700" opacity="0.6" />
                            <circle cx="100" cy="140" r="2" fill="#FFD700" opacity="0.6" />
                            <circle cx="60" cy="100" r="2" fill="#FFD700" opacity="0.6" />
                            <circle cx="140" cy="100" r="2" fill="#FFD700" opacity="0.6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#${patternId})`} />
                </svg>
            </div>

            {/* Gold Accent Circles */}
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-gold/10 blur-sm" />
            <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full border-4 border-gold/10 blur-sm" />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>
    );
};

export default MandalaBackground;
