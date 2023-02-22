import { RECEIVE_ALL_CHARACTERS } from "../actions/receive.characters";

const initialState = {
    characters: []
}

export default function allCharactersReducer(state = initialState, action){
    switch(action.type){
        case RECEIVE_ALL_CHARACTERS: 
            return {
                ...state, characters: action.data
            }
        default: return state;
    }
};