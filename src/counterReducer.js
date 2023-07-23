export default function counterReducer(state={eurichy: 0}, action){
    switch(action.type){
        case 'UPLATI':
            return {
                eurichy: state.eurichy+1
            }
        case 'ISPLATI':
            return {
                eurichy: state.eurichy-1
            }
        case 'RESET':
            return {
                eurichy: 0
            }
        default:
            return state
    }
}