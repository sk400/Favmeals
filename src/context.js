import React, { useContext, useEffect,  createContext, useReducer } from 'react'
import { fetchFromAPI } from './fetchFromAPI'

const context = createContext()

const defaultMeals = {
    meals: [],
    favoriteMeals: [],
    categories: [],
    mealsByCategory: [],
    randomMeal: {},
    mealsByArea: [],
    mealDetail: {},
    selectedMeal: {},
    showModal: false,
    showDrawer: false,
    mealName: "",
}


const setFavorites = (state, action) => {
    let isFavorite = state.favoriteMeals.find((item) => item.idMeal === action.id)
    if (isFavorite) {
        return [...state.favoriteMeals]
    } else {
        return [...state.favoriteMeals, action.value]
    }
}

const selectMeal = (state, action)=> {
    let selectedMeal;
  if (action.favorites) {
    selectedMeal = state.favoriteMeals.find((m)=> m.idMeal === action.id)
    
  } else {
    selectedMeal = state.meals.find((m)=> m.idMeal === action.id)
  }

  return selectedMeal;
}



const reducer = (state, action) => {
    switch (action.type) {
        case "meals":
            return {
                ...state, meals: action.value
            }
        case "favoriteMeals":
            return{
                ...state, favoriteMeals: setFavorites(state, action)
            }

        case "selectMeal":
            return {
                ...state, selectedMeal: selectMeal(state, action)
            }
        case "setModal":
            return {
                ...state, showModal: !state.showModal
            }
        case "setSearch":
            return {
                ...state, mealName: action.value
            }
        case "setDrawer":
            return {
                ...state, showDrawer: !state.showDrawer
            }
        case "removeFavorite":
            return {
                ...state, favoriteMeals: state.favoriteMeals.filter(fm => fm.idMeal !== action.id)
            }


        default:
            break;
    }
}


export const ContextProvider = ({ children }) => {
    const [mealData, dispatch] = useReducer(reducer, defaultMeals)

    // const allMearsUrl = "/search.php?s="
    // const randomMealUrl = "/random.php"
    // const mealsByAreaUrl = "/filter.php?a=Indian"
    // const mealDetailUrl = "/lookup.php?i=52785"
    // const allMealCategoriesUrl = "/categories.php"
    // const mealsByCategoryUrl = "/filter.php?c=Seafood"



    const { mealName } = mealData
    useEffect(() => {
        const getData = async () => {
            const data = await fetchFromAPI("search.php?s=")
            dispatch({ type: "meals", value: data })
        }

        getData()




    }, [])


    useEffect(() => {
        const getData = async () => {
            const data = await fetchFromAPI(`search.php?s=${mealName}`)
            dispatch({ type: "meals", value: data })
        }

        if (mealName.length === 0) return;

        getData()

    }, [mealName])


    const getRandomMeal = async () => {
        const randomMeal = await fetchFromAPI("/random.php")
        dispatch({ type: "meals", value: randomMeal })
    }



    console.log(mealData);












    const value = { mealData, dispatch, getRandomMeal }
    return <context.Provider value={value}>
        {children}
    </context.Provider>
}

export const useStateContext = () => useContext(context)





