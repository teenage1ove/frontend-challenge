import { Outlet, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export function Layout() {
	const location = useLocation()

	return (
		<>
			<header className='header'>
				<Link
					to={'/'}
					className={`header__link ${
						location.pathname === '/' && 'header__link_active'
					}`}
				>
					Все котики
				</Link>
				<Link
					to={'/favorites'}
					className={`header__link ${
						location.pathname === '/favorites' && 'header__link_active'
					}`}
				>
					Любимые котики
				</Link>
			</header>
			<main className='main'>
				<Outlet />
			</main>
		</>
	)
}
