'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileSection() {
    return (
        <motion.section
            id="profile"
            className="relative px-6 sm:px-12 md:px-20 py-16 text-black scroll-mt-24 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('/bg_profile-section.jpg')] bg-cover bg-center blur-sm" />
            </div>

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
                    Profile
                </h2>
            </div>

            {/* ✅ ここが修正済みの左右バランス部 */}
            <div className="relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-center gap-10">
                {/* 左：画像 */}
                <div className="w-full md:w-[300px] shrink-0">
                    <div className="rounded-2xl shadow-lg overflow-hidden aspect-square">
                        <Image
                            src="/nanasio.png"
                            alt="Profile picture of Nanasio"
                            className="w-full h-full object-cover object-top"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>

                {/* 右： */}
                <div className="flex-1 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-gray-800 space-y-6 max-w-3xl">
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
                            <span className="text-lg text-gray-800">2月18日</span>
                        </div>

                        {/* 趣味 */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                趣味
                            </span>
                            <span className="text-lg text-gray-800">ホラー・伝奇作品鑑賞、写真撮影、ワールド探索、お絵かき</span>
                        </div>

                        {/* 特徴 */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                特徴
                            </span>
                            <span className="text-lg text-gray-800">白・銀髪、赤目</span>
                        </div>

                        {/* 好きな食べ物 */}
                        <div className="flex items-start gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                好きな食べ物
                            </span>
                            <span className="text-lg text-gray-800">モンブラン、寿司</span>
                        </div>

                        {/* 好きなゲーム */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                好きなゲーム
                            </span>
                            <span className="text-lg text-gray-800">ゼノブレイド2、スプラトゥーン2/3、ひぐらしのなく頃に、Omegaの視界</span>
                        </div>

                        {/* 好きなもの */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                好きなもの
                            </span>
                            <span className="text-lg text-gray-800">青い海、青い空、洗礼されたシンプル</span>
                        </div>

                        {/* StrengthsFinder セクション */}
                        <div className="flex items-center gap-4">
                            <span className="inline-block min-w-[8rem] px-3 py-1 bg-gray-400 rounded-full font-semibold text-gray-700 text-sm text-center">
                                StrengthsFinder
                            </span>

                            {/* 横並びで5つの資質を表示 */}
                            <div role="list" className="flex flex-wrap justify-start gap-3">
                                <div role="listitem" className="flex items-center gap-2 px-3 py-2 bg-white border border-green-200 shadow-md rounded-lg min-w-[180px] text-sm">
                                    <span className="text-base">💡</span>
                                    <span className="text-green-900 font-semibold">戦略性（Strategic Thinking）</span>
                                </div>
                                <div role="listitem" className="flex items-center gap-2 px-3 py-2 bg-white border border-green-200 shadow-md rounded-lg min-w-[180px] text-sm">
                                    <span className="text-base">💭</span>
                                    <span className="text-green-900 font-semibold">着想（Strategic Thinking）</span>
                                </div>
                                <div role="listitem" className="flex items-center gap-2 px-3 py-2 bg-white border border-purple-200 shadow-md rounded-lg min-w-[180px] text-sm">
                                    <span className="text-base">🎯</span>
                                    <span className="text-purple-900 font-semibold">達成欲（Executing）</span>
                                </div>
                                <div role="listitem" className="flex items-center gap-2 px-3 py-2 bg-white border border-blue-200 shadow-md rounded-lg min-w-[180px] text-sm">
                                    <span className="text-base">📥</span>
                                    <span className="text-blue-900 font-semibold">収集心（Strategic Thinking）</span>
                                </div>
                                <div role="listitem" className="flex items-center gap-2 px-3 py-2 bg-white border border-red-200 shadow-md rounded-lg min-w-[180px] text-sm">
                                    <span className="text-base">🧬</span>
                                    <span className="text-red-900 font-semibold">個別化（Relationship Building）</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    );
}