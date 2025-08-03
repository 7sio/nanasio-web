import type { NewsItem } from '../types/news';

export const newsData: NewsItem[] = [
    {
        id: 1,
        date: '2026-01-01',
        image: '/news1.jpg',
        alt: '初投稿',
        title: '初投稿',
        description: 'サイト開設！',
        link: '/news/first-post',
    },
    {
        id: 2,
        date: '2025-07-15',
        image: '/news2.jpg',
        alt: 'Webリニューアル',
        title: 'Webサイト全面リニューアル',
        description: 'デザイン・機能を一新しました。',
        link: '/news/site-renewal',
    },
    {
        id: 3,
        date: '2025-07-28',
        image: '/news3.jpg',
        alt: 'ギャラリー更新',
        title: 'ギャラリー更新',
        description: '夏イベントのスクリーンショットを多数追加しました。',
        link: '/news/gallery-update',
    },
];
