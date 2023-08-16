import { StarFilled } from "@ant-design/icons";

const TitleDescription = () => {
    return ( 
        <div className="titleDescription">
            <h2>Title</h2>
            <p>Description</p>
        </div>
     );
}
const AboutTwo = ({setOpenAbout, openAbout}) =>{
    const onClickFunction = () => {
        openAbout ? setOpenAbout(false) : setOpenAbout(true)
    }
    return(
        <div className="aboutTwo">
            <TitleDescription/>
            <div className="rateTwo">
                <p>4.5</p>
                <StarFilled className="starFill"/>
            </div>
            <button>Сагсанд нэмэх</button>
            <button onClick={onClickFunction} className="exitButton">X</button>
        </div>
    )
}
const AboutPrice = () => {
    return(
        <div className="aboutPrice">
             <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='Price'/>
             <h2>79,000 ₮</h2>
        </div>
    )
}

 
export default function About({openAbout, setOpenAbout}) {
    return(
        <div className={`about ${openAbout && 'openAbout' }` }>
            <AboutPrice/>
            <AboutTwo setOpenAbout={setOpenAbout} openAbout={openAbout}/>
        </div>
    )
};