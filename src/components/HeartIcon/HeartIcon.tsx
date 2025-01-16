import favorite_hover_block_img from '../../assets/favorite_border.svg'
import favorite_click_heart_img from '../../assets/favorite_click.svg'
import { ICat } from '../../store/store.interfaces'

interface IHeartIconProps {
	isFavorite: boolean
	cat: ICat
	onClick: (cat: ICat) => void
}

export const HeartIcon: React.FC<IHeartIconProps> = ({
	isFavorite,
	cat,
	onClick,
}) => {
	return (
		<div className='cats__like' onClick={() => onClick(cat)}>
			<img
				className='cats__like-icon'
				src={isFavorite ? favorite_click_heart_img : favorite_hover_block_img}
				alt='Heart Icon'
			/>
		</div>
	)
}
