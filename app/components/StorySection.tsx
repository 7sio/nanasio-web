'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { StorySectionData } from '../types/story';

type Props = {
    data: StorySectionData;
};

export default function StorySection({ data }: Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section
            ref={ref}
            id="story"
            aria-labelledby="story-heading"
            className="relative text-black px-6 sm:px-12 md:px-20 py-40 scroll-mt-24 overflow-hidden h-[200vh]"
        >
            {/* 固定背景 */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="w-full h-full bg-[url('/bg_story-section.jpg')] bg-cover bg-center blur-sm sticky top-0"
                    style={{ opacity }}
                />
            </div>

            {/* コンテンツ表示エリア（スクロールに応じて出現） */}
            <div className="relative z-10 sticky top-32">
                <motion.h2
                    id="story-heading"
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
                    STORY
                </motion.h2>

                <div className="space-y-12">
                    {data.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/70 rounded-xl p-6 shadow-md backdrop-blur-sm"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-md leading-relaxed whitespace-pre-line">{item.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
