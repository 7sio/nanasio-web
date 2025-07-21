'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function SpringPage() {
    return (
        <>
            <Navbar />
            <section className="relative w-full h-screen overflow-hidden">
                {/* 背景画像 */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/colorful-clover/spring/photo.jpg"
                        alt="Blooming background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
                </div>

                {/* テキストコンテンツ */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-wide drop-shadow-lg">
                        桜の記憶
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl drop-shadow-md">
                        白がほどけ、霞が告げる生命の調べ
                    </p>
                    <p className="mt-4 text-sm text-white/80 italic">
                        また、ここからはじまる物語――――。
                    </p>
                    <a href="#story">
                        <ArrowDownIcon className="w-6 h-6 mt-10 text-white" />
                    </a>
                </div>
            </section>

            {/* ストーリーセクション */}
            <section id="story" className="py-24 px-6 bg-white text-gray-800 text-center">
                <h2 className="text-3xl font-semibold mb-8 tracking-wide">春のことば</h2>
                <p className="max-w-3xl mx-auto leading-loose text-lg font-light">
                    降り積もる雪は、忘れかけた記憶をそっと撫でる。<br />
                    静けさの中に息づく声に、耳をすませば、<br />
                    あの日の景色が、やわらかく蘇る。
                </p>
            </section>

            {/* ギャラリーセクション */}
            <section id="gallery" className="py-24 px-6 bg-gray-50 text-center">
                <h2 className="text-3xl font-semibold mb-8 tracking-wide text-gray-700">桜の記録</h2>
                <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
                    <img src="/images/colorful-clover/spring/photo.jpg" alt="春景色1" className="rounded-lg shadow-md" />
                </div>
            </section>

            <section className="py-16 px-6 bg-white text-center">
                <a href="/colorful-clover/summer" className="inline-block px-6 py-3 text-white bg-pink-400 hover:bg-pink-500 rounded-full shadow-lg transition duration-300">
                    <img src="/images/colorful-clover/thumbnail-summer.jpg" alt="Summer" className="w-32 h-32 object-cover" />
                </a>
            </section>
        </>
    );
}
