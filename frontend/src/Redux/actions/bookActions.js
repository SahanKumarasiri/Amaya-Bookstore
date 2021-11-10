import *  as actionTypes from  "../constants/bookConstants";
import axios from "axios";

export const getNovels=()=>async(dispatch)=>{
    try {
        dispatch({type : actionTypes.GET_NOVELS_REQUEST});

        const {data} = await axios.get("http://localhost:8070/novel");

        dispatch({
            type : actionTypes.GET_NOVELS_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: actionTypes.GET_NOVELS_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                :error.message
        }) ; 
    }
}
