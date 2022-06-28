import { useSelector } from 'react-redux';
import { decrement, increment,signin} from './Actions';
import { useDispatch } from 'react-redux';
import './App.css';
import isLoggedReducer from './Reducers/isLogged';

function App() {
  const counter = useSelector((state)=>state.counter)
  const isLogged =useSelector((state)=>state.isLogged);


  const dispatch =useDispatch()
  return (
    <div className="App">
     <h2>Welcome To the redux</h2>
    <h4>The count is : {counter} </h4>

    <button onClick={()=>dispatch(increment())}>INCREMENT</button>
    <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
     
     {isLogged ? "Some valuable content u should not see":""}
     <button onClick={()=>dispatch(signin())}>VIEW</button>
    
     
    </div>
  );
}

export default App;

