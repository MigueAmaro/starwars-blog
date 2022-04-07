const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			nature: ["people", "planets", "vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: [],
			result: {}
		},
		actions: {
			getApi: async () => {
				if (!getStore().people.length) {
					for (let categories of getStore().nature) {
						try {
							let response = await fetch(`${getStore().URL_BASE}/${categories}`);
							let data = await response.json();
							if (response.ok) {
								data.results.map(async (currentPerson) => {
									let responseDetail = await fetch(`${getStore().URL_BASE}/${categories}/${currentPerson.uid}`);
									let result = await responseDetail.json();
									setStore({
										...getStore(),
										[categories]: [...getStore()[categories], result.result]
									});
									localStorage.setItem(categories, JSON.stringify(getStore()[categories]));
								});
							}
						} catch (error) {
							console.log(error);
						}

					}
				}
			},

			hearted: (properties, status) => {
				for (let categories of getStore().nature) {
					try {
				value => {
					if (value.uid == properties.uid) {
						value.isFavorite = status;
					}
				}
			} catch(error){
				console.log(error);
			}
		}
			},
			favorites: (nature, properties) => {
				setStore({ favorites: [...getStore().favorites, { nature: nature, properties: properties }] });
				getActions().hearted(properties, true);
			},
			deleteFavorites: (nature, properties) => {
				let position;
				getStore().favorites.forEach(value => {
					if (value.nature == nature && value.properties.id == properties.id) {
						position = value._id;
					}
				});
				getStore().favorites.slice(position, 1);
				setStore({ favorites: [...getStore().favorites] });
				getActions().hearted(nature, properties, false);
			},
		}
	};
};

export default getState;
