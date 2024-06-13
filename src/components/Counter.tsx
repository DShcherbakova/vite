import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { counterSlice } from '../redux_rtk/counterSlice';

const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = () => {
        dispatch(counterSlice.actions.minus(1))
    }

    const handlePlus = () => {
        dispatch({ type: 'counter/plus', payload: 1 })
    }

  return (
    <div className='imgCounter'>
    <div className="counterContainer">
      <div className="counter">Counter: {counter}</div>
      <button className='buttonCounter' onClick={handleMinus}>Minus (Decrement)</button>
      <button className='buttonCounter' onClick={handlePlus}>Plus (Increment)</button>  
    </div>
    </div>
  )
}

export default Counter;