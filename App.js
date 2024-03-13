
import {Classcompo,Classcompo1} from './components/Classcompo';
import Functionalcompo from './components/Functionalcompo';
import { Click } from './components/Click';
import Counter from './components/Counter';
import Propclass from "./components/Propclass";
import Functionprop from './components/Functionprop';

function App() {
  return (
    <div>
      <Functionalcompo />
      <Classcompo />
      <Classcompo1 />
      <Click />
      <Counter />
      <Propclass name="bhanu" />
      <Propclass name="bhanu1" />
      <Propclass name="bhanu2" />
      <Functionprop name1="Functional props" />
    
    </div>
  );

}

export default App;
