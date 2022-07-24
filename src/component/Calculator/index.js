import React from "react";

import './index.css';

export default class Calculator extends React.Component {

    state = {
        currentNumber: 0,
        sum: 0,
        initialCells: ["AC",'/','X',7,8,9,'-',4,5,6,'+',1,2,3,0,'.','='],
    }

    render() {
        return (
            <div className={'calculator'}>
                {this.state.currentNumber}
                <div className={'calc-main'}>
                    {
                        this.state.initialCells.map(el => <div key={el} className={el}> {el} </div>)
                    }
                </div>
            </div>
        )
    }
}
