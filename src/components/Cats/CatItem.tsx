import { ICat } from '../../store/store.interfaces'
import { HeartIcon } from '../HeartIcon/HeartIcon'

interface ICatItemProps {
	cat: ICat
	handleMouseEnter: (id: string) => void
	handleMouseLeave: () => void
	handleToggleFavorite: (cat: ICat) => void
	isHoveredItem: string | null
	favorites: ICat[]
	key: string
}

export function CatItem({
	cat,
	handleMouseEnter,
	handleMouseLeave,
	handleToggleFavorite,
	isHoveredItem,
	favorites,
}: ICatItemProps) {
	return (
		<div
			className='cats__item'
			onMouseEnter={() => handleMouseEnter(cat.id)}
			onMouseLeave={handleMouseLeave}
		>
			<img src={cat.path} alt={cat.id} className='cats__img' />
			{isHoveredItem === cat.id && (
				<HeartIcon
					cat={cat}
					isFavorite={favorites.some(favorite => favorite.id === cat.id)}
					onClick={handleToggleFavorite}
				/>
			)}
		</div>
	)
}
