'use client';

import { motion } from 'framer-motion';
import type { SpecialSectionData } from '../types/special';

type Props = {
    data: SpecialSectionData;
};

export default function SpecialSection({ data }: Props) {
    return (
        <section
            id="special"
            className="relative min-h-screen text-gray-900 p-10 scroll-mt-24 overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('/bg_special-section.webp')] bg-cover bg-center blur-sm"></div>
            </div>

            <div className="relative z-0">
                <div className="relative z-10 text-center mb-10">
                    <motion.h2
                        id="special-heading"
                        className="text-4xl font-bold text-pink-600 mb-10 text-center"
                        style={{
                            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                            fontFamily: '"Bodoni MT", "Didot", "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif',
                            fontWeight: '100',
                            letterSpacing: '0.3em',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Special
                    </motion.h2>
                </div>
                <div className="text-center">
                    <p>{data.description}</p>
                    <a
                        href={data.downloadUrl}
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {data.buttonText}
                    </a>
                </div>
            </div>
        </section>
    );
}
