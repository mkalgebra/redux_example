import './App.css';
import InfoBar from './InfoBar';
import {connect} from "react-redux"
import { isplataSRacuna, uplataNaRacun, resetRacuna } from './counterActions';

function App({data, uplatiOerich, isplatiOerich, resetOericha}) {
  return (
    <div>
      <InfoBar/>
      <div className='c-actions'>
        <div className='c-btn-minus' onClick={isplatiOerich}>
          <span className='action-label'>Smanji</span>
        </div>
        {data.eurichy}
        <div className='c-btn-plus' onClick={uplatiOerich}>
          <span className='action-label'>Povecaj</span>
        </div>
      </div>
      <button onClick={resetOericha}>Reset</button>
    </div>
  );
}

function mapStateToProps(state){
  return{
    data: state
  }
}

const mapDispatchToProps = {
  uplatiOerich: () => uplataNaRacun(),
  isplatiOerich: () => isplataSRacuna(),
  resetOericha: () => resetRacuna()
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
