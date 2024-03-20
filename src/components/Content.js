import { Link } from "react-router-dom";
import SS from '../assets/image/SS.jpg'
import KR from '../assets/image/KR.jpg'
import UTM from '../assets/image/UTM.jpg'
import ANM from '../assets/image/Anime.jpg'

function Content(){
    return(
        <Link to="/content">
            <image scr={SS} alt="" className="" />
            <image scr={KR} alt="" className="" />
            <image scr={UTM} alt="" className="" />
            <image scr={ANM} alt="" className="" />
        </Link>
        
    )
}
export default Content();