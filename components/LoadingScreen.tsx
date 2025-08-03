'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // pathname が変わったらローディングを終了（初回にも対応）
        if (pathname) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 1200); // 表示後にフェードアウト（任意の時間）
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                    style={{
                        backgroundImage: "url('/nanasio-loading.webp')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '20% auto',
                        backgroundColor: '#ffffff',
                    }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >

                </motion.div>
            )}
        </AnimatePresence>
    );
}
