import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Logo from './logo.svg'
import React, { useState } from "react";
import ShopCards from "./ShopCard";

const Icons = ({openNav,setOpenNav,openShop, setOpenShop}) => {
    const toggleMenu = () => {
        openNav ? setOpenNav(false) : setOpenNav(true)
    }
    const toggleShop = () => {
        openShop ? setOpenShop(false) : setOpenShop(true)
    }
    return ( 
        <ul className="icons">
            <button onClick={toggleShop}><ShoppingCartOutlined className="shop"/><p>Сагс</p></button>
            <button onClick={toggleMenu}><MenuOutlined className="menu"/><p>Ангилал</p></button>
        </ul>
     );
}
const DropDownNav = ({openNav, categories, setChooseCategories, chooseCategories, too, setToo}) => {
    const onClickFunction=(buttons)=>{
        setChooseCategories(buttons)
        buttons === 'electronics' ? setToo(1):
            buttons === 'jewelery' ? setToo(2):
            buttons === "men's clothing" ? setToo(3):
            buttons === "women's clothing" ? setToo(4) : setToo(0)
        console.log(buttons)
    }
    return(
        <div className={`dropdown ${openNav && 'openNav' }` }  id="subMenu">
            {categories.map((buttons) => 
            <button onClick={()=>onClickFunction(buttons)} >{buttons}</button>)}
        </div>
    )
} 
export default function Navbar({categories,setChooseCategories, chooseCategories, setChooseData, setToo, too}) {

    const [openNav, setOpenNav] = useState(false)
    const [openShop, setOpenShop] = useState(false)
    
    const logoFunction = () =>{
        setToo(0)
    }
     
    return(
        <div className="Navbar">
            <button onClick={logoFunction} className="logobutton"><img src={Logo} alt="logo" /></button>
            <Icons openNav={openNav} setOpenNav={setOpenNav} openShop={openShop} setOpenShop={setOpenShop}/>
            <DropDownNav 
                openNav={openNav} 
                categories={categories} 
                setChooseCategories={setChooseCategories} 
                chooseCategories={chooseCategories} 
                setChooseData={setChooseData} 
                too={too}
                setToo={setToo} />
            <ShopCards openShop={openShop}/>
        </div>
    )
};