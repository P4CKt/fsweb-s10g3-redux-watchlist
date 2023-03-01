import { DELETE_FAV } from "../actions/actions"
import { ADD_FAV } from "../actions/actions"
import { NEXT_SHOW} from "../actions/actions"
import { movies } from "../movies"

const initialState={sira:0,
 fMovies:[]
  }

export function reducer(state=initialState,action){


    switch(action.type){
        case (DELETE_FAV):{
            return {
                ...state,
                fMovies: state.fMovies.filter((item)=> item.id !== action.payload)
            }
        }
        case (ADD_FAV):{
            return {
                ...state,
                fMovies: [...state.fMovies, action.payload]
            }
        }
        case (NEXT_SHOW):{
            return {
                ...state,
                sira: state.sira+1
            }
        }
          
        default:
            return state
    }
}