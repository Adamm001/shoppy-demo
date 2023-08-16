import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const ShopPrice = () => {
    return(
        <div className='shopPrice'>
            <p>79,000 ₮</p>
            <button>X</button>
        </div>
    )
}
const PlusButton = ({count, setCount}) => {
    const plusFunction = (count, setCount) =>{
        setCount(count+1)
    }
    
    const minumFunction = (count, setCount) =>{
        setCount(count-1)
    }
    return(
        <div className='plusButton'>
            <PlusOutlined onClick={()=>plusFunction(count, setCount)} className='plus'/>
            <p>{count}</p>
            <MinusOutlined onClick={()=>minumFunction(count, setCount)} className='minus'/>
        </div>
    )
}
const PlusPrice = ({count, price, setCount}) => {
    const niit = price * count
    return(
        <div className='plusPrice'>
            <PlusButton count={count} setCount={setCount} />
            <p>Нийт: {niit} $</p>
        </div>
    )
}

const ShopCard = () => {
    const [count, setCount] = useState(1);
    const price = 79000
    return(
        <div className='shopCard'>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='Price'/>
            <div className='shopText'>
                <h2>Title</h2>
                <ShopPrice 
                    count={count} 
                    price={price} />
                <PlusPrice 
                    count={count} 
                    price={price}
                    setCount={setCount} />
            </div>
        </div>
    )
}

const Niit = () => {
    return(
        <div className='Niit'>
            <h2>Нийт төлөх дүн: 47,000 ₮</h2>
            <button>Худалдан авах</button>
        </div>
    )
}
export default function ShopCards({openShop}) {
    return(
        <div className={`shopCards ${openShop && 'openShop'}`} id='shopCards'>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <Niit/>
        </div>
    )
}