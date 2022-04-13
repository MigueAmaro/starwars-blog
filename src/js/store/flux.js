const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URL_BASE: "https://www.swapi.tech/api",
      nature: ["people", "planets", "vehicles"],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: JSON.parse(localStorage.getItem("favorite")) || [],
      searchResult: JSON.parse(localStorage.getItem("searchResult")) || [],
      result: {},
    },
    actions: {
      getApi: async () => {
        if (!getStore().people.length) {
          for (let categories of getStore().nature) {
            try {
              let response = await fetch(
                `${getStore().URL_BASE}/${categories}/?page=2&limit=100`
              );
              let data = await response.json();
              if (response.ok) {
                data.results.map(async (currentPerson) => {
                  let responseDetail = await fetch(
                    `${getStore().URL_BASE}/${categories}/${currentPerson.uid}`
                  );
                  let result = await responseDetail.json();
                  setStore({
                    ...getStore(),
                    [categories]: [...getStore()[categories], result.result],
                  });
                  localStorage.setItem(
                    categories,
                    JSON.stringify(getStore()[categories])
                  );
                });
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
      },
      hearted: (id) => {
        let exist = getStore().favorites.find((item) => {
          return item._id == id;
        });
        if (!exist) {
          for (let categories of getStore().nature) {
            let favorites;
            favorites = getStore()[categories].find((item) => {
              return item._id == id;
            });
            if (favorites) {
              setStore({
                ...getStore(),
                favorites: [...getStore().favorites, favorites],
              });
              localStorage.setItem(
                "favorites",
                JSON.stringify(getStore().favorites)
              );
            }
          }
        } else {
          let newFavorites = getStore().favorites.filter((item) => {
            return item._id != id;
          });
          setStore({
            ...getStore(),
            favorites: newFavorites,
          });
          localStorage.setItem(
            "favorites",
            JSON.stringify(getStore().favorites)
          );
        }
      },
      deleteFavorites: (id) => {
        let daFavorites = getStore().favorites.filter((item) => {
          return item._id != id;
        });
        setStore({
          ...getStore(),
          favorites: daFavorites,
        });
        localStorage.setItem("favorites", JSON.stringify(getStore().favorites));
      },

      getSearch: async (e) => {
        try {
          let response = await fetch(
            `${URL_BASE}/people/?name=${e.target.value}`
          );
          let data = await response.json();
          if (response.ok) {
            setStore({
              ...getStore(),
              searchResult: [...getStore().searchResult, data],
            });
            localStorage.setItem(
              "searchResult",
              JSON.stringify(getStore().searchResult)
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
