export const DELETE_FAV="DELETE_FAV";
export const ADD_FAV="ADD_FAV";
export const NEXT_SHOW="NEXT_SHOW";



export const deleteFav= (id)=>({
    type: DELETE_FAV, payload: id,
})
export const addFav= (sira)=>({
    type: ADD_FAV, payload: sira,
})
export const nextShow= ()=>({
    type: NEXT_SHOW
})