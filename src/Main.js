import './Main.css';
import '../src/Stylesheets/Interface.css';
import _topnav_ from './Components/topnav';
import _lownav_ from './Components/lownav';
import _Semester_ from '../src/Components/Semester.jsx';
import _End_ from '../src/Components/End.jsx';
import _Settings_ from '../src/Components/Settings.jsx';
import { useState } from 'react';
export default function Main() {
  const [active, setActive] = useState({
    semester: true,
    end: false,
    settings: false,
  })
  function gotoComponent(component) {
    setActive(prevState => ({
      ...prevState,
      semester: false,
      end: false,
      settings: false,
      [component]: true
    }));
  }

  return (
    <div className="App">
      <_topnav_ />
      <main className='relative-viewport' >
        {active.semester && <_Semester_ />}
        {active.end && <_End_ />}
        {active.settings && <_Settings_ />}
      </main>
      <_lownav_ gotoComponent={gotoComponent} />
    </div>
  );
}