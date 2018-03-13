// In this component we don't need to make use of any component state, so we are making a functional component

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length, 1);
    // Lodash 'sum' computes the sum of the values in an array, rather than us having to write our own function for adding up the elements in an array using a for-loop or 'map' iterator
    // Lodash 'round' computes number rounded to precision -> _.round(4.006, 2) = 4.01
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
            {/* Helper function above will compute average */}
        </div>
    )
}
