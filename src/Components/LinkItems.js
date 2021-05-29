import React from 'react';
import '../App.css';
import {FaAngleDown} from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';

function LinkItems(){

    
        
    return(
        <div className="linkGrid" >
             {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton> */}
            <div className="dropdwn">
            <a href="#" className="drphd" >All<FaAngleDown className="arrw-dwn"></FaAngleDown> </a>
            <div className="drpdwn-Cnt" id="All-drpdwn">
            <a className="Link" href="index.html">Building Materials</a>
            <a className="Link" href="index.html">Roofing Products</a>
            <a className="Link" href="index.html">Hardware</a>
            <a className="Link" href="index.html">Modular Kitchen</a>
            <a className="Link" href="index.html">Furniture</a>
            <a className="Link" href="index.html">Wooden Plank</a>
            </div>
            </div>
            <div className="dropdwn">
            <a href="#" className="drphd">Building Materials<FaAngleDown className="arrw-dwn"></FaAngleDown> </a>
            <div className="drpdwn-Cnt">
            <a className="Link" href="index.html">Boards & Panels</a>
            <a className="Link" href="index.html">Wall Partitions</a>
            <a className="Link" href="index.html">Tiles</a>            
            </div>

            </div>
            <div className="dropdwn">
            <a href="#" className="drphd">Roofing Products<FaAngleDown className="arrw-dwn"></FaAngleDown> </a>
            <div className="drpdwn-Cnt">
            <a className="Link" href="index.html">Shingles</a>
            <a className="Link" href="index.html">False Ceilings</a>
            <a className="Link" href="index.html">PVC Ceilings</a>            
            </div>
            </div>

            <div className="dropdwn">
            <a href="#" className="drphd">Hardwares</a>
            </div>
            <div className="dropdwn">
            <a href="#" className="drphd">Modular Kitchen</a>

            </div>
            <div className="dropdwn">
            <a href="#" className="drphd">Furniture</a>
            </div>
            <div className="dropdwn">
            <a href="#" className="drphd" >Wooden Plank</a>
            </div>
        </div>
    )
}

export default LinkItems;
