'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return <>{isLoading ? <LoadingScreen /> : children}</>;
}
