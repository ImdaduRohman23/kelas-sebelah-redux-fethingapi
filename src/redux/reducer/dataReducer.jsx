import TYPES from "../types";

const intialState = {
    data : []
};

const dataReducer = (state = intialState, action) => {
    switch (action.type) {
        case TYPES.FETCHING_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
};

export default dataReducer;