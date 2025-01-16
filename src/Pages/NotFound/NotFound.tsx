import { Link } from 'react-router-dom'

export function NotFound() {
	return <div className='error-page'>
        <div className='error-page__text'>Такой страницы не существует, попробуйте перейти на главную</div>
        <Link to={'/'} className='error-page__link'>На главную</Link>
    </div>
}
