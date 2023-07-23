import {connect} from "react-redux"

function InfoBar({infoMogRacuna}){
    return(
        <>
            <span style={{fontSize: '24px', fontWeight: '700'}}>Vase stanje racuna je: {infoMogRacuna.eurichy}€</span>
        </>
    )
}

function mapStateToProps(state){
    return{
        infoMogRacuna: state
    }
}

export default connect(mapStateToProps)(InfoBar)