import React from 'react'
import './App.css'
import ShowMessageAlert from './Components/ShowMessageAlert'
import ShowState from './Components/ShowState'
import ShowName from './Components/ShowName'
import Change from './Components/ChangeNameAndAge'
import TrueOrFalse from './Components/ShowTrueOrFalse'
import ShowInfo from './Components/ShowInfo'
import ShowArray from './Components/ShowStateArray'
import ShowRef from './Components/ShowHRefs'

function App() {
  return (
      <div className="App">
          <ShowState />
          <ShowMessageAlert />
          <ShowName />
          <Change />
          <TrueOrFalse />
          <ShowInfo />
          <ShowArray />
          <ShowRef/>
    </div>
  );
}

export default App;
