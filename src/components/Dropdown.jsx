import React, { useState } from 'react';
import ArrowDown from './imgs/icon-arrow-down.svg';
import ArrowUp from './imgs/icon-arrow-up.svg'
import './Dropdown.css'

const Dropdown = ({ title, options, id }) => {
    const [enable, setEnable] = useState(false);
    const idImg = `img-${id}`

    function buttonTip(e, pos) {
        function icon() {
            if (e.symbol === null) return <></>;
            return (
                <div className="image-pack">
                    <img className="icon-dropdown-item" src={e.symbol} alt="" />
                </div>
            );
        }
        return (
            <div className="dropdown-item" key={pos}>
                {icon()}
                <span className="title-dropdown-item">{e.name}</span>
            </div>
        )
    }

    const handleDropdownClick = (e) => {
        let aux = !enable
        setEnable(aux);
        let dropdown = document.getElementById(id)
        let arrow = document.getElementById(idImg)
        if (aux) {
            arrow.src = ArrowUp;
            dropdown.classList.remove('hide')
        } else {
            arrow.src = ArrowDown;
            dropdown.classList.add('hide')
        }
    }

    return (
        <>
            <div className="dropdown-container">
                <button onClick={handleDropdownClick} className='dropdown-button'>
                    {title}
                </button>
                <img id={idImg} src={ArrowDown} className="arrow" alt="" />
                <div id={id} className="list-dropdown hide">
                    {options.map((e, pos) => buttonTip(e, pos))}
                </div>
            </div>
        </>
    );
}

export default Dropdown;