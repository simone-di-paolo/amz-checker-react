import { 
    UPDATE_UI,
    CHANGE_SCREEN
 } from "../actions/userSettings";

export interface UserSettings {
    uiSettings: object;
}

// CORREZIONE: Aggiunta la parola chiave 'export'
export interface Action<T> {
    type: string;
    selectedScreen: string;
}

const initialState: UserSettings = {
    uiSettings: {
        screen: 'main-screen' // main screen, initally
    }
};

const userReducer = (state = initialState, action: Action<any>): UserSettings => {

    switch (action.type) {

       case UPDATE_UI: {

            return {
                ...state
            };
       }

       case CHANGE_SCREEN: {
            const {
                selectedScreen
            } = action;

            return {
                ...state,
                uiSettings: {
                    ...state.uiSettings,
                    screen: selectedScreen
                }
            };
       }

        default:
            return state;
    }

};
export { userReducer }
