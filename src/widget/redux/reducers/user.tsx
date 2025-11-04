import { FETCH_USER } from "../actions/user";
interface Action {
    type: string;
    payload?: number;
}

const initialState = {
    count: 0
};

const userReducer = (state = initialState, action: Action) => {

    switch (action.type) {

        case FETCH_USER._REQUEST: {
            const counterToUpdate = state?.count;
            return { 
                ...state, 
                count: counterToUpdate+1
            };
        }

        default:
            return state;
    }

};
export { userReducer }