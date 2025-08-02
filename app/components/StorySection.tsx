'use client'
import { motion } from 'framer-motion'
import type { StorySectionData } from '../types/story'

type Props = {
    data: StorySectionData
}

export default function StorySection({ data }: Props) {
    return (
        <motion.section
            id="story"
            aria-labelledby="story-heading"
            className="relative text-black px-6 sm:px-12 md:px-20 py-20 scroll-mt-24 overflow-hidden"
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            {/* 背景レイヤーに sticky を付与 */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('/bg_story-section.jpg')] bg-cover bg-center blur-sm sticky top-0" />
            </div>

            {/* 前面コンテンツ */}
            <div className="relative z-10">
                <div className="relative z-10 text-center mb-10">
                    <h2
                        className="text-4xl font-bold mb-10 text-pink-600"
                        style={{
                            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                            fontFamily: '"Bodoni MT", "Didot", "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif',
                            fontWeight: '100',
                            letterSpacing: '0.3em',
                        }}
                    >
                        Story
                    </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-center whitespace-pre-wrap">
                    {data.description}
                </p>
            </div>
        </motion.section>
    )
}