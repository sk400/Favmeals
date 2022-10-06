import React, { useContext, useEffect, useState, createContext, useReducer } from 'react'
import { fetchFromAPI } from './fetchFromAPI'

const context = createContext()

const defaultMeals = {
    meals: [],
    categories: [],
    mealsByCategory: [],
    randomMeal: [],
    mealsByArea: [],
    mealDetail: {},
    selectedMeal: {},
}


const reducer = (state, action) => {
    switch (action.type) {
        case "meals":
            return {
                ...state, meals: action.value
            }
        case "selectMeal":
            return {
                ...state, selectedMeal: action.value
            }

        default:
            break;
    }
}

export const ContextProvider = ({ children }) => {
    const [mealData, dispatch] = useReducer(reducer, defaultMeals)

    const allMearsUrl = "/search.php?s="
    const randomMealUrl = "/random.php"
    const mealsByAreaUrl = "/filter.php?a=Indian"
    const mealDetailUrl = "/lookup.php?i=52785"
    const allMealCategoriesUrl = "/categories.php"
    const mealsByCategoryUrl = "/filter.php?c=Seafood"




    useEffect(() => {
        const getData = async () => {
            const data = await fetchFromAPI("search.php?s=")
            dispatch({ type: "meals", value: data })
        }

        getData()




    }, [])


    console.log(mealData);











    const value = { mealData, dispatch }
    return <context.Provider value={value}>
        {children}
    </context.Provider>
}

export const useStateContext = () => useContext(context)





