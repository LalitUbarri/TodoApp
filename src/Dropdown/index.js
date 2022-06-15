import React, { useState } from 'react';
import Dropdown1 from './dropdown';

const Dropdown = (props) => {
    const [dropdown, setdropdown] = useState('');

    const OnchangeHandle = (e) => {
        setdropdown(e)
    }
    return (
        <>
            <section>
                <div className="dropdown_container">
                    <div className="dorp_outer mt-5">
                        <span> Car </span>
                        <Dropdown1 title1="car1" OnchangeHandle={OnchangeHandle} title2="car2" title3="car3 " />
                        <spna> car mfg</spna>
                        <Dropdown1 title1="india" OnchangeHandle={OnchangeHandle} title2="india1" title3="india2" title4="india3" />
                        <div className="table">
                            <div className="thead">
                                <div className="th"> Car </div>
                                <div className="th"> Car Modal</div>
                                <div className="th"> Car mfg </div>
                            </div>
                            {
                                props.data.map((item, i) => {
                                    if (item.carName === dropdown || item.mfg === dropdown) {
                                        return <div className="tbody" key={i}>
                                            <div className="td"> {item.carName}</div>
                                            <div className="td"> {item.carModal}</div>
                                            <div className="td"> {item.mfg}</div>
                                        </div>
                                    } else {
                                        if (dropdown === "") {
                                            return <div className="tbody" key={i}>
                                                <div className="td"> {item.carName}</div>
                                                <div className="td"> {item.carModal}</div>
                                                <div className="td"> {item.mfg}</div>
                                            </div>
                                        }
                                    }

                                })
                            }

                        </div>
                    </div>
                    {/* <ul className="menu">
                     {
                         car.map(item => {
                             return  <li className="nav_link"> Car 
                             <ul className="dropdown_menu"> 
                                 <li className="nav_link"> </li>
                             </ul>
                          </li>
                         })
                     }
                 </ul> */}
                </div>
            </section>
        </>
    );
}

export default Dropdown;
