import * as actionTypes from "../constants/bookConstants";

export const getNovelsReducer = (state = { novels :[]} , action)=>{
    switch(action.type){
        case actionTypes.GET_NOVELS_REQUEST:
            return{
                loading :true,
                novels:[],
            };
        case actionTypes.GET_NOVELS_SUCCESS:
            return{
                loading: false,
                novels: action.payload,
            };
        case actionTypes.GET_NOVELS_FAIL:
            return{
                loading:false,
                error: action.payload,
            };
        default:
            return state;
    }
};

