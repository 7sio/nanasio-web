'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ContentsSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    // const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    return (
        <section
            ref={ref}
            id="Contens"
            aria-labelledby="Contens-heading"
            className="relative py-20 px-6 text-center scroll-mt-24 overflow-hidden"
        >
            {/* 固定背景 */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="w-full h-full bg-[url('/bg_contents-section.webp')] bg-cover bg-center blur-sm sticky top-0"
                />
            </div>

            {/* コンテンツ表示エリア（スクロールに応じて出現） */}
            <div className="relative z-10 sticky">
                <motion.h2
                    id="Contens-heading"
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
                    Contents
                </motion.h2>

            </div>
        </section>
    );
}
