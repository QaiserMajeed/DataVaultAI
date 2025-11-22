import React from 'react';

const Logo = ({ className }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Abstract DV Monogram */}
            <path
                d="M20 20H45C65 20 75 35 75 50C75 65 65 80 45 80H20V20Z"
                className="fill-teal-600"
            />
            <path
                d="M35 35H45C55 35 60 42.5 60 50C60 57.5 55 65 45 65H35V35Z"
                className="fill-teal-950"
            />
            <path
                d="M60 20L80 80H65L50 35"
                className="fill-emerald-500"
                style={{ mixBlendMode: 'multiply' }}
            />
            <circle cx="80" cy="20" r="8" className="fill-coral-500" />
        </svg>
    );
};

export default Logo;
