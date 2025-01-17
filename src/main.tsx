import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cats } from './Pages/Cats/Cats.tsx'
import { FavoritesCats } from './Pages/FavoritesCats/FavoritesCats.tsx'
import { NotFound } from './Pages/NotFound/NotFound.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import './index.scss'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Cats />,
				},
				{
					path: '/favorites',
					element: <FavoritesCats />,
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	],
	{
		future: { v7_relativeSplatPath: true },
		basename: import.meta.env.VITE_BASE
	}
)

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} future={{ v7_startTransition: true }} />
)
