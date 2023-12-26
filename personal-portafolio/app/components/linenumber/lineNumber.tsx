'use client';
import React, {ReactNode, useEffect, useState} from 'react';

export default function LineNumber() {
    const [lineNumbers, setLineNumbers] = useState<ReactNode>([]);
    const windowHeight = window.innerHeight;
    useEffect(() => {
        function generateLineNumbers() {
            const windowHeight = window.innerHeight;
            const lineCount = Math.floor(windowHeight / 31);
            const lines = [];

            for (let i = 1; i <= lineCount; i++) {
                lines.push(
                    <React.Fragment key={i}>
                        <span>{i}</span>
                        {i < lineCount && <br />}
                    </React.Fragment>
                );
            }

            setLineNumbers(lines);
        }

        window.addEventListener('load', generateLineNumbers);
        window.addEventListener('resize', generateLineNumbers);

        generateLineNumbers();

        return () => {
            window.removeEventListener('load', generateLineNumbers);
            window.removeEventListener('resize', generateLineNumbers);
        };
    }, []);

    return (
        <div className={`flex flex-col justify-center border-r border-gray-500 p-2 text-gray-400 bg-[#313335] text-center leading-4 text-[12px] max-h-[${String(windowHeight)}px]`}>
            {lineNumbers}
        </div>
    );
}
