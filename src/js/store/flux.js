const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
					people: "people",
					planets: "planets",
					vehicles: "vehicles",
					starships: "starships",
					species: "species",
					favorite: []	
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			addFavorite: (fav) => {
				//get the store
				const store = getStore();

				store.favorite.includes(fav)? alert("This favorite already exists!"): (
					setStore({favorite: [...store.favorite, fav]})
				)
			},
				
			deleteFavorite: (favToDelete) => {
				//get the store
				const store = getStore();

					setStore({favorite: store.favorite.filter((fav)=> fav!== favToDelete)})	
			}
		}
	};
};

export default getState;
