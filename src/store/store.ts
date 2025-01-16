import axios from 'axios'
import { create } from 'zustand'
import { ICat, IResponseCat, IStore } from './store.interfaces'

const useStore = create<IStore>(set => ({
	cats: [],
	favorites: [],
	loading: false,
	loadingMore: false,

	getCats: async () => {
		set({ loading: true })
		try {
			const response = await axios.get<IResponseCat[]>(
				'https://api.thecatapi.com/v1/images/search?limit=10'
			)

			const newCats: ICat[] = response.data.map(cat => ({
				path: cat.url,
				id: cat.id,
			}))

			set(state => ({
				cats: [...state.cats, ...newCats],
			}))
		} catch (error) {
			console.error(error)
		} finally {
			set({ loading: false })
		}
	},

	fetchMoreCats: async () => {
        set({ loadingMore: true });
        try {
            const response = await axios.get<IResponseCat[]>(
                'https://api.thecatapi.com/v1/images/search?limit=12'
            );
            const newCats: ICat[] = response.data.map(cat => ({ path: cat.url, id: cat.id }));
            set(state => ({ cats: [...state.cats, ...newCats], loadingMore: false }));
        } catch (error) {
            console.error(error);
            set({ loadingMore: false });
        }
    },

	getFavorites: () => {
		const storedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		)
		set({ favorites: storedFavorites })
	},

	addFavorite: (cat: ICat) => {
		const favorites = useStore.getState().favorites
		const updatedFavorites = [...favorites, cat]
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
		set({ favorites: updatedFavorites })
	},

	removeFavorite: (id: string) => {
		const favorites = useStore.getState().favorites
		const updatedFavorites = favorites.filter(cat => cat.id !== id)
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
		set({ favorites: updatedFavorites })
	},
}))

export default useStore
