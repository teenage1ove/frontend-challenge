export interface Image {
    id:  string;
    url: string;
}


export interface ICat {
	id: string
	path: string
}

export interface IStore {
	cats: ICat[]
	favorites: ICat[]
    loading: boolean
    loadingMore: boolean
    getCats: () => void
    getFavorites: () => void
	addFavorite: (cat: ICat) => void
	removeFavorite: (id: string) => void
    fetchMoreCats: () => void
}

export interface IResponseCat {
	id: string
	url: string
	width: number
	height: number
}

