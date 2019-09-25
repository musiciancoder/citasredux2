const initialState = {
    citas:[]
}

 export default function(state = initialState, action) { //hacia el store
    switch(action.type) {
        case 'AGREGAR_CITA':
            return { //esto es el equivalente a this.setState con redux
                ...state,
                citas: [...state.citas, action.payload]
            }

        default:
            return state;
    }
}