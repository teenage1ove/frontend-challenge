import { useCallback, useEffect } from 'react';

interface IUseInfiniteScrollProps {
    loadingMore: boolean;
    fetchMoreCats: () => void;
    catsLength: number;
    loading: boolean;
}

export function useInfiniteScroll({loadingMore, fetchMoreCats, catsLength, loading}: IUseInfiniteScrollProps) {
    const handleScroll = useCallback(() => {
         if (
            window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight &&
            !loadingMore
        ) {
            fetchMoreCats();
        }
    }, [fetchMoreCats, loadingMore]);

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (catsLength < 15 && !loading) {
            fetchMoreCats();
        }

    }, [catsLength, fetchMoreCats, loading]);
}