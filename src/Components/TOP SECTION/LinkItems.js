import React from 'react';
import './top.css';
import {FaAngleDown} from 'react-icons/fa';
import { Dropdown} from 'semantic-ui-react';



function LinkItems(){

    
        
    return(
        <div className="linkGrid" >

        {/* ALL SECTION */}
        <Dropdown text='All' className="drphd">
                <Dropdown.Menu>
                    <Dropdown.Item text='Building Materials' />
                    <Dropdown.Item text='Modular Kitchen'/ >
                    <Dropdown.Item text='Roofing products'></Dropdown.Item>
                    <Dropdown.Item text='Furniture' />
                    <Dropdown.Item text='Wooden Plank' />
                    <Dropdown.Item text='Hardware' />
                </Dropdown.Menu>
            </Dropdown>

            {/* BUILDING MATERIALS */}
            <Dropdown text='Building Materials' className="drphd">
                <Dropdown.Menu>
                    <Dropdown.Item text='Boards & Panels' >
                        <Dropdown text='Boards & Panels'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Wooden</Dropdown.Item>
                                <Dropdown.Item>Fibre</Dropdown.Item>
                                <Dropdown.Item>Shera</Dropdown.Item>                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item text='Wall partitions' />
                    <Dropdown.Item text='Tiles' />
                </Dropdown.Menu>
            </Dropdown>

            {/* ROOFING PRODUCTS */}
            <Dropdown text='Roofing Products' className="drphd">
                <Dropdown.Menu>
                    <Dropdown.Item text='Furniture' />
                    <Dropdown.Item text='Wooden Plank' />
                    <Dropdown.Item text='Hardware' />
                </Dropdown.Menu>
            </Dropdown>

            {/* HARDWARES */}
            <div className="dropdwn">
                <a href="#" className="drphd">Hardwares</a>
            </div>

            {/* MODULAR KITCHEN */}
            <div className="dropdwn">
                <a href="#" className="drphd">Modular Kitchen</a>
            </div>

            {/* FURNITURE */}
            <div className="dropdwn">
                <a href="#" className="drphd">Furniture</a>
            </div>

            {/* WOODEN PLANK */}
            <div className="dropdwn">
                <a href="#" className="drphd" >Wooden Plank</a>
            </div>
            
        </div>
    )
}         
            
        

export default LinkItems;
