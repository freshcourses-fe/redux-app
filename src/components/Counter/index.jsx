import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as counterActionCreators from './../../redux/actions/counterActionCreators';
import translations from './translations.json';

function Counter(props) {
  const { count, step, lang } = useSelector((state) => ({
    count: state.counter.count,
    step: state.counter.step,
    lang: state.lang.lang,
  }));

  const dispatch = useDispatch();

  const { increment, decrement, setStep } = bindActionCreators(
    counterActionCreators,
    dispatch
  );

  const handleChange = ({ target: { value } }) => setStep(Number(value));

  const currentTranslation = translations[lang];
  const { countText, plusBtn, minusBtn } = currentTranslation;

  return (
    <div>
      <p>
        {countText}: {count}
      </p>
      <input
        type="number"
        placeholder="step"
        value={step}
        onChange={handleChange}
      />
      <button onClick={decrement}>{minusBtn}</button>
      <button onClick={increment}>{plusBtn}</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     count: state.counter.count,
//     step: state.counter.step,
//     lang: state.lang.lang,
//   };
//   // return state;
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     handleIncrement: () => dispatch(counterActionCreators.increment()),
//     handleDecrement: () => dispatch(counterActionCreators.decrement()),
//     changeStep: (newStep) => dispatch(counterActionCreators.setStep(newStep)),
//   };
// }

// const withStateInProps = connect(mapStateToProps, mapDispatchToProps);
// const AppWithState = withStateInProps(Counter);
// export default AppWithState;

export default Counter;
