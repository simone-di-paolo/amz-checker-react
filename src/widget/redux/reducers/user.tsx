import { USER_UPDATE_COUNT } from "../actions/user";
interface Action {
    type: string;
    payload?: number;
}

const initialState = {
    count: 0
};

const userReducer = (state = initialState, action: Action) => {

    switch (action.type) {

        case USER_UPDATE_COUNT:

        const counterToUpdate = state?.count;
            return { 
                ...state, 
                count: counterToUpdate+1
            };

        default:
            return state;
    }

};
export { userReducer }