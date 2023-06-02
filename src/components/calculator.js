import '../App.css';
import Display from './display';

function Calculator() {
  return (
    <div className="container">
      <Display />
      <div className="text-center"> AC </div>
      <div className="text-center"> +/- </div>
      <div className="text-center"> % </div>
      <div className="text-center orange"> ÷ </div>
      <div className="text-center"> 7 </div>
      <div className="text-center"> 8 </div>
      <div className="text-center"> 9 </div>
      <div className="text-center orange"> x </div>
      <div className="text-center"> 4 </div>
      <div className="text-center"> 5 </div>
      <div className="text-center"> 6 </div>
      <div className="text-center orange"> - </div>
      <div className="text-center"> 1 </div>
      <div className="text-center"> 2 </div>
      <div className="text-center"> 3 </div>
      <div className="text-center orange"> + </div>
      <div className="zero text-center"> 0 </div>
      <div className="text-center"> . </div>
      <div className="text-center orange"> = </div>
    </div>
  );
}

export default Calculator;
