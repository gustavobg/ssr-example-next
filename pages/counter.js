import Layout from '../features/Layout'
import Counter from "../features/Counter";
import {connect} from "react-redux";
import { increment, decrement, incrementAsync } from "../state/counter/actions";

const CounterExample = (props) => {
    const { dispatch, ...otherProps } = props;
    console.log(props)
    return (
        <Layout>
            <h1>Saga playground</h1>
            <Counter
              value={otherProps.value}
              onIncrement={() => dispatch(increment())}
              onDecrement={() => dispatch(decrement())}
              onIncrementAsync={() => dispatch(incrementAsync())} />
        </Layout>
    )
};

const mapStateToProps = state => ({
  value: state.counter
})

export default connect(mapStateToProps)(CounterExample);