'use client';
import { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';

export default function PortifolioCard(cardProps: { title: string, empresa: string, image: string, gerente: string, projetistas: string, link: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDesktopChecked, setIsDesktopChecked] = useState(true);

    useEffect(() => {
        setIsDesktopChecked(isDesktop);
    }, []);

    return (
        <div
            onClick={() => window.location.href = cardProps.link}
            className={`bp440:w-[380px] w-[90vw] h-[256px] bg-black rounded-xl border-solid border-white border-2 relative overflow-hidden transition-transform duration-200 ease-in-out ${isHovered ? 'transform scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute inset-0 bg-cover bg-center`}
                style={{ backgroundImage: `url(${cardProps.image})` }}
            >
                <div className={`bg-[rgb(0,0,0)]/20 h-full items-end inset-0 flex flex-col justify-end p-4 text-white transition-opacity duration-200 ease-in-out ${isHovered || !isDesktopChecked ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='max-w-[80%]'>{cardProps.empresa}</p>
                    <h1 className="text-4xl">{cardProps.title}</h1>
                    <p>Gerenciado por {cardProps.gerente}</p>
                </div>
            </div>
        </div>
    );
}
