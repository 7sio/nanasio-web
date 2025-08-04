'use client';
import { newsData } from '../data/newsData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsSection() {
  // 最新順にソート & 上位3件を抽出
  const sortedNews = [...newsData]
    .sort((a, b) => b.id - a.id) // ← date ではなく id を基準にソート
    .slice(0, 3);

  return (
    <motion.section
      id="news"
      aria-labelledby="news-heading"
      className="relative py-20 px-6 text-center scroll-mt-24 overflow-hidden bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h2
        id="news-heading"
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
        News
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sortedNews.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={item.link} passHref>
              <div className="cursor-pointer">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="text-xs text-gray-500 mb-1">
                    {new Date(item.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 「もっと見る」リンク */}
      <div className="mt-10">
        <Link href="/news" className="text-blue-600 hover:underline text-sm">
          → もっと見る
        </Link>
      </div>
    </motion.section>
  );
}
