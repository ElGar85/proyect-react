import {ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER} from "./types";

const initialGlobalState = {
    favorites:[],
    AllCharacters:[],
    acces: false,
    datail:[]
}

export default function rootReducer(state  = initialGlobalState, action){

    switch(action.type){
        case ADDFAVORITE:
            const addper = [...state.AllCharacters, action.payload]
            return {...state, favorites:addper, AllCharacters:[...addper]};
            // return {...state, favorites:[...state.favorites, action.payload]};
        case DELETEFAVORITE:
            return {...state, favorites: state.favorites.filter(fav => fav.id !== action.payload)}
        case FILTER:
            return {...state, favorites: state.AllCharacters.filter((pj)=> pj.gender === action.payload)}
        case FILTER:
            let copy = state.favorites.sort((a,b)=>{
                if(state.payload==='A'){
                    if(a > a) return 1
                }
            })
            return {...state, favorites:copy}
        default: 
          return {...state}
    }

}