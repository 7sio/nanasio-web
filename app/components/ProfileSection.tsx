'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { profile } from '../data/profileData';

export default function ProfileSection() {
    return (
        <motion.section
            id="profile"
            aria-labelledby="profile-heading"
            className="relative px-6 sm:px-12 md:px-20 py-16 text-black scroll-mt-24 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('/bg_profile-section.webp')] bg-cover bg-center blur-sm" />
            </div>

            {/* セクションタイトル */}
            <div className="relative z-10 text-center mb-10">
                <h2
                    id="profile-heading"
                    className="text-4xl font-bold mb-10 text-pink-600"
                    style={{
                        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                        fontFamily: '"Bodoni MT", "Didot", "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif',
                        fontWeight: '100',
                        letterSpacing: '0.3em',
                    }}
                >
                    Profile
                </h2>
            </div>

            {/* ✅ ここが修正済みの左右バランス部 */}
            <div className="relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-center gap-10">
                {/* 左：画像 */}
                <div className="w-full md:w-[300px] shrink-0">
                    <motion.div
                        className="rounded-2xl shadow-lg overflow-hidden aspect-square"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={profile.image}
                            alt="Profile picture of Nanasio"
                            className="w-full h-full object-cover object-top"
                            width={300}
                            height={300}
                        />
                    </motion.div>
                </div>

                {/* 右： */}
                <motion.div
                    className="flex-1 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-gray-800 space-y-6 max-w-3xl"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}>
                    {/* 🔹 名前と英語表記 */}
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <div className="flex items-center gap-3">
                            {/* アイコン（Heroicons: User Circle） */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 19.5a7.5 7.5 0 1115 0H4.5z"
                                />
                            </svg>

                            {/* 名前 + 英語表記 */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">ななしお</h3>
                                <p className="text-lg text-gray-600">Nanasio</p>
                            </div>
                        </div>
                    </div>

                    {/* 情報項目ブロック */}
                    <div className="space-y-3">
                        {/* 誕生日 */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                誕生日
                            </span>
                            <span className="text-lg text-gray-800">{profile.birthDate}</span>
                        </div>

                        {/* 趣味 */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                趣味
                            </span>
                            <span className="text-lg text-gray-800">{profile.hobbies.join("、")}</span>
                        </div>

                        {/* 特徴 */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                特徴
                            </span>
                            <span className="text-lg text-gray-800">{profile.features.join("、")}</span>
                        </div>

                        {/* 好きな食べ物 */}
                        <div className="flex items-start gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                好きな食べ物
                            </span>
                            <span className="text-lg text-gray-800">{profile.favoriteFoods.join("、")}</span>
                        </div>

                        {/* 好きなゲーム */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                好きなゲーム
                            </span>
                            <span className="text-lg text-gray-800">{profile.favoriteGames.join("、")}</span>
                        </div>

                        {/* 好きなもの */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                好きなもの
                            </span>
                            <span className="text-lg text-gray-800">{profile.favoriteThings.join("、")}</span>
                        </div>

                        {/* StrengthsFinder セクション */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                StrengthsFinder
                            </span>

                            {/* 横並びで5つの資質を表示 */}
                            <div
                                role="list"
                                className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 items-center"
                            >
                                {profile.strengths.map((strength, index) => (
                                    <motion.div
                                        key={index}
                                        role="listitem"
                                        className="bg-white bg-opacity-70 rounded-lg px-4 py-2 shadow text-sm font-semibold"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {strength}
                                    </motion.div>
                                ))}
                            </div>

                        </div>

                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}