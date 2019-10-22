import React, {useState} from 'react';
import logo from './components/Navbar/airbnb.svg'

const AirbnbParent = () => {
    const [total, setTotal] = useState(0);

    const setTotalHandler = () => {
        setTotal(total + 1)
    };

    return (
        <div>
            <img src={logo}/>
            <p>총합 {total}</p>
            <AirbnbChild onUpdate={setTotalHandler} type={'성인'}/>
            <AirbnbChild onUpdate={setTotalHandler} type={'어린이'}/>
            <AirbnbChild onUpdate={setTotalHandler} type={'유아'}/>
        </div>
    );
};



const AirbnbChild = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div><p onClick={() => {
                setCount(count + 1);
                props.onUpdate();
            }}>{props.type}</p><span>{count}</span></div>
        </div>
    );
};

export default AirbnbParent;