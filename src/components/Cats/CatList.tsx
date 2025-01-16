import { useCallback, useEffect, useState } from 'react'
import useStore from '../../store/store'
import { ICat } from '../../store/store.interfaces'
import { CatItem } from './CatItem'

interface ICatListProps {
	isFavoriteList: boolean
}

export function CatList({ isFavoriteList }: ICatListProps) {
	const cats = useStore(state => state.cats)
	const getCats = useStore(state => state.getCats)
	const loading = useStore(state => state.loading)
	const addFavorite = useStore(state => state.addFavorite)
	const removeFavorite = useStore(state => state.removeFavorite)
	const favorites = useStore(state => state.favorites)
	const getFavorites = useStore(state => state.getFavorites)
	const fetchMoreCats = useStore(state => state.fetchMoreCats)
	const loadingMore = useStore(state => state.loadingMore)

	const [hoveredItemId, setHoveredItemId] = useState<string | null>(null)

	useEffect(() => {
		getCats()
		getFavorites()
	}, [getCats, getFavorites])

	const handleScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
				document.documentElement.offsetHeight &&
			!loadingMore
		) {
			fetchMoreCats()
		}
	}, [fetchMoreCats, loadingMore])

	useEffect(() => {
		if (cats.length < 15) {
			fetchMoreCats()
		}
		console.log('здесь')
	}, [cats, fetchMoreCats, loading])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	const handleMouseEnter = (id: string) => {
		setHoveredItemId(id)
	}

	const handleMouseLeave = () => {
		setHoveredItemId(null)
	}

	const handleToggleFavorite = (cat: ICat) => {
		const isFavorite = favorites.some(fav => fav.id === cat.id)
		if (isFavorite) {
			removeFavorite(cat.id)
		} else {
			addFavorite(cat)
		}
	}

	const catsToRender = isFavoriteList ? favorites : cats

	return (
		<div className='cats'>
			<div className='cats__list'>
			    {loading ? (
    				<div className='cats__loading'>Loading...</div>
    			) : (
    				catsToRender.map(cat => (
    					<CatItem
    						key={cat.id}
    						cat={cat}
    						handleMouseEnter={handleMouseEnter}
    						handleMouseLeave={handleMouseLeave}
    						handleToggleFavorite={handleToggleFavorite}
    						isHoveredItem={hoveredItemId}
    						favorites={favorites}
    					/>
    				))
    			)}
			</div>

			{!isFavoriteList
				? loadingMore && !loading && (
						<div className='cats__loading-more'>... загружаем еще котиков ...</div>
				  )
				: ''}
		</div>
	)
}
