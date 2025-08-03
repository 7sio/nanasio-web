'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <motion.div
            className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-5xl font-bold mb-4">404 - ページが見つかりません</h1>
            <p className="mb-8 text-lg text-gray-600">お探しのページは存在しないか、移動した可能性があります。</p>
            <Link
                href="/"
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
            >
                ホームに戻る
            </Link>
        </motion.div>
    );
}
