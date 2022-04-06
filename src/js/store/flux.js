const getState = ({ getStore, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			category: ["people", "planets", "vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			planets: JSON.parse(localStorage.getItem("vehicles")) || [],
			result: {}
		},
		actions: {
			getApi: async () => {
				for (let categories of getStore().category) {
					try {
						let response = await fetch(`${getStore().URL_BASE}/${categories}`);
						let data = await response.json();
						if (response.ok) {
							 data.results.map(async (currentPerson) => {
								let responseDetail = await fetch(`${getStore().URL_BASE}/${categories}/${currentPerson.uid}`);
								let currentData = await responseDetail.json();
								setStore({
									...getStore(),
									[categories]: [...getStore()[categories], currentData]
								});
								localStorage.setItem(categories, JSON.stringify(getStore()[categories]));			
							});
						}
					} catch (error) {
						console.log(error);
					}

				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
