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
				// reads the object, and converts the object to a string
				let exist = store.favorite.some((item)=>{
					return JSON.stringify(item)===JSON.stringify(fav);	
				});

				if(!exist){
					setStore({favorite: [...store.favorite, fav]})
				} else {
					alert("This favorite already exists!");
				}	
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
