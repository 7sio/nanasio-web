'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Character } from '../data/characterData';

type Props = {
    characters: Character[];
};

export default function CharacterSection({ characters }: Props) {
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(characters[0] ?? null);

    return (
        <motion.section
            id="character"
            className="relative py-20 px-6 text-center scroll-mt-24 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            aria-labelledby="character-heading"
        >
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('/bg_character-section.webp')] bg-cover bg-center blur-sm"></div>
            </div>

            <div className="relative z-10">
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
                    Character
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <AnimatePresence mode="wait">
                        {selectedCharacter && (
                            <motion.img
                                key={selectedCharacter.name}
                                src={selectedCharacter.standing}
                                alt={selectedCharacter.name}
                                initial={{ opacity: 0, y: -30, rotate: -10 }}
                                animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                                exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                                className="w-[300px] md:w-[400px] h-auto md:mr-10"
                            />
                        )}
                    </AnimatePresence>

                    <div className="flex flex-col items-center">
                        <div className="flex flex-wrap justify-center gap-6 mb-4">
                            {characters.map((char) => (
                                <button
                                    key={char.name}
                                    onClick={() => setSelectedCharacter(char)}
                                    className={`w-24 h-24 rounded-full overflow-hidden border-4 ${selectedCharacter?.name === char.name ? 'border-pink-500' : 'border-transparent'
                                        } transition-all duration-300 hover:scale-105 bg-white`}
                                >
                                    <Image
                                        src={char.thumbnail}
                                        alt={char.name}
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {selectedCharacter && (
                                <motion.div
                                    key={selectedCharacter.name + '-info'}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
                                    exit={{ opacity: 0, y: 30, transition: { duration: 0.3, ease: 'easeIn' } }}
                                    className="w-full max-w-md text-left mt-4"
                                >
                                    <h3 className="text-2xl font-bold text-pink-600 mb-2">{selectedCharacter.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4">CV: {selectedCharacter.cv}</p>
                                    <p className="text-white leading-relaxed whitespace-pre-wrap">
                                        {selectedCharacter.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}