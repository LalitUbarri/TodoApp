import React from 'react';

const Dropdown = (props) => {
    return (
        <div>
            <select onChange={(e) => props.OnchangeHandle(e.target.value)} className="dropdown_select">
                <option value=""> choose one </option>
                <option>{props.title1}</option>
                <option>{props.title2}</option>
                <option>{props.title3}</option>
                <option>{props.title4}</option>
            </select>
        </div>
    );
}

export default Dropdown;
