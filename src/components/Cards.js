import { StarFilled } from "@ant-design/icons";
import About from "./About";
import { useState } from "react";

const Text = ({text, description}) => {
    return ( 
        <div className="texts">
            <h2>{text}</h2>
            <p>{description}</p>
        </div>
     );
}
const Rate = ({rating}) => {
    return(
        <div className="rate">
            <p>{rating.rate}</p>
            <StarFilled />
        </div>
    )
}
const Price = ({price, rating}) => {
    return(
        <div className="price">
            <h1>{price} $</h1>
            <Rate className="star" rating={rating}/>
        </div>
    )
}
const Buttons = ({setOpenAbout, openAbout}) => {
    const toggleAbout = () => {
        openAbout ? setOpenAbout(false) : setOpenAbout(true)
    }
    return(
        <div className="buttons">
            <button onClick={toggleAbout}>Дэлгэрэнгүй</button>
            <button>Сагсанд Нэмэх</button>
        </div>
    )
}

const Card = ({setOpenAbout, openAbout, cardData}) => {
    const text = cardData.title
    const image = cardData.image
    const price = cardData.price
    const description = cardData.description
    const rating = cardData.rating
    const id = cardData.id
    return(
        <div className="card">
            <img src={image} alt="Img"/>
            <Text
                text={text}
                description={description}/>
            <Price 
                price={price}
                rating={rating} />
            <Buttons 
                openAbout={openAbout} 
                setOpenAbout={setOpenAbout}
                id={id} />
        </div>
    )
}

export default function Cards({products}) {
    const [openAbout, setOpenAbout] = useState(false);
    
    return(
        
        <div className="cards">
            {products.map((cardData) =>
                <Card 
                    cardData={cardData}
                    setOpenAbout={setOpenAbout}
                    openAbout={openAbout}/>
            )}
            <About openAbout={openAbout} setOpenAbout={setOpenAbout}/>
        </div>

    )
};